var closeR = document.getElementById('gb');
var rig = document.getElementById('rc');
var dk = document.getElementById('dk');
function closer () {
  rig.style.right = "-40px";
  dk.style.right = "0px";
}    
function open(){
  dk.style.right = "-40px";
rig.style.right = "0px";
}  
closeR.addEventListener("click", closer);
dk.addEventListener('click',open);