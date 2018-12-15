import "tachyons/css/tachyons.min.css";
import { search } from "./util";

export function renderResult(result) {
  const resultSection = document.getElementById("result");

  // clear prev result
  resultSection.innerHTML = "";

  if (result && result.length > 0) {
    // at least 1 matched
    result.forEach(r => {
      let wrapper = document.createElement("div"),
        img = document.createElement("img"),
        name = document.createElement("h3");

      img.src = r.img;
      img.alt = r.name;
      img.className = "db mw4 mr3";

      name.textContent = `${r.name} (${r.type})`;
      name.className = "mv1 ttu green";

      wrapper.className = "w-100 mb2 flex items-center";
      wrapper.appendChild(img);
      wrapper.appendChild(name);

      resultSection.appendChild(wrapper);
    });
  }
}

export function handleKeywordChange(event) {
  console.log(event.target.value);

  const result = search(event.target.value);
  renderResult(result);
}

document
  .getElementById("txtSearch")
  .addEventListener("input", handleKeywordChange);
