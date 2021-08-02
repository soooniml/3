const back = document.querySelector('.back')

const toggle = document.querySelector('.show')

toggle.addEventListener('click' , e =>{
    e.preventDefault();

    back.classList.toggle('activeBack')
})