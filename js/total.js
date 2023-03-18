const elementoTotal = document.getElementById('valor_total_livros_disponiveis');




function total(livrosparasoma){
let totalvalor = 0;
    livrosparasoma.forEach((element)=>{
        if(element.quantidade > 0){
            totalvalor = totalvalor + element.preco;
            
        }

    })

    console.table(livrosparasoma);
    
    
    elementoTotal.innerHTML=`<div class='livros__disponiveis'><p>Todos os livros disponíveis por R$ <span id='valor'>${totalvalor.toFixed(2)}</span></p></div>`

}