const input = document.querySelector("#clipInput");
const textarea = document.querySelector(".comment-textarea")
const form = document.querySelector("#form")
const inputContainer = document.querySelector(".form-container");
const message = document.querySelector("#message");
const changeIdForm = document.querySelector("#changeId");

const configContainer =  document.querySelector("#config-container");
const configButton = document.querySelector("#settings")
const inputId = document.querySelector("#channelID");

const updateView = document.querySelector("#update-view");


if(!(localStorage.getItem("updateView"))) {
    updateView.style.display = "flex"
    localStorage.setItem("updateView", true)
}


updateView.addEventListener("click", (event) => {
    if (event.target === updateView) {
        updateView.style.display = "none"
    }
  });



if(!(localStorage.getItem("channelId"))) localStorage.setItem("channelId", "957455373609074751")


textarea.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && !e.shiftKey){
        textarea.blur()
        submit();

    }
})



configButton.addEventListener("click", () => {
    configContainer.classList.add("openconfig");
    configContainer.classList.remove("closeconfig")
    
})

configContainer.addEventListener("click", (event) => {
    if (event.target === configContainer) {
        
        configContainer.classList.add("closeconfig");
        configContainer.classList.remove("openconfig")


        
    }
  });
input.addEventListener("focus", () => {
    inputContainer.classList.add("form-container-focus")
    inputContainer.classList.remove("form-container")
})


textarea.addEventListener("focus", () => {
    textarea.classList.add("comment-textarea-focus");
    textarea.classList.remove("comment-textarea");
})

textarea.addEventListener("blur", () => {
    textarea.classList.remove("comment-textarea-focus")
    textarea.classList.add("comment-textarea");
})


input.addEventListener("blur", () => {
    inputContainer.classList.remove("form-container-focus")
    inputContainer.classList.add("form-container")


})


inputId.value = localStorage.getItem("channelId");

changeIdForm.addEventListener("submit", (e) => {

    if(inputId.value) {
        localStorage.setItem("channelId", inputId.value);
        e.preventDefault()
        configContainer.classList.add("closeconfig");
        configContainer.classList.remove("openconfig")

    }
    
})

function submit(event){
    if (input.value == "") {
        alert("Campo vazio!")
    } else {
        const url = 'https://addclip.onrender.com/addClip';

        const clip = {
            link: input.value,
            channelId: inputId.value,
            description: textarea.value
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
        input.value = '';
        textarea.value = '';
        // textarea.setAttribute("placeholder", "Adicione um comentário (Opcional)")
        startAnimation();

    }

    event.preventDefault();

}
form.addEventListener("submit", async (event) => {
    submit(event); 

})
function startAnimation() {
    message.style.display = "flex";
    setTimeout(() => {
        message.style.display = "none"
    }, 985)
}


