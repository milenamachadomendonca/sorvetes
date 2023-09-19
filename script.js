botao.addEventListener('click', function(){

    var nomeCliente = nome.value;
    var quantiaSorvete = quantidade.value;
    var saborSorvete = sabores.value;
   
   
    //alert(" nome: " + nomeCliente + " Qnt: " + quantiaSorvete +  " sabor: " + saborSorvete);
   
    
    pedidoNome.innerHTML = nomeCliente;
    pedidoQantia.innerHTML = quantiaSorvete;
    pedidoSabor.innerHTML = saborSorvete;
   
   });