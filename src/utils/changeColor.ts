export const toggleClass = (
  selector: string,
  className: string,
  add: boolean = true
) => {
  try {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      elements.forEach((element) => {
        if (add) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      });
    }
  } catch (error) {
    console.error("Error toggling class:", error);
  }
};
