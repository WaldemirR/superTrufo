var carta1 = {
    nome: "Bulbasauro",
    atributos: {
        ataque: 10,
        defesa: 12,
        magia: 08,
        contraAtaque: 07
    }
};
var carta2 = {
    nome: "Pikachu",
    atributos: {
        ataque: 08,
        defesa: 09,
        magia: 5,
        contraAtaque: 10
    }
};

var carta3 = {
    nome: "Shiriu de dragão",
    atributos: {
        ataque: 09,
        defesa: 5,
        magia: 06,
        contraAtaque: 04
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaMaquina = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    
    exibirOpcoes()
}

function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos){
    opcoesTexto +=
    opcoesTexto = "<input type='radio'  name = 'atributo' value=''" + atributo + "'>" + atributo

    
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].Checked =true) {
            return radioAtributos[i].value
        }
    }
}

function jogar(){
        var atributoSelecionado = obtemAtributoSelecionado();
        var elementoResultado = document.getElementById("resultado");
        var valorCataJogador = cartaJogador.atributos[atributoSelecionado]
        var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

        if(valorCataJogador >  valorCartaMaquina){
            elementoResultado.innerHTML = "Você foi demais, venceu essa rodada"
        }else if (valorCartaMaquina > valorCataJogador){
            elementoResultado.innerHTML = "Você perdeu, a carta da maquina é maior"
        }else{
            elementoResultado.innerHTML = "Empate"
        }
        console.log (cartaMaquina)
    
}