function validar(){
    var email = formLogin.email.value;
    var password = formLogin.password.value;
 
    if(email == ""){
        alert('Preencha o campo de e-mail!!')
        formLogin.email.focus();
        return false;
    }
    if(email != "mundoufc@gmail.com"){
        alert('O e-mail digitado não está registrado!!')
        formLogin.email.focus();
        return false;
    }
    if(password == ""){
        alert('Preencha o campo de senha !!')
        formLogin.password.focus();
        return false;
    }

    if(password != "87654321"){
        alert('A senha digitada não está correta')
        formLogin.password.focus();
        return false;
    }
 }
 