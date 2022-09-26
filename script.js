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

let nome = document.getElementById('nome');
let email = document.getElementById('email');
let btn = document.getElementById('login');

btn.addEventListener('click', function login(){
	let nome_usuario = nome.value;
	let email_usuario = email.value;


	if (nome_usuario == '') {
		window.alert('Campo inválido');
		document.classList.add('invalid');

	}else{
	     document.classList.remove('invalid');
	}
});

login();
