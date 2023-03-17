let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPreco.addEventListener('click', ordernarLivrosPreco)

function ordernarLivrosPreco (){

    let livrosdescontados = aplicarDesconto(resconvert)
    let livrosOrdenados = livrosdescontados.sort((a,b) => a.preco - b.preco);
    exibirLivros(livrosOrdenados);
}