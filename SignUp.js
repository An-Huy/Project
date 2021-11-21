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

// Sign Up - Check
var checkName = /^[a-zA-Z0-9]{8,30}$/;
var checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function check(){
  var check=0;
  var a = document.forms[0]['username'].value;
  var b = document.forms[0]['email'].value;
  var c = document.forms[0]['password'].value;
  var d = document.forms[0]['cfpassword'].value;
  if(a==='' || !checkName.test(username.value) ) {
      alert('Username Error!! Please re-enter');
      check=1;
      return;
  }
  if(b==='' || !checkMail.test(email.value)) {
      alert('Email Error!! Please re-enter');
      check=1;
      return;
  }
  if(c==='') {
      alert('Password Error!! Please re-enter');
      check=1;
      return;
  }
  if(d==='' || d!==c) {
      alert('Incorrect Password!! Please re-enter');
      check=1;
      return;
  }
  if(check==0) {
    alert('You have successfully registered!!');
  }
}