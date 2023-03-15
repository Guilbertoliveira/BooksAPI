function aplicarDesconto (livros) {
    const desconto = 0.3;
    let livrosComDesconto = livros.map((livro)=> {
        
        //...livro = faz uma copia, menos do preco
        return {...livro, preco: livro.preco - (livro.preco * desconto) }
    })

    console.log(livrosComDesconto);
    return livrosComDesconto
}