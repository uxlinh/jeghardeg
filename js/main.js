let dropdownBtn = document.querySelector('.box .dropdown-btn');
let dropdownContentEml = document.querySelector('.box .dropdown-content');

dropdownBtn.addEventListener('click', (event) => {
	dropdownContentEml.classList.add('active');
});

dropdownBtn.addEventListener('focusout', (event) => {
	dropdownContentEml.classList.remove('active');
});