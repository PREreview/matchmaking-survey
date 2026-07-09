import AdminPage from "./AdminPage.js"
import SurveyPage from "./SurveyPage.js"

export default function App() {
  const path = window.location.pathname

  if (path.startsWith("/s/")) {
    const token = path.slice(3).split("/")[0]
    return <SurveyPage token={token} />
  }

  if (path.startsWith("/admin")) {
    return <AdminPage />
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p>Please use the link provided to you to access your survey.</p>
    </div>
  )
}
