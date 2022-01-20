const btn = document.querySelector("#send")
let TextoEscrito
let Resultado
let textoCriptografado
var $name = document.querySelector("#name")
var $box2 = document.querySelector("#key")

 btn.addEventListener("click", function(e){
    e.preventDefault()
    TextoEscrito = $name.value
    Resultado = criptografar(TextoEscrito)
    $box2 = Resultado
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

  const Uncriptografar = (str) => {
    if (validarCriptografia(str)) {
      return  str
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u")
    }
    return false;
  };
