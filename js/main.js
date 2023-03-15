let livros = [];
const urlapi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivros()

const divpai = document.getElementById('livros');

async function getBuscarLivros() {
    const res = await fetch(urlapi);
    const resconvert = await res.json();
    console.log(resconvert);
    exibirLivros (resconvert);



}

function exibirLivros (lista) {
    lista.forEach(element => {
        divpai.innerHTML += 
        `<div class="livro">
        <img class="livro__imagens" src=${element.imagem} alt=${element.alt} />
        <h2 class="livro__titulo">
          ${element.titulo}
        </h2>
        <p class="livro__descricao">${element.autor}</p>
        <p class="livro__preco" id="preco">R$${element.preco}</p>
        <div class="tags">
          <span class="tag">${element.categoria}</span>
        </div>
      </div>`
    });
}
