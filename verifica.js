function verificarSenha() {
    
    var s1 = document.getElementById("senha").value;
    var s2 = document.getElementById("confirmarsenha").value;
    
    if(s1 != s2){
        var msg = document.getElementById('mensagem');
        msg.innerHTML = "As senhas não conferem";
        msg.className = "alert alert-danger";
        return false;
    }
    return true;
}
function validar(){
    var campo1 = document.getElementById("senha");
    var campo2 = document.getElementById("confirmarsenha");
    if(campo1.value != campo2.value){
        campo2.setCustomValidity("As senhas não conferem");
        campo2.validity = false;        
    }else{
        
        campo2.setCustomValidity("");
        campo2.validity = true;
        
    }
}