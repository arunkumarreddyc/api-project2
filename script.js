let button = document.getElementsByClassName("btn");
let result = document.getElementsByClassName("result");
const url = "https://animechan.vercel.app/api/random";

// on clicking the button we should get the response through the following logic
button.addEventListener("click",getdata())


async function getdata() {
result.innerHTML ='loading...'
    try{
        let response = await fetch(url);
        let object = await response.json();
        console.log(object);
        result.innerHTML = `<h1>${object[0]}</h1>`

    }catch(error){
        console.log(error)
    }
}

