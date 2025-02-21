// VARIÁVEIS
const html = document.querySelector("html");

//BOTÕES

const focoButton = document.querySelector(".app__card-button--foco");
const curtoButton = document.querySelector(".app__card-button--curto");
const longoButton = document.querySelector(".app__card-button--longo");

//IMAGEM DE FUNDO
const imgBanner = document.querySelector(".app__image");


//TITULO PRINCIPAL
const appTitulo = document.querySelector(".app__title");

//MUSICA PRINCIPAL
const musicaInput = document.querySelector("#alternar-musica");

const musica = new Audio("./sons/luna-rise-part-one.mp3");
musica.loop = true;

// SONS DE PAUSAR E DAR PLAY
const somPause = new Audio("./sons/pause.mp3");
const somPlay = new Audio("./sons/play.wav");
const somTempoFinalizado = new Audio("./sons/beep.mp3");

//EVENTO DE COMEÇAR A MUSICA DE FUNDO PRINCIPAL
musicaInput.addEventListener("change", ()=>{
    if(musica.paused){
        musica.play();
    } else {
        musica.pause();
    }
});

//TEMPORIZADOR

let tempoDecorridoSegundos = 5;
let intervaloId = null;

//BOTÃO DO TIMER :  COMEÇAR/PAUSAR
const startPauseBt = document.querySelector("#start-pause");

const imagemStartPauseBt = startPauseBt.querySelector("img");
const spanStartPauseBt = startPauseBt.querySelector("span");

// //ELEMENTO QUE MOSTRA O TEMPO
const tempoNaTela = document.querySelector("#timer");


///////////////////////////////////

// FUNÇOES E EVENTOS

//EVENTO DOS BOTOES- FOCO/DL/DC/

focoButton.addEventListener("click", () => {
    alterarContexto("foco");

});

curtoButton.addEventListener("click", () => {
    alterarContexto("descanso-curto");
});

longoButton.addEventListener("click", () => {
    alterarContexto("descanso-longo");
});

// FUNÇÃO ALTERAR CONTEXTO -  ESTILO DO BANNER E ESTILO DO BOTÃO SELECIONADO

function alterarContexto(contexto){

    // ALTERANDO O DATA-ATRIBUTE DO HTML
    html.setAttribute("data-contexto", contexto);

    // ALTERANDO A IMAGEM DE FUNDO
    imgBanner.setAttribute("src", `./imagens/${contexto}.png`);
    
    // ALTERANDO O TITULO PRINCIPAL DA PAGINA e O BOTÃO ATIVADO
    switch (contexto) {
        case "foco":
            // ALTERANDO TEXTO
            appTitulo.innerHTML =  `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
           
           //ALTERANDO O ESTILO DO BOTÃO ATIVADO
            focoButton.classList.add("active");
            longoButton.classList.remove("active");
            curtoButton.classList.remove("active");
            //ADICIONANDO O TIMER NA TELA
            break;
        
        case "descanso-curto":
             // ALTERANDO TEXTO
             appTitulo.innerHTML =  `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
             //ALTERANDO O ESTILO DO BOTÃO ATIVADO
            focoButton.classList.remove("active");
            longoButton.classList.remove("active");
            curtoButton.classList.add("active");
            //ADICIONANDO O TIMER NA TELA
            break;

        default:
             // ALTERANDO TEXTO
            appTitulo.innerHTML =  `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            
            //ALTERANDO O ESTILO DO BOTÃO ATIVADO
            focoButton.classList.remove("active");
            longoButton.classList.add("active");
            curtoButton.classList.remove("active");
            //ADICIONANDO O TIMER NA TELA
            break;
    }
}

//TIMER
const contagemRegressiva = () => {
    if(tempoDecorridoSegundos <=0){
        somTempoFinalizado.play();
        alert("TEMPO FINALIZADO");
        pausar();
        return
    } else {
    tempoDecorridoSegundos -=1;
    console.log(tempoDecorridoSegundos);
}
}

startPauseBt.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar(){
    
   if(intervaloId){
        somPause.play();
        spanStartPauseBt.textContent = 'Começa';
        imagemStartPauseBt.src = './imagens/play_arrow.png';
        pausar();
        return
   }
    somPlay.play();
    intervaloId =setInterval(contagemRegressiva,1000);
    spanStartPauseBt.textContent = 'Pausar';
    imagemStartPauseBt.src = './imagens/pause.png';
}

function pausar(){
    
    clearInterval(intervaloId);
    intervaloId = null;
}






