// Gestion du menu sticky
var nav = document.getElementsByClassName('menu')[0];
console.log(nav);
var sticky = nav.offsetTop;
window.onscroll = ()=>{
    if (window.pageYOffset > sticky) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
} 