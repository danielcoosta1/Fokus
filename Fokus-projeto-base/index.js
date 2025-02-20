const html = document.querySelector("html");


const focoButton = document.querySelector(".app__card-button--foco");
const curtoButton = document.querySelector(".app__card-button--curto");
const longoButton = document.querySelector(".app__card-button--longo");

const imgBanner = document.querySelector(".app__image");

focoButton.addEventListener("click", () => {
    html.setAttribute("data-contexto", "foco");
    imgBanner.src = "./imagens/foco.png";
    
    
});

curtoButton.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto");
    imgBanner.src = "./imagens/descanso-curto.png";
    
});

longoButton.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-longo");
    imgBanner.src = "./imagens/descanso-longo.png";
});


