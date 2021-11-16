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

function check() {
	var a = document.forms[0]['code'].value;
	switch (a)
	{
	case "201200392" : window.location("navcco.html"); break;
	case "201200345" : window.location("navcco.html"); break;
	case "201200346" : window.location("navcco.html"); break;
	case "201120348" : window.location("navcco.html"); break;
	case "150284568" : window.location("navcco.html"); break;
	case "201345678" : window.location("navcco.html"); break;
	case "215487937" : window.location("navcco.html"); break;
	case "201234567" : window.location("navcco.html"); break;
	case "202012021" : window.location("navcco.html"); break;
	case "450212345" : window.location("navcco.html"); break;
	case "101245782" : window.location("navcco.html"); break;
	case "101231545" : window.location("navcco.html"); break;
	case "123012147" : window.location("navcco.html"); break;
	}
}