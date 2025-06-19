var subnav=document.querySelector(".subnav")


function opennav(){
    subnav.style.left="0%"
    
}

function closenav(){
    subnav.style.left="-60%"
}


var popup=document.querySelector(".popup")
var btn=document.querySelector(".btn")

function openbtn(){
    popup.style.display="block"
    popup.style.overflow="hidden"
}

function closebtn(){
    popup.style.display="none"
}