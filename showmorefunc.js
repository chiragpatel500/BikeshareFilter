// const showmorefunc = (event) => {
//   let btnId = event.target.id; 
//     let numberIndex = btnId.split("-")[1];
    
//   let ptag = document.getElementById("ptagId-" + numberIndex);
//   if (ptag.style.display === "block") {
//     ptag.style.display = "none";
//     document.getElementById(btnId).innerHTML = " show More";
//   } else {
//     ptag.style.display = "block";
//     document.getElementById(btnId).innerHTML = " show less";
//   }
//   console.log(ptag);
//   console.log(event.target.id);
// };



// function showHide(event) {
//   let moreText = document.getElementById("moreText");
//   let buttonID = event.target.id;
//   if (!moreText.classList.contains("show")) {
//     moreText.classList.add("show");
//     document.getElementById(buttonID).innerHTML = "Show Less";
//   } else {
//     moreText.classList.remove("show");
//     document.getElementById(buttonID).innerHTML = "Show More";
//   }
// }

// let button = document.getElementById("showMoreButton");
// button.addEventListener("click", function (event) {
//   showHide(event);
// });