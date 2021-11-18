const yjhd = document.querySelector("#yjhd");
const znmd = document.querySelector("#znmd");
const output = document.querySelector(".output");

const yjhdBtnValue = yjhd.innerText;
const znmdBtnValue = znmd.innerText;


serverURL = ("https://mock-practice.prakhar10v.repl.co/bollywood?name=");

yjhdServer = serverURL + yjhdBtnValue;
znmdServer = serverURL + znmdBtnValue;
//we can write yjhd on owrn own or define it by inner text of button

function apiCall (){
    fetch(yjhdServer)
    .then(res => res.json())
    .then(data => {
        output.innerText = data.message
    })
}

function apiCallOne (){
    fetch(znmdServer)
    .then(res => res.json())
    .then(data => {
        output.innerText = data.message
    })
}

yjhd.addEventListener("click", apiCall)
znmd.addEventListener("click", apiCallOne)

//---- 
//doing the abov eunder one function

// function singleApiCall (film){
//     fetch(serverURL + film)
//     .then(res => res.json())
//     .then(data => {
//         output.innerText = data.message
//     })
// }

// yjhd.addEventListener("click", () => {singleApiCall(yjhdBtnValue)})

// znmd.addEventListener("click", () => {singleApiCall(znmdBtnValue)})