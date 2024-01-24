var slideUp = {
    distance: '150%',
    delay: 300,
    duration: 1000,
    reset: true,
    origin: 'bottom',
    cleanup: true 
};

ScrollReveal().reveal('.rising_line', slideUp);

function animeBar (el) {
    el.classList.add('to_right_line');
}

function animeReverseBar (el) {
    el.classList.remove('to_right_line');
}

ScrollReveal().reveal('.rising_bar', { 
	beforeReveal: animeBar, 
	afterReset: animeReverseBar,
	reset: true

});

var revealPost = {
    distance: '20%',
    delay: 200,
    duration: 1200,
    origin: 'bottom',
    easing: 'ease-in-out',
    opacity: 0,
    reset: false
};

ScrollReveal().reveal('.post', revealPost);