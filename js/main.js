let select = function(){
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');

	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	});

	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	});

	function selectToggle(){
		this.parentElement.classList.toggle('is-active');
	}

	function selectChoose(){
		let text = this.innerText,
		select = this.closest('.select'),
		currentText = select.querySelector('.select__current');
		currentText.innerText = text;
		select.classList.remove('is-active');
	}
};

select();

/* dropdown menu on click */

let menuItem = document.querySelector('.js-button');

menuItem.addEventListener('click', function(){
	menuItem.classList.toggle('active')
});
