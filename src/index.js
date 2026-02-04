function generatePoem(event) {
  event.preventDefault();
  newTypewriter("#poem", {
    strings: "Christian gentlemen a few",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
