const stockName = document.querySelector('#stockName');
const costPrice = document.querySelector('#costPrice');
const pnlBtn = document.querySelector('#profitLossBtn');
const output = document.querySelector('#output');

// const url = ('https://stock-api.desaihetav.repl.co/current-price/');

const secondUrl = ('https://stock-api.desaihetav.repl.co/list')

pnlBtn.addEventListener("click" , apiCall)

function apiCall(){

    // let newUrl = url + stockName.value;
    fetch(secondUrl)
    .then (res => res.json())

    .then(result => 
        
        {
            result.data.map(stocks  => {
                output.innerHTML += `<li style="color:orange">id:${stocks.id} name:${stocks.name}</li>`
            })
        

    }
    )
    .catch(error){
        output.innerText = error
    }
}


