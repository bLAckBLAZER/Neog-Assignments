const drawerElements = document.querySelectorAll(".drawer-element");
const body = document.querySelector("body");

const handleSelect = (e) => {
  console.log(e.target.children);
  let icon = e.target.children[0];
  let text = e.target.children[1];
  console.log(text);
  icon.style.color = "#6200F1";
  text.style.color = "#6200F1";
};

drawerElements.forEach((drawerElement) =>
  drawerElement.addEventListener("click", handleSelect)
);

body.addEventListener("click", handleSelect);
