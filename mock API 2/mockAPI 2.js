const button = document.querySelector(".apiBtn");

const output = document.querySelector("#output");

button.addEventListener("click", () => {
    fetch("https://quick-access-api.desaihetav.repl.co/")
    .then(response => response.json())

    .then(data => output.innerText = data.message
    )
})