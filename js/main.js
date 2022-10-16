const buttonSwitch = document.querySelector('#switch');

buttonSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true')
    }else{localStorage.setItem('dark-mode', 'false')}
});

if(localStorage.getItem('dark-mode')=== 'true'){
    document.body.classList.add('dark');
}else{document.body.classList.remove('dark');}


const menu = document.querySelector('#menu');
const active = document.querySelector('.menu');


menu.addEventListener("click", ()=>{
    active.classList.toggle('mActive')
    });

menu.addEventListener("mouseout", ()=>{
    active.classList.add('mActive')
    });

active.addEventListener("mousemove", ()=>{
    active.classList.remove('mActive');
    });

active.addEventListener("mouseout", ()=>{
    active.classList.add('mActive');
    });

