const inputUser = document.querySelector(".inputUser");
const apiBtn = document.querySelector("#apiBtn");
const otpInputputUser = document.querySelector(".otpInput");
const checkBtn = document.querySelector("#checkBtn");
const output = document.querySelector("#output");

let url = ("https://otpgenerator.ishanjirety.repl.co/get-otp?name=");

//https://otpgenerator.ishanjirety.repl.co/get-otp?name=



let otp = ""

function callApi (){
    const serverURL =  url + inputUser.value;
   
  
    fetch(serverURL)
    .then(res => res.json())
    .then(data => {
        output.innerText = data.otp
        
        return otp =data.otp
       
        
        
    })
}



function otpCheck(){
   i
    if(otp === otpInputputUser.value){
        output.innerText ="Successful"
        output.style.color = "green"
    } else {
        output.innerText ="failed"
        output.style.color = "red"
    }
}


apiBtn.addEventListener("click", callApi)
checkBtn.addEventListener("click", otpCheck)
