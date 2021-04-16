document.addEventListener('DOMContentLoaded', function(){
    const slides = document.querySelectorAll('.bottom');
    let activeSlide = 1;
    window.addEventListener('keydown', function(event){
        if(event.key === 'ArrowRight'){
            const activeClass = '.bottom.item' + activeSlide;
            const activeItem = document.querySelector(activeClass);

            activeSlide += 1;
            const nextClass = '.bottom.item' + activeSlide;
            const nextItem = document.querySelector(nextClass);

            activeItem.style.left = '-100%';
            nextItem.style.left = '0';
        }
    });
});