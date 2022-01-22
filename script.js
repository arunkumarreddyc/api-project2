// Different elements and an url are associated to variables 
let button = document.getElementsByClassName("btn")[0];
let result = document.getElementsByClassName("result")[0];
const url = "https://animechan.vercel.app/api/random";
result.innerHTML ='click the above button to get the anime quote'

// on clicking the button we should get the response 
button.addEventListener("click",getdata)

// Below function is using fetching with async and await
async function getdata() {
result.innerHTML ='loading...'
    try{
        let response = await fetch(url);
        let object = await response.json();
        // console.log(object);
        result.innerHTML = `<div><h3>${object.quote}</h3> </div>
        <div class=sub-elements>
        <p>Anime : <span>${object.anime}</span></p>
        <p>Character : <span>${object.character}</span></p>
        <div>`

    }catch(error){
        console.log(error)
    }
}