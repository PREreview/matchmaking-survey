export const RATING_LABELS: Record<number, string> = {
  5: "Squarely in my research area",
  4: "Closely related to my area",
  3: "Somewhat related / partial overlap",
  2: "Only slightly related",
  1: "Not related to my research area",
};

export const RATING_UNSURE_LABEL = "Not sure";

export const ratingLabelFor = (rating: number): string =>
  rating === 0 ? RATING_UNSURE_LABEL : RATING_LABELS[rating];
