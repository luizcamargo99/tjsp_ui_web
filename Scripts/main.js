const imagens = [
    './Images/banner1.png',
    './Images/banner2.png',
    './Images/banner3.jpg',
    './Images/banner4.jpg'
];
let countBannerNoticias = 0;

function carregamentoInicial () {
    bannerNoticias();
}

function bannerNoticias () {    
    definirImagemSrc('./Images/banner1.png');
    setInterval(() => {  
        countBannerNoticias++;        
        if (countBannerNoticias == imagens.length){
            countBannerNoticias = 0;
        }
        removerCardsAtivos();
        definirImagemAtiva();        
        definirImagemSrc(imagens[countBannerNoticias]);
    }, 5000);    
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
    removerCardsAtivos();
    definirImagemAtiva();
    definirImagemSrc(imagens[countBannerNoticias]);
}

function definirImagemSrc(caminhoImagem){
    const bannerImagem = document.getElementById('banner-noticia');   
    bannerImagem.src = caminhoImagem;  
}