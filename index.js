function showHide(event) {
  let moreText = document.getElementById("moreText");
  let buttonID = event.target.id;
  if (!moreText.classList.contains("show")) {
    moreText.classList.add("show");
    document.getElementById(buttonID).innerHTML = "Show Less";
  } else {
    moreText.classList.remove("show");
    document.getElementById(buttonID).innerHTML = "Show More";
  }
}

let button = document.getElementById("showMoreButton");
button.addEventListener("click", function (event) {
  showHide(event);
});