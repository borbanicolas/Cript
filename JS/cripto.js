const btn = document.querySelector("#send")
let TextoEscrito

btn.addEventListener("click", function(e){
    e.preventDefault()
    const name = document.querySelector("#name")
    TextoEscrito = name.value 
    return TextoEscrito
})
