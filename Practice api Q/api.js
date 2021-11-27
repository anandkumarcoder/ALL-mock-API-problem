const inputInr = document.querySelector('#inputInr');
const convertBtn = document.querySelector('#convertBtn');
const output = document.querySelector("#output");

const url = ('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');

convertBtn.addEventListener('click', apiCall)

function apiCall(){
    let usdValue = 0;
    
    fetch( url )
    .then(res => res.json())
    .then(data => {
        
        usdValue = data.usd.inr
        inrVlaue = Number(inputInr.value) * usdValue
        output.innerText += `value of 1USD dollar to INR is ${inrVlaue}`
       

 
    })

}


