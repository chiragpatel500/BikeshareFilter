const fetchMyData = () => {
  fetch("https://www.thesportsdb.com/api/v1/json/1/all_sports.php?apiKey=1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("loading").style.display = "none";
      displayData(data);
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

const displayData = (data) => {
  const ul = document.getElementById("list");
  data.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = post.title;
    ul.appendChild(li);
  });
};