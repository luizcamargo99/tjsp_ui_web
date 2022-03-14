const imagens = [
    './Images/banner1.png',
    './Images/banner2.png',
    './Images/banner3.jpg',
    './Images/banner4.jpg'
];

let countBannerNoticias = 0;

function carregamentoInicial () {
    bannerNoticiasLoop();
}

function bannerNoticiasLoop () {
    definirImagemSrc(imagens[0]);
    setInterval(() => {  
        selecionarImagem(countBannerNoticias+1);
    }, 5000);    
}

function validarLimiteCarrossel () {
    if (countBannerNoticias == imagens.length){
        countBannerNoticias = 0;
    }
}

function definirImagemAtiva () {
    const cardAtivo = document.getElementById('card-banner' + countBannerNoticias.toString());
    cardAtivo.classList.add('active');
}

function removerCardsAtivos () {
    const cards = document.getElementsByClassName('card-noticia');
    for (let index = 0; index < cards.length; index++) {
        const card = cards[index];
        card.classList.remove('active');
        
    }
}

function selecionarImagem (numeroImagem){
    countBannerNoticias = numeroImagem;
    validarLimiteCarrossel();
    removerCardsAtivos();
    definirImagemAtiva();
    definirImagemSrc(imagens[countBannerNoticias]);
}

function definirImagemSrc(caminhoImagem){
    const bannerImagem = document.getElementById('banner-noticia');   
    bannerImagem.src = caminhoImagem;  
}

function voltarImagem (){
    selecionarImagem(countBannerNoticias-1);
}

function avancarImagem (){
    selecionarImagem(countBannerNoticias+1);
}