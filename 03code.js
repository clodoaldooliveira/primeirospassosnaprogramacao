var carta01 = { nome: "Bolsonaro", image: "https://c.tenor.com/Q1rQ3fkoXo0AAAAC/acabou-porra-acabou-porra-bolsonaro.gif", atributos: { corrupção: 7, politicaExterna: 2, politicaEconomica: 4, oratoria: 4 } };
var carta02 = { nome: "Dilma", image: "https://i.pinimg.com/originals/ad/ef/42/adef42c45954c903bd80269625d92b36.gif", atributos: { corrupção: 5, politicaExterna: 6, politicaEconomica: 3, oratoria: 1 } };
var carta03 = { nome: "Temer", image: "https://img.buzzfeed.com/buzzfeed-static/static/2016-05/11/8/enhanced/webdr06/anigif_enhanced-1012-1462971424-1.gif", atributos: { corrupção: 9, politicaExterna: 7, politicaEconomica: 6, oratoria: 10 } };
var carta04 = { nome: "Lula", image: "https://lula.com.br/wp-content/uploads/2021/09/acusacao-fundamentada.gif", atributos: { corrupção: 10, politicaExterna: 10, politicaEconomica: 9, oratoria: 9 } };

var baralho = [carta01, carta02, carta03, carta04];

var cartaMaquina;
var cartaHumano;


//Primeira função
function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 4)
    cartaMaquina = baralho[numeroCartaMaquina]
        // console.log(cartaMaquina)

    var numeroCartaHumano = parseInt(Math.random() * 4)

    while (numeroCartaMaquina == numeroCartaHumano) { var numeroCartaHumano = parseInt(Math.random() * 4) }

    cartaHumano = baralho[numeroCartaHumano]

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    showCartaHumano();


}


//Terceira função
function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributos");

    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked == true) {
            return radioAtributo[i].value
        }
    }

}

//Quarta Função
function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var elementoResultao = document.getElementById("resultado")

    var valorCartaHumano = cartaHumano.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]



    if (valorCartaHumano > valorCartaMaquina) {
        elementoResultao.innerHTML = "<p class='resultado-final'>Voce acertou!</p>"
    } else if (valorCartaHumano < valorCartaMaquina) {
        elementoResultao.innerHTML = "<p class='resultado-final'>Errrouuuu!!</p>"
    } else {
        elementoResultao.innerHTML = "<p class='resultado-final'>Empatooouuu!!!!</p>"
    }
    document.getElementById("btnJogar").disabled = true

    showCartaCartaMaquina()
}


//Quinta Função: 
function showCartaHumano() {
    var divCartaHumano = document.getElementById("carta-jogador")

    //Essas crases "``" funciona no css e usamos ela aqui para como "template-string" escrever dentro do css atraves do .js
    //o sifrão $ indica que o codigo q vem após isso é um javascript por isso o {}
    //Esse codigo novo é a mesma coisa se escrevessemos: 
    //    divCartaJogador.style.backgroundImage="url(" + cartaHumano.image +")"
    divCartaHumano.style.backgroundImage = `url(${cartaHumano.image})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = "";

    for (var atributos in cartaHumano.atributos) {
        opcoesTexto += "<input type='radio' name='atributos' value='" + atributos + "'>" + atributos + " | " + cartaHumano.atributos[atributos] + "<br>";
    }

    var nomeNaCarta = `<p class="carta-subtitle">${cartaHumano.nome}</p>`
    divCartaHumano.innerHTML = moldura + nomeNaCarta + tagHTML + opcoesTexto + "</div>"

}

//Sexta Função - exibir a carta da maquina na tela
function showCartaCartaMaquina() {

    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.image})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = "";

    for (var atributos in cartaMaquina.atributos) {
        opcoesTexto += "<input type='radio' name='atributos' value='" + atributos + "'>" + atributos + " | " + cartaMaquina.atributos[atributos] + "<br>";
    }

    var nomeNaCarta = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nomeNaCarta + tagHTML + opcoesTexto + "</div>"
}