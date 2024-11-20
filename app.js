function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    console.log(container); // Verifica se o container é encontrado

    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        console.log('Cartão clicado!'); // Debug
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
        console.log('Classe active:', cartao.classList.contains('active')); // Debug
    }

    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}

