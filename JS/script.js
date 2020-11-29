var produtos;

function cdprodutos(descricao, valor, quantidade){
    
    produtos = document.getElementById("tbProdutos");
    var qtdLinhas = produtos.rows.length;
    var linha = produtos.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellDescricao = linha.insertCell(1);
    var cellValor = linha.insertCell(2);
    var cellQuantidade = linha.insertCell(3);
    var cellTotal = linha.insertCell(4);

    cellCodigo.innerHTML = qtdLinhas;
    cellDescricao.innerHTML = descricao;
    cellValor.innerHTML = valor;
    cellQuantidade.innerHTML = quantidade;
    cellTotal.innerHTML = (valor*quantidade);

}