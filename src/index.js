
const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        const input = document.querySelector("input#searchByID");
        console.log(input.value);
        fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const title = document.querySelectpr("section#movieDetails h4")
        const summary = document.querySelectpr("section#movieDetails p")
        title.innerText = data.title;
        summary.innerText = data.summary;
    });
});
};

document.addEventListener('DOMContentLoaded', init);