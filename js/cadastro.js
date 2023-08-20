let modal = {
	open(){
		document.querySelector('modal-overlay').classList.add('active');
		window.alert('Abri o modal');
	},

	close(){
		document.querySelector('modal-overlay').classList.remove('active');
	}
};

//===========================================================================

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const btn = document.getElementById('login');

btn.addEventListener('click', function login(){
	const nome_usuario = nome.value;
	const email_usuario = email.value;


	if (nome_usuario == '') {
		window.alert('Campo inválido');
		document.classList.add('invalid');

	}else{
	     document.classList.remove('invalid');
	}

	if (email_usuario.value == null) {
		window.alert('campo inválido')	
		email_usuario.style.borderColor = '#ff0000'	

		
	}else if (email_usuario.indexOf('@').value == -1 || email_usuario.indexOf('.').value == -1) {
		window.alert('email não reconhecido. Tente novamente')
	}
});

login();


	

