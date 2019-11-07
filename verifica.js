function verificarSenha() {
    
    var s1 = document.getElementById("senha").value;
    var s2 = document.getElementById("confirmarsenha").value;
    
    if(s1 != s2){
        var msg = document.getElementById('mensagem');
        msg.innerHTML = "As senhas não conferem";
        msg.className = "alert alert-danger";
    }
}