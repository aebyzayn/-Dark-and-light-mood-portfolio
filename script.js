let nav = document.querySelector('nav');
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

// Nav Scroll...........
window.addEventListener('scroll',()=>{
    nav.classList.toggle('nav-scroll',scrollY>0);
});


// Dark Mood Ligh Mood...........
moon.addEventListener('click',()=>{
    document.querySelector('body').classList.add('dark-mood');
    moon.style.display = 'none'
    sun.style.display='block'
});

sun.addEventListener('click',()=>{
    document.querySelector('body').classList.remove('dark-mood');
    sun.style.display='none'
    moon.style.display = 'block'
});

// Phone Menu...........

let open = document.querySelector('.open');
let close = document.querySelector('.close');
let navLinks = document.querySelector('.nav-links');

open.addEventListener('click',()=>{
    navLinks.style.display='block';
    open.style.display='none';
    close.style.display='block'
});

close.addEventListener('click',()=>{
    navLinks.style.display='none';
    open.style.display='block';
    close.style.display='none'
})
