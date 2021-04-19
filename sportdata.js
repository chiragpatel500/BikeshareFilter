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
  // step 0: make an api call using fetch.
    // make a call to get promise response using the fetch keyword.
  // fetch("https://cab-cors-anywhere.herokuapp.com/https://www.thesportsdb.com/api/v1/json/1/all_sports.php")
   // step 1: displaying respnse coming from the api  
   // using .then to catch the promise response coming from api and wraping it in to a function.  
    .then((response) => {
      // returning the response into json file to make it readable for the browser.
      return response.json();
    })
    //  step 2: display this step until step 1 is fully completed.
    // extracting the data and displaying loading until the data is displayed on the page.
    .then((data) => {
      document.getElementById("loading").style.display = "none";
      // calling the displayData to perform inside the block.
      displayData(data);
    })
    // step 3: display error message if any prbloem in step 1 for extracting the data from api.
    // cathing any error coming from the data or url.
    .catch((err) => {
      // calling the showerror to run insde the block.
      showError(err);
    });
};

// run the function only the html page which has doc title as sportlist.
if (document.title === "sportlist") {
  fetchMyData();
}

// displaying the error message (step 3) on the html page. 
const showError = (err) => {
  document.getElementById("error").innerHTML = err;
};

// displaying data on the html page. 
const displayData = (data) => {
  // selecting the elemnet from html page
  const ul = document.getElementById("list");
  // looping through the sports array.
  data.forEach((all_sports) => {
    const li = document.createElement("li");
    li.innerHTML = all_sports.sports;
    ul.appendChild(li);
  });
}; 






// https://jsonplaceholder.typicode.com/posts


// q1. not displaying data even with get apikey.
// q2. discuss checkbox  selction and what should the outcomes of filtering.