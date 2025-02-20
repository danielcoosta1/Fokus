const html = document.querySelector("html");


const focoButton = document.querySelector(".app__card-button--foco");
const curtoButton = document.querySelector(".app__card-button--curto");
const longoButton = document.querySelector(".app__card-button--longo");

const imgBanner = document.querySelector(".app__image");

const appTitulo = document.querySelector(".app__title");


focoButton.addEventListener("click", () => {
    alterarContexto("foco");

    
});

curtoButton.addEventListener("click", () => {
    alterarContexto("descanso-curto");
   
});

longoButton.addEventListener("click", () => {
    alterarContexto("descanso-longo");
  
});

function alterarContexto(contexto){

    // ALTERANDO O DATA-ATRIBUTE DO HTML
    html.setAttribute("data-contexto", contexto);

    // ALTERANDO A IMAGEM DE FUNDO
    imgBanner.setAttribute("src", `./imagens/${contexto}.png`);
    
    
    // ALTERANDO O TITULO PRINCIPAL DA PAGINA e O BOTÃO ATIVADO
    switch (contexto) {
        case "foco":
            appTitulo.innerHTML =  `Otimize sua produtividade,<br>
            
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            focoButton.classList.add("active");
            longoButton.classList.remove("active");
            curtoButton.classList.remove("active");
            break;
        
        case "descanso-curto":
             appTitulo.innerHTML =  `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            focoButton.classList.remove("active");
            longoButton.classList.remove("active");
            curtoButton.classList.add("active");
            break;

        default:
            appTitulo.innerHTML =  `Hora de voltar à superfície.<br>
            
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            focoButton.classList.remove("active");
            longoButton.classList.add("active");
            curtoButton.classList.remove("active");
            
            break;
    }
 
    // ALTERANDO O BOTÃO PARA ATIVADO


}
