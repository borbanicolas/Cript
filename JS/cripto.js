const btn = document.querySelector("#send")
const btn2 = document.querySelector("#send2")
let TextoEscrito
let TextoEscrito2
let Resultado
let Resultado2
var $name = document.querySelector("#name")
var $box2 = document.querySelector("#name-2")

//criptografia
 btn.addEventListener("click", function(){
    
    TextoEscrito = $name.value
    Resultado = criptografar(TextoEscrito)
    $box2.value = Resultado
  })

//descriptografia
  btn2.addEventListener("click", function(){
    
    TextoEscrito2 = $box2.value
    Resultado2 = Uncriptografar(TextoEscrito2)
    $name.value = Resultado2
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
    return "caracteres normais e minusculos voce pode usarao use ascento";
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
    return "caracteres normais e minusculos voce pode usar";
  };
