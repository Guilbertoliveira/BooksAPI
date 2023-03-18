const btnDisponivel = document.getElementById('btnLivrosDisponiveis');

btnDisponivel.addEventListener('click', ()=> {
    console.table(resconvert)
    let livrosDisponivel = resconvert.filter((element)=>{
        return element.quantidade > 0;
    })

    console.table()
    exibirLivros(aplicarDesconto(livrosDisponivel));
    
    total(aplicarDesconto(livrosDisponivel));
    } ) 
    