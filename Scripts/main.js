const imagens = [
    {'url': './Images/banner1.png',
    'titulo': 'Evento on-line da CIJ aborda maternidade e paternidade biológicas e adotivas'},
    {'url': './Images/banner2.png',
    'titulo': 'Inscrições abertas para o 19º Prêmio Innovare'},
    {'url': './Images/banner3.jpg',
    'titulo': 'Mulher que teve nome incluído em lista de suspeitos de irregularidades...'},
    {'url': './Images/banner4.jpg',
    'titulo': 'Projetos do TJSP promovem conciliação na iniciativa privada e no Poder Público'},
];

let countBannerNoticias = 0;

function carregamentoInicial () {
    criarCardsNoticias();
    selecionarImagem(0);
    bannerNoticiasLoop(); 
}

function criarCardsNoticias () {
   for (let index = 0; index < imagens.length; index++) {

       const divCard = document.createElement("div");
       divCard.id = `card-banner${index.toString()}`;
       divCard.classList.add('card', 'card-noticia');

       divCard.addEventListener('click', function() {
        selecionarImagem(index);
      });

       if (index == 0){
        divCard.classList.add('active');
       }

       const textoCard = document.createElement('p');
       textoCard.innerHTML = imagens[index].titulo;

       divCard.appendChild(textoCard);      

       const divNoticias = document.getElementById('cards-noticias');
       divNoticias.appendChild(divCard);
   }
}

function bannerNoticiasLoop () { 
    setInterval(() => {  
         selecionarImagem(countBannerNoticias+1);        
    }, 5000);    
}

function validarLimiteCarrossel () {
    if (countBannerNoticias == imagens.length){
        countBannerNoticias = 0;
    }
    else if (countBannerNoticias < 0) {
        countBannerNoticias = imagens.length;
    }
}

function definirCardAtivo () {
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
    definirCardAtivo();    
    definirImagemSrc(imagens[countBannerNoticias].url);
    definirCaptionImagem(imagens[countBannerNoticias].titulo);
}

function definirImagemSrc(caminhoImagem){
    const bannerImagem = document.getElementById('banner-noticia');   
    bannerImagem.src = caminhoImagem;  
}

function definirCaptionImagem(titulo){
    const captionTexto = document.getElementById('caption-noticia-texto');   
    captionTexto.innerHTML = titulo; 
}