const output = document.querySelector("#output");
const url = ("https://jsonplaceholder.typicode.com/todos");

function apiData(){
    fetch (url) 
    .then(response => {
         return response.json()})

        .then(data => {
            console.log(data)
            console.log(data[0].title)
        }
            )

        // data.map((data) => {
        //     console.log(data.title)
        // })
        // )

    // .then((data)=> {
    //     console.log(data);

    //     data.map((data) => {
    //         if(!data.completed){
    //             output.innerHTML += `<p class="false">title : ${data.title}</p>`
    //         } else {
    //             output.innerHTML += `<p>title : ${data.title}</p>`
    //         }

            
    //         output.innerHTML += 
    //         `<p>completed : ${data.completed}</p>`

           

    //     })})
}

apiData();