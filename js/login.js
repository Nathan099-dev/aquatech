function login(){
    const email_usuario = email.value;
    const senha_usuario = senha.value;

    if (email.email_usuario.value == null) {
        window.alert('Campo inválido');
        email_usuario.style.borderColor = 'red'
    }
}