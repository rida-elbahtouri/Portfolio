document.addEventListener("turbolinks:load", function() {

const frontskill = document.getElementById('frontskills')
const showfront = document.getElementById('showfrontskill')
const backskill = document.getElementById('backendskills')
const showbackend = document.getElementById('showbackendskill')
const otherskills = document.getElementById('otherskills')
const showotherskills = document.getElementById('showotherskill')

window.onscroll = function() {scroll()};
const nav= document.getElementById("mynav");
var sticky = nav.offsetTop;
const scroll=()=> {
    if (window.pageYOffset > sticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
}

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

