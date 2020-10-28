document.addEventListener("turbolinks:load", function() {

const frontskill = document.getElementById('frontskills')
const showfront = document.getElementById('showfrontskill')
const backskill = document.getElementById('backendskills')
const showbackend = document.getElementById('showbackendskill')
const otherskills = document.getElementById('otherskills')
const showotherskills = document.getElementById('showotherskill')



const showHide = (elm,id)=>{
    const arrows = document.getElementById(id)
     if (elm.style.display==='block'){
        elm.style.display='none'
        arrows.classList.remove('rotate')
    }else{
        elm.style.display='block'
        arrows.classList.add('rotate')
    }
    
}
showfront.addEventListener('click',()=>{
    showHide(frontskill,'0')
})
showbackend.addEventListener('click',()=>{
    showHide(backskill,'1')
})
showotherskills.addEventListener('click',()=>{
    showHide(otherskills,'2')
})
//end of container function
});

