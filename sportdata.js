const fetchMyData = () => {
  fetch("https://www.thesportsdb.com/api/v1/json/1/all_sports.php")
    .then((response) => {
      return response.json();
    })
    .then((sportdata) => {
      document.getElementById("loading").style.display = "none";
      displayData(sportdata);
    })
    .catch((err) => {
      showError(err);
    });
};
if (document.title === "sportlist") {
  fetchMyData();
}

const showError = (err) => {
  document.getElementById("error").innerHTML = err;
};

const displayData = (sportdata) => {
  const ul = document.getElementById("list");
  sportdata.forEach((all_sports) => {
    const li = document.createElement("li");
    li.innerHTML = all_sports.title;
    ul.appendChild(li);
  });
};






// https://jsonplaceholder.typicode.com/posts