function validateForm(form){
    
    var msg="";

    /*Requisitante*/
    if(form.getValue("nome") == "") {
     msg += "campo Nome não foi preenchido.";
    }
    if(form.getValue("email") == "") {
        msg += "campo Email não foi preenchido.";
       }
       if(form.getValue("telefone") == "") {
        msg += "campo telefone não foi preenchido.";
       }
       if(form.getValue("documentoidentidade") == "") {
        msg += "campo Documento de Identidade não foi preenchido.";
       }
       if(form.getValue("datanascimento") == "") {
        msg += "campo Data de Nascimento não foi preenchido.";
       }

       /*Ponto Comercial*/
       if(form.getValue("TipoPonto") == "") {
        msg += "campo Tipo de Ponto não foi selecionado.";
       }

       if(form.getValue("Segunda") != "on" && form.getValue("Terca") != "on" && form.getValue("Quarta") != "on" && form.getValue("Quinta") != "on" && form.getValue("Sexta") != "on" && form.getValue("Sabado") != "on" && form.getValue("Domingo") != "on") {
        msg += "campo Dias de Funcionamento não foi informado.";
       }

       if(form.getValue("cep") == "") {
        msg += "campo CEP não foi preenchido.";
       }
       if(form.getValue("logradouro") == "") {
        msg += "campo Logradouro não foi preenchido.";
       }
       if(form.getValue("bairro") == "") {
        msg += "campo Bairro não foi preenchido.";
       }
       if(form.getValue("cidade") == "") {
        msg += "campo Cidade não foi preenchido.";
       }
       if(form.getValue("estado") == "") {
        msg += "campo Estado não foi preenchido.";
       }

       /*Financeiro*/
       if(form.getValue("valor") == "") {
        msg += "campo Valor não foi preenchido.";
       }
       
       if(msg != ""){
        throw msg;
       }
}