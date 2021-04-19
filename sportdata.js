const fetchMyData = () => {
  // Trying using authentication
  const url = "https://www.thesportsdb.com/api/v1/json/1/all_sports.php";
  fetch(url, {
  method: "GET",
  headers: {
    "X-Auth-Token": "1",
    "Content-Type": "application/json"
  }
  })
    // Trying without authentication
  // fetch("https://cab-cors-anywhere.herokuapp.com/https://www.thesportsdb.com/api/v1/json/1/all_sports.php")
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
    li.innerHTML = post.all_sports;
    ul.appendChild(li);
  });
};






// https://jsonplaceholder.typicode.com/posts


// q1. not displaying data even with get apikey.
// q2. discuss checkbox  selction and what should the outcomes of filtering.