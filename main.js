const text = document.querySelector('.text');
const box = document.querySelector('.landing-text');
const strText = text.textContent;
const splitText = strText.split("");

console.log(splitText);

text.textContent = "";

for(let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 300);

function onTick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add('fade');
    box.classList.add("fade");
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}


$(document).ready(function () {
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){
            $('html, body').animate({
                scrollTop: $($($this).attr('href')).offset().top - 100
            },2000)
    });
    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop:0
        },2000)
    });
});

AOS.init({
    easing:'ease',
    duration: 1800
})