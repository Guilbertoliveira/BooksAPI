let resconvert = [];
const urlapi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivros()


async function getBuscarLivros() {
    const res = await fetch(urlapi);
    resconvert = await res.json();

    const livrosComDesconto = aplicarDesconto(resconvert);


    exibirLivros (livrosComDesconto);

  

}

