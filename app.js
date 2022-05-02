const text = document.querySelector(".text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getAnotherJoke);


function getAnotherJoke() {
    const confirm = {
        headers: {
            Accept: "application/json",
        },
    };
    fetch("https://icanhazdadjoke.com", confirm)
        .then((response) => response.json())
        .then((data) => {
            text.innerHTML = data.joke;
        });
}
getAnotherJoke();
