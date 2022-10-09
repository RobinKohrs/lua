let input = document.querySelector("input");

input.addEventListener("keypress", (e) => runSubmitDebouce(e, 400));

function runSubmitDebouce(e, ms) {
  if (e.key === "Enter") {
    let query = input.value;
    let queryURL = `https://www.google.com/search?q=${query}`;
    console.log(`q: `, queryURL);
    window.location.href = queryURL;
  }
}
