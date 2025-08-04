// Read More
function myFunction(dotsId, moreId, btnId) {
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreId);
    var btnText = document.getElementById(btnId);
  
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


// Toggle icon navbar
let menuIcon= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick= ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




//  Scroll Section active link 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    // Header 
let header= document.querySelector('header');
header.classList.toggle('sticky', window.scrollY>100);

// remove toggle icon and navbar when navbaar clicked
menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};




// Scroll reveal 

ScrollReveal({
    // reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content ,.heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1 ,.about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p ,.about-container', { origin: 'right'});


// Typed js

const typed= new Typed('#multiple-text', {
    strings:['Competitive Programmer', 'Full Stack developer', 'UI/UX Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

