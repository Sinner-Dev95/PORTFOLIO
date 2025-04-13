
const dropDown = document.querySelector('.menu-container');
const clickedBtn= document.querySelector('.hbg-container');

if(clickedBtn && dropDown){clickedBtn.addEventListener('click',(event)=>{
    dropDown.classList.toggle('active');
    clickedBtn.classList.toggle('active'); // Aggiungi questa riga
})};

document.addEventListener('click',(event)=>{
    if (!clickedBtn.contains(event.target) && !dropDown.contains(event.target)) {
        // Il click non è né sul bottone né sul menu
        // Qui chiudiamo il menu
        dropDown.classList.remove('active');
    }
})