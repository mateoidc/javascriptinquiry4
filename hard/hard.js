function changeBackgroundColor(color) {
  // Grabbing the body element
  const body = document.querySelector("#body");
  //  Removing all class names from body
  body.className = "";
  //   Adding new class color to body
  body.classList.add(`bg-${color}`);
}
