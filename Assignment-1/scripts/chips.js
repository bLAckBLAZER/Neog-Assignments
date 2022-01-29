const input = document.querySelector(".chips-input");
const chipsWrapper = document.querySelector(".chips-wrapper");

const handleUpdate = (newChip) => {
  const div = document.createElement("div");
  div.setAttribute("class", "chips-basic");
  const p = document.createElement("p");
  p.innerHTML = newChip;

  const dragIcon = document.createElement("span");
  dragIcon.setAttribute("class", "chip-icon material-icons");
  dragIcon.innerHTML = " reorder ";

  const removeIcon = document.createElement("span");
  removeIcon.setAttribute("class", "chip-icon material-icons");
  removeIcon.innerHTML = " clear ";

  div.appendChild(dragIcon);
  div.appendChild(p);
  div.appendChild(removeIcon);
  chipsWrapper.insertBefore(div, input);
};

const handleInput = (e) => {
  if (e.keyCode === 13) {
    let newChip = e.target.value;
    if (newChip.length > 0) {
      handleUpdate(newChip);
      e.target.value = "";
    }
  }
};

input.addEventListener("keyup", handleInput);
