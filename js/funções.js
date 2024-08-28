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
	const nome_usuario = nome.value;
	const email_usuario = email.value;
	const senha_usuario = senha.value;

	if (nome_usuario == '') {
		window.alert('Campo inválido');
		const nome_usuario = document.getElementById('nome');
		nome_usuario.style.border = '1px solid red'
		return;
	}
	
	else{
	     document.classList.remove('invalid');
	}

	if (email_usuario.value == null) {
		window.alert('campo inválido')	
		const email_usuario = document.getElementById('email');
		email_usuario.style.border = '1px solid red';
		return;

	}
		
	else if (email_usuario.indexOf('@').value == -1 || email_usuario.indexOf('.').value == -1) {
		window.alert('email não reconhecido. Tente novamente');
		const email_usuario = document.getElementById('email');
		email_usuario.style.border = '1px solid red';
		return;

	}
		
	else if (senha_usuario == null) {
		window.alert('Campo inválido. Crie uma senha')
		const senha_usuario = document.getElementById('senha');
		senha_usuario.style.border = '1px solid red';
		return;

	}
		
	else if (senha_usuario.length < 8) {
		window.alert('Sua senha precisa ter o mínimo de 8 caracteres')
		const senha_usuario = document.getElementById('senha');
		senha_usuario.style.border = '1px solid red';
		return;
	}
		
	else{
			window.alert('cadastro reallizado com sucesso')
			window.location.href = '../html/login.html'
		}
};

cadastro();


	

