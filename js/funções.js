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



function cadastro(nome, email, senha){
	const nome_usuario = document.getElementById('nome').value;
	const email_usuario = document.getElementById('email').value;
	const senha_usuario = document.getElementById('senha').value;

	if (!nome_usuario) {
		alert('Campo inválido! Por favor, preencha este campo corretamente');
		const nome_usuario = document.getElementById('nome');
		nome_usuario.style.border = '1px solid red';
		return;
	}

	if (!email_usuario) {
		alert('Campo inválido! Por favor, preencha este campo corretamente');
		const email_usuario = document.getElementById('email');
		email_usuario.style.border = '1px solid red'
		return;
	}

	if (email_usuario.indexOf('@').value == -1 || email_usuario.indexOf('.').value == -1) {
		alert('Campo inválido! Por favor, preencha este campo corretamente');
		const email_usuario = document.getElementById('email');
		email_usuario.style.border = '1px solid red';
		return;
	}

	if (!senha_usuario) {
		alert('Campo inválido! Por favor, preencha este campo corretamente');
		const senha_usuario = document.getElementById('senha');
		senha_usuario.style.border = '1px solid red';
		return;
	}
}