//1 - crie uma função que exiba uma mensagem no console
function MostrarMensagem () {
    console.log("Mostrando mensagem na tela através da função!");
}
MostrarMensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function MeuNome(nome) {
    console.log("Meu nome é " + nome);
}
MeuNome("Joao Pedro")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function Caracteristicas(nome, idade, estiloMusical) {
    console.log("Meu nome é " + nome, ", tenho " + idade + " anos", "e meu estilo musical prefeiro é " + estiloMusical)
}
Caracteristicas("Joao Pedro", 21, "pagode")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function filmeAndMusica (filme, musica) {
    console.log("Meu filme preferido é " + filme, "e gosto da música " + musica)
}
filmeAndMusica("Interestellar", "Só depois - Grupo Revelação")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(numero) {
    numero = Math.pow(numero,3)
    return numero;
}
triplo(5)

//6 - crie uma função que verifique se uma variável é true ou false
function TrueOrFalse (variavel) {
    if (variavel === true) {
        console.log("A variável é verdadeira.");
    } else if (variavel === false) {
        console.log("A variável é falsa.");
    } else {
        console.log("A variável não é nem verdadeira nem falsa.")
    }
}

TrueOrFalse(true)