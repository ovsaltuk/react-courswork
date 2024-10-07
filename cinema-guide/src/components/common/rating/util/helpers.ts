export const getRatingClassName = (rating?: number): string => {
  if (rating ) {
    if (rating < 5) {
      return "bad";
    } else if (rating < 7) {
      return "common";
    } else if (rating < 8) {
      return "good";
    } else {
      return "top";
    }
  } else {
    return ""
  }
  
};
