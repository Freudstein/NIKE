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

$(document).on('click', '.js-button', function(e) {
    e.preventDefault();
    console.log(e.target);
	this.classList.toggle('active')
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}*/

// Close the dropdown menu if the user clicks outside of it
/*window.onclick = function(event) {
  if (!event.target.matches('.js-button')) {

    var dropdowns = document.getElementsByClassName("js-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} */