let textIndex = 0;
revealTexts();

function revealTexts() {
    let i;
    let texts = document.getElementsByClassName("texts");
    if (texts) {
        for(i = 0; i < texts.length; i++) {
            texts[i].style.display = "none";
        }
        textIndex++;
        if(textIndex > texts.length) {
            textIndex = 1
        }
        let txt = texts[textIndex - 1]
        if (txt) {
            txt.style.display = "inline-block";
            setTimeout(revealTexts, 2000);
        }
    }
}



/* var slideIndex = 0;
slideShow();

function slideShow() {
    let i;
    var x = document.getElementsByClassName("sl-slide");
    if (x) {
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        if (slideIndex) {
            slideIndex++;
            if (slideIndex > x.length) {
                slideIndex = 1;
            }
            x[slideIndex - 1].style.display = "block";
            setTimeout(slideShow, 4000);
        }
    }
    
} */


//TOGGLE MENU BUTTON
let menuBtn = document.querySelector('.menu-btn');
let header = document.querySelector('header');
function menuToggle () {
    header.classList.toggle('active');    
}
menuBtn.addEventListener('click', menuToggle);



//SCROLL ANIMATIONS

function revealItems () {
    let reveal = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveal.length; i++) {
        let curRevealItem = reveal[i]
        let elementDist = curRevealItem.getBoundingClientRect().top;
        let WinndowvH = window.innerHeight;
        let toRevealEl = 150;
        
        if (elementDist < WinndowvH - toRevealEl) {
            curRevealItem.classList.add('active')
        } else {
            curRevealItem.classList.remove('active')
        }   
    }
}
window.addEventListener('scroll', revealItems);