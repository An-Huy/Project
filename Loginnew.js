const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

// Check - Login
var CORRECT_USER = 'tuan201200392'
var CORRECT_PASS = '11012002'
var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if(formLogin.attachEvent){
	formLogin.attachEvent('Login', onFormSubmit);
}
else {
	formLogin.attachEventListener('Login', onFormSubmit);
}

function onFormSubmit(){
	var username = inputUsername.value;
	var password = inputPassword.value;
	if (username == CORRECT_USER && password == CORRECT_PASS){
		alert('Logged in successfully!');
	}
	else {
		alert('Incorrect account or password!!!')
	}
}
