var listaCriptografica = ["enter", "imes", "ai", "ober", "ufat"];
var listaNormal = ["e", "i", "a", "o", "u"];

const cifrasParaCriptografar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

const cifrasParaDescriptografar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
}

function criptografaTexto(texto) {
    let textoConvertido = texto;

    listaNormal.forEach(function (letra) {
        const regex = new RegExp(letra, 'g');
        textoConvertido = textoConvertido.replace(regex, cifrasParaCriptografar[letra]);
    });

    return textoConvertido;
}

function descriptografaTexto(texto) {
    let textoParaConverter = texto;

    listaCriptografica.forEach(function (letra) {
        const regex = new RegExp(letra, 'g');
        textoParaConverter = textoParaConverter.replace(regex, cifrasParaDescriptografar[letra])
    });

    return textoParaConverter;
}