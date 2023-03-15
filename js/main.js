let livros = [];
const urlapi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivros()


async function getBuscarLivros() {
    const res = await fetch(urlapi);
    const resconvert = await res.json();

    let livrosComDesconto = aplicarDesconto(resconvert);

    exibirLivros (livrosComDesconto);



}

