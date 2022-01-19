

function codificar(caracter){
    if (validarCaracter(caracter)){
        return caracter
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    }
    return false
}

function decodificar(caracterCodificado){
    if (validarCaracter(caracterCodificado)){
        return caracterCodificado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    }

    return false
}


}