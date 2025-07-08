const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/title_photo.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Wellcome to a small journey throw my exprience, ${myName}`;
  }
}

myButton.addEventListener("click", () => {
  setUserName();
});