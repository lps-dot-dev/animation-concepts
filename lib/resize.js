/**
 * Resize the given HTML element to the size of the element's parent using a 16:9 aspect ratio
 * @param {HTMLElement} htmlElement
 */
const resizeElement = (htmlElement) => {
  const parent = htmlElement.parentElement;

  // Desired aspect ratio (e.g., 16:9)
  const aspectRatio = 16 / 9;

  // Calculate the maximum canvas size that maintains the aspect ratio
  let newWidth = parent.clientWidth;
  let newHeight = parent.clientWidth / aspectRatio;

  // If the calculated height is larger than the parent height, adjust the dimensions
  if (newHeight > parent.clientHeight) {
    newHeight = parent.clientHeight;
    newWidth = parent.clientHeight * aspectRatio;
  }

  // Set the canvas size
  htmlElement.width = newWidth;
  htmlElement.height = newHeight;

  // Optionally, adjust the CSS size to match
  htmlElement.style.width = `${newWidth}px`;
  htmlElement.style.height = `${newHeight}px`;
}

export { resizeElement };
