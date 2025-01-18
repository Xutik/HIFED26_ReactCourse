// Base URL
const apiUrl = "https://api.example.com/data";

// Function to make a GET request using
// TODO: 1. find the error and fix it, 2. finish the function
function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) =>{
      console.log(e)
    });    
}

fetchData(apiUrl);

// Function to make a POST request
// TODO: Implement the function
function postData(url, data) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) =>{
    console.log(e)
  }); 
}

const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);
