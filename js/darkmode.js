const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('oscuro');
	btnSwitch.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if (document.body.classList.contains('oscuro')) {
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if (localStorage.getItem('dark-mode') === 'true') {
	document.body.classList.add('oscuro');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('oscuro');
	btnSwitch.classList.remove('active');
}