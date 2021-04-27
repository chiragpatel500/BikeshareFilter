function dispUserInfo() {
    let params = new URL(document.location).searchParams;
    let firstname = params.get('firstname');   
    let lastname = params.get('lastname');
    let country = params.get('country');
    console.log(firstname);
    console.log(lastname);
    console.log(country);
    document.querySelector('#fst').innerHTML = firstname;
    document.querySelector('#lst').innerHTML = lastname;
    document.querySelector('#ctr').innerHTML = country;
}

//  DEFINING THE PAGE TITLE
let pageTitle = "thankyou";
console.log(document.title);
//  DECIDING WHEN TO RUN displayUserInfo() BASED ON THE TITLE OF THE PAGE
if (document.title === pageTitle) {
  dispUserInfo();
};