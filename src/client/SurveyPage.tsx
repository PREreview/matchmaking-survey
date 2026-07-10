import "survey-core/survey-core.min.css"
import { Model, Survey } from "survey-react-ui"
import { useEffect, useRef, useState } from "react"
import type { SurveyModel } from "survey-core"

type Paper = { id: number; title: string; abstract: string; display_order: number }
type Response = { paper_id: number; rating: number; comment: string | null }
type State =
  | { status: "loading" }
  | { status: "not_found" }
  | { status: "ready"; scientist: { submitted_at: string | null }; papers: Paper[]; responses: Response[] }
  | { status: "submitted" }
  | { status: "error"; message: string }

const RATING_LABELS: Record<number, string> = {
  1: "Not interesting",
  2: "Slightly interesting",
  3: "Moderately interesting",
  4: "Very interesting",
  5: "Extremely interesting",
}

function buildSurveyJson(papers: Paper[], savedResponses: Response[]) {
  const responseMap = new Map(savedResponses.map((r) => [r.paper_id, r.rating]))
  const commentMap = new Map(savedResponses.map((r) => [r.paper_id, r.comment]))
  return {
    showProgressBar: "top",
    progressBarType: "pages",
    showQuestionNumbers: false,
    pages: papers.map((paper) => ({
      name: `paper_${paper.id}`,
      elements: [
        {
          type: "html",
          name: `abstract_${paper.id}`,
          html: `<div class="paper-abstract">
            <h2 class="paper-title">${escapeHtml(paper.title)}</h2>
            <p>${escapeHtml(paper.abstract)}</p>
          </div>`,
        },
        {
          type: "rating",
          name: `rating_${paper.id}`,
          title: "How interesting do you find this paper?",
          isRequired: true,
          rateMin: 1,
          rateMax: 5,
          minRateDescription: RATING_LABELS[1],
          maxRateDescription: RATING_LABELS[5],
          defaultValue: responseMap.get(paper.id) ?? undefined,
        },
        {
          type: "comment",
          name: `comment_${paper.id}`,
          title: "Any comments about this paper? (optional)",
          isRequired: false,
          defaultValue: commentMap.get(paper.id) ?? undefined,
        },
      ],
    })),
    completedHtml:
      "<h3>Thank you for your responses!</h3><p>Your feedback has been recorded.</p>",
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export default function SurveyPage({ token }: { token: string }) {
  const [state, setState] = useState<State>({ status: "loading" })
  const modelRef = useRef<SurveyModel | null>(null)

  useEffect(() => {
    fetch(`/api/s/${token}`)
      .then((r) => {
        if (r.status === 404) return setState({ status: "not_found" })
        return r.json().then((data) => {
          if (data.scientist.submitted_at) {
            setState({ status: "submitted" })
          } else {
            setState({
              status: "ready",
              scientist: data.scientist,
              papers: data.papers,
              responses: data.responses,
            })
          }
        })
      })
      .catch(() => setState({ status: "error", message: "Failed to load survey." }))
  }, [token])

  if (state.status === "loading") return <p style={{ padding: "2rem" }}>Loading…</p>
  if (state.status === "not_found")
    return <p style={{ padding: "2rem" }}>Survey link not found. Please check your email.</p>
  if (state.status === "error")
    return <p style={{ padding: "2rem", color: "red" }}>{state.message}</p>
  if (state.status === "submitted")
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Thank you!</h2>
        <p>Your responses have been submitted.</p>
      </div>
    )

  const { papers, responses } = state
  const surveyJson = buildSurveyJson(papers, responses)
  const model = new Model(surveyJson)
  modelRef.current = model

  const savePaperAnswer = async (sender: SurveyModel, pageName: string) => {
    const match = pageName.match(/^paper_(\d+)$/)
    if (!match) return
    const paperId = Number(match[1])
    const rating = sender.getValue(`rating_${paperId}`)
    if (rating == null) return
    const comment = sender.getValue(`comment_${paperId}`) ?? null
    await fetch(`/api/s/${token}/answer`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ paper_id: paperId, rating, comment }),
    })
  }

  model.onCurrentPageChanged.add(async (sender, options) => {
    // Save the answer for the page we just left
    const prevPage = options.oldCurrentPage
    if (!prevPage) return
    await savePaperAnswer(sender, prevPage.name)
  })

  model.onComplete.add(async (sender) => {
    // Save any remaining answers from the last page
    for (const page of sender.pages) {
      await savePaperAnswer(sender, page.name)
    }
    await fetch(`/api/s/${token}/submit`, { method: "POST" })
    setState({ status: "submitted" })
  })

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <style>{`
        .paper-abstract { margin-bottom: 1rem; }
        .paper-title { font-size: 1.25rem; margin-bottom: 0.5rem; }
        .sd-root-modern { background: transparent !important; }
      `}</style>
      <Survey model={model} />
    </div>
  )
}
