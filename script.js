
function login() {
	var age = document.getElementById("nombre").value;

	if (isNaN(age)) {
		alert('Nous voulons un nombre, pas des lettres...');
	}
	else {
		
		if (age < 18) {
			alert('Oula ! tu as 18 ans, Hein ?');
		}
		else { 
			window.location.href="home.html";
			// redirection();
			alert('Bien. Vous pouvez y aller.');
			// alert('ok');
			// redirection()
			sessionStorage["session"] = "majeur";
		}
	}
}
