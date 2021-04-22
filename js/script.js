const actors = document.querySelector('.actors')
const creators = document.querySelector('.creators')
const per_act = document.querySelector('.persons_act')
const per_cre = document.querySelector('.persons_cre')
actors.addEventListener('click',() =>{
        per_act.classList.add('pers_active')
        per_cre.classList.remove('pers_active')
        document.querySelector('.actors').classList.add('btn_per_active')
        document.querySelector('.creators').classList.remove('btn_per_active')
})
creators.addEventListener('click',() =>{
        per_cre.classList.add('pers_active')
        per_act.classList.remove('pers_active')
        document.querySelector('.creators').classList.add('btn_per_active')
        document.querySelector('.actors').classList.remove('btn_per_active')
})



document.querySelector('.burger').addEventListener('click',()=>{
    console.log('dct gjikj');
        document.querySelector('.burger-menu').classList.add("active");
        document.querySelector('.header').classList.add("close-logo");
        document.querySelector('.burger').classList.add("close-burger");
        document.querySelector('.header').classList.remove("active-logo");
        document.querySelector('.burger').classList.remove("active-burger");
})
document.querySelector('.material-icons-outlined').addEventListener('click',()=>{
    document.querySelector('.burger-menu').classList.remove("active");
    document.querySelector('.header').classList.add("active-logo");
    document.querySelector('.burger').classList.add("active-burger");
    document.querySelector('.header').classList.remove("close-logo");
    document.querySelector('.burger').classList.remove("close-burger");
})
