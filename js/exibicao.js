const divpai = document.getElementById('livros');

function exibirLivros (lista) {
    lista.forEach(element => {
        divpai.innerHTML += 
        `<div class="livro">
        <img class="livro__imagens" src=${element.imagem} alt=${element.alt} />
        <h2 class="livro__titulo">
          ${element.titulo}
        </h2>
        <p class="livro__descricao">${element.autor}</p>
        <p class="livro__preco" id="preco">R$${element.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${element.categoria}</span>
        </div>
      </div>`
    });
}
