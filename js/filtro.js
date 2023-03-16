
const botoes = document.querySelectorAll(".btn")

botoes.forEach(element => {
    element.addEventListener('click', ()=>{
        filtrarLivros(element.value);
    })
});

function filtrarLivros(filtrovalor){
    let livrosFiltrados = resconvert.filter((element)=>{
        return element.categoria === filtrovalor;
    })

    limparLista();
    let filtradopromo = aplicarDesconto(livrosFiltrados);
    exibirLivros(filtradopromo);
}

function limparLista(){
    divpai.innerHTML="";
}


