export const getRatingClassName = (rating: number): string => {
  if (rating < 5) {
    return "bad";
  } else if (rating < 7) {
    return "common";
  } else if (rating < 8) {
    return "good";
  } else {
    return "top";
  }
};
