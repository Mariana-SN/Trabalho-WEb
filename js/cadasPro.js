function validar(){
    var nome = formProdutoCadastro.nome.value;
    var ID = formProdutoCadastro.ID.value;
    var desc = formProdutoCadastro.desc.value;
    var forn = formProdutoCadastro.forn.value;
    var marca = formProdutoCadastro.marca.value;
    var dept = formProdutoCadastro.dept.value;
    var grupo = formProdutoCadastro.grupo.value;
    var subgrupo = formProdutoCadastro.subgrupo.value;
    var quantidade = formProdutoCadastro.quantidade.value;
    var preço = formProdutoCadastro.preço.value;
    var preçovenda = formProdutoCadastro.preçovenda.value;
      
    if(nome ==""){
        alert ('Preencha o campo Nome !!')
        formProdutoCadastro.nome.focus();
        return false;
    }
    if(ID == ""){
        alert('Preencha o campo do ID !!')
        formProdutoCadastro.ID.focus();
        return false;
    }
    if(desc == ""){
        alert('Preencha o campo do Descrição !!')
        formProdutoCadastro.desc.focus();
        return false;
    }
    if(forn == ""){
        alert('Preencha o campo do Fornecedor !!')
        formProdutoCadastro.forn.focus();
        return false;
    }
    if(marca == ""){
        alert('Preencha o campo do Marca !!')
        formProdutoCadastro.marca.focus();
        return false;
    }
    if(dept == ""){
        alert('Preencha o campo do Departamento !!')
        formProdutoCadastro.dept.focus();
        return false;
    }
    if(grupo == ""){
        alert('Preencha o campo do Grupo !!')
        formProdutoCadastro.grupo.focus();
        return false;
    }
    if(subgrupo == ""){
        alert('Preencha o campo do Sub-Grupo !!')
        formProdutoCadastro.subgrupo.focus();
        return false;
    }
    if(quantidade == ""){
        alert('Preencha o campo do Quantidade de Produtos !!')
        formProdutoCadastro.quantidade.focus();
        return false;
    }
    if(preço == "" || preço <= 0){
        alert('Verifique o campo de Preço ele pode estar vazio ou com valor indevido !!')
        formProdutoCadastro.preço.focus();
        return false;
    }
    if(preçovenda == "" || preçovenda <= preço){
        alert('Seu campo de Preço de Venda está ERRADO. Cuidado! Você tem qua alimentar a máquina opressora do Capitalismo!!! ^^')
        formProdutoCadastro.preçovenda.focus();
        return false;
    }
}