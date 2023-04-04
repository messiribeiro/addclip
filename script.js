const input = document.querySelector("#clipInput");
const form = document.querySelector("#form")
const inputContainer = document.querySelector(".form-container");
const message = document.querySelector("#message");


input.addEventListener("focus", () => {
    inputContainer.classList.add("form-container-focus")
    inputContainer.classList.remove("form-container")



})

input.addEventListener("blur", () => {
    inputContainer.classList.remove("form-container-focus")
    inputContainer.classList.add("form-container")


})

form.addEventListener("submit", async (event) => {
    if(input.value == "") {
        alert("Bota alguma coisa ae garai")
    }else{
        const url = 'https://addclip.onrender.com/addClip';

        const clip = {
            link: input.value
        }
        console.log(JSON.stringify(clip))

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(clip)
          };
          
          fetch(url, options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        input.value='';
    }

    event.preventDefault();
    startAnimation();

    
})
 function startAnimation(){
    message.style.display = "flex";
    setTimeout(() => {
        message.style.display = "none"
    }, 985)
 }


