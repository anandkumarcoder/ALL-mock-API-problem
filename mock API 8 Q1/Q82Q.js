const callApiBtn = document.querySelector('#callApiBtn');
const output = document.querySelector('#output');

// const url = ('https://stock-api.desaihetav.repl.co/current-price/');

const secondUrl = ('https://stock-api.desaihetav.repl.co/list')

callApiBtn.addEventListener("click" , apiCall)

function apiCall(){

    fetch(secondUrl)
    .then (res => res.json())

    .then(result => 
        
        {
            result.data.map(stocks  => {
                output.innerHTML += `<div><li style="color:orange">
                id: <p style="color:black">${stocks.id}</p>
                name: <p style="color:black">${stocks.name}</p> 
                </li>
                </div>`
                
            })
        

    }
    )
    .catch((error) => {
        output.innerText = error
    })
}


