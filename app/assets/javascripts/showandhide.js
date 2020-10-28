document.addEventListener("turbolinks:load", function() {

let frontskill = document.getElementById('frontskills')
let showfront = document.getElementById('showfrontskill')
let backskill = document.getElementById('backendskills')
let showbackend = document.getElementById('showbackendskill')
let otherskills = document.getElementById('otherskills')
let showotherskills = document.getElementById('showotherskill')



function showHide(elm,id){
    let arrows = document.getElementById(id)
     if (elm.className==='block'){
        elm.className='none'
        arrows.classList.remove('rotate')
    }else{
        elm.className='block'
        arrows.classList.add('rotate')
    }
    
}
showfront.addEventListener('click',function(){
    showHide(frontskill,'0')
})
showbackend.addEventListener('click',function(){
    showHide(backskill,'1')
})
showotherskills.addEventListener('click',function(){
    showHide(otherskills,'2')
})
//end of container function
});

