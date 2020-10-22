let dropdownBtn = document.querySelector('.box .dropdown-btn');
let dropdownContentEml = document.querySelector('.box .dropdown-content');

dropdownBtn.addEventListener('click', (event) => {
	dropdownContentEml.classList.add('active');
});

dropdownBtn.addEventListener('focusout', (event) => {
	dropdownContentEml.classList.remove('active');
});


//HERO ANIMATION
const hero = document.querySelector(".header__textbox");
const arrowdown = document.querySelector(".btn-arrow");

const tl = new TimelineMax();
tl.fromTo(
    hero,
    3, {
        opacity: '0'
    }, {
        opacity: '1',
        ease: Power2.easeInOut
    },
).fromTo(
    arrowdown,
    2, {
        opacity: '0',
        y: '-50%'
    }, {
        opacity: '1',
        y: '10%',
        ease: Power2.easeInOut
    }, '-=2.1');



    function SubForm (){
        $.ajax({
            url:'https://api.apispreadsheets.com/data/2338/',
            type:'post',
            data:$("#myForm").serializeArray(),
            // success: function(){
            //   alert("Form Data Submitted :)")
            // },
            // error: function(){
            //   alert("Skjema  :(")
            // }
        });
    }
    