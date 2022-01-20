const btn = document.querySelector("#send")
let TextoEscrito
let Resultado
let textoCriptografado
let cifrador = document.getElementById('.box2')
cifrador.innerText = "texto"

title.textContent = "teste"
 btn.addEventListener("click", function(e){
    e.preventDefault()
    const name = document.querySelector("#name")
    TextoEscrito = name.value
    Resultado = criptografar(TextoEscrito)
    console.log(Resultado)
   
    return Resultado
})
const validarCriptografia = (texto) => {
    return /^[a-z\s]*$/.test(texto)
  };

const criptografar = (str) => {
    if (validarCriptografia(str)) {
      return  str
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat")
    }
    return false;
  };

