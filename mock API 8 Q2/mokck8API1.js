const stockName = document.querySelector('#stockName');
const costPrice = document.querySelector('#costPrice');
const pnlBtn = document.querySelector('#pnlBtn');
const output = document.querySelector('#output');

pnlBtn.addEventListener('click', calculatePnl);

function calculatePnl(){

    let url =('https://stock-api.desaihetav.repl.co/current-price/')
    let serverUrl = url + stockName.value.toUpperCase();
    let currentPrice = 0

    fetch(serverUrl)
    .then(res => res.json())
    .then(result => {
         currentPrice = result.current_price
         console.log(currentPrice)


        // return currentPrice

        if(currentPrice > Number(costPrice.value)){
            console.log(currentPrice)
            output.innerText = "You made profit";
            output.style.color = "green";
        } else {
            output.innerText = "You made loss";
            output.style.color = "red";
        }
        }) 


        

  
}

//current_price