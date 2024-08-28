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



function cadastro(){
	const nome_usuario = nome.value;
	const email_usuario = email.value;
	const telefone_usuario = telefone.value;
	const senha_usuario = senha.value;
	const confirmar_senha_usuario =  confirm.value



	if (nome_usuario == '') {
		window.alert('Campo inválido');
		document.classList.add('invalid');

	}else{
	     document.classList.remove('invalid');
	}

	if (email_usuario.value == null) {
		window.alert('campo inválido')	
		email_usuario.style.borderColor = '#ff0000'	

		}
		
		else if (email_usuario.indexOf('@').value == -1 || email_usuario.indexOf('.').value == -1) {
		window.alert('email não reconhecido. Tente novamente')

		}
		
		else if (telefone_usuario.value == null) {
			window.alert('Campo inválido');
			telefone_usuario.style.borderColor = '#ff0000';

		}else if (senha_usuario == null) {
			window.alert('Campo inválido. Crie uma senha')
			senha_usuario.style.borderColor = '#ff0000';

		}
		
		else if (senha_usuario.length < 8) {
			window.alert('Sua senha precisa ter o mínimo de 8 caracteres')
			senha_usuario.style.borderColor = '#ff0000';

		}
		
		else if (confirmar_senha_usuario.value == null) {
			window.alert('Campo inválido')
			confirmar_senha_usuario.style.borderColor = '#ff0000';
			
		}
		
		else if (confirmar_senha_usuario != senha_usuario) {
			window.alert('As duas senhas cadastradas não são iguais')
			senha_usuario.style.borderColor = 'red';
			confirmar_senha_usuario.style.borderColor = 'red';

		}else{
			window.alert('cadastro reallizado com sucesso')
			window.location.href = '../html/login.html'
		}
};

cadastro();


	

