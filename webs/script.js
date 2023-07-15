const form = document.querySelector("#info")
const submit = document.querySelector("#sub")
const rel  = document.querySelector("#rel")
rel.addEventListener('click',(x)=>
{
  
})
submit.addEventListener('click',e =>
{
  e.preventDefault()
  const username = document.getElementById("filename").value
  const age = document.getElementById("age").value
  fetch("http://localhost:5000/test", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ username,age })
})
  .then(response => response.json())
  .then(data => {
    console.log("Response from server:", data);
    // Handle the server response here
  })
  .catch(error => {
    console.error("Error:", error);
    // Handle any errors that occurred during the request
  });
window.location.reload();
})