let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
var box=1;
setInterval(next,3000);
 
document.querySelector("#pre").onclick=pre;
document.querySelector("#next").onclick=next;

function pre(){
    document.querySelector("#box"+ box).style.display="none";
    box--;if(box<1)box=6;
    document.querySelector("#box"+box).style.display="block";
}
function next(){
    document.querySelector("#box"+ box).style.display="none";
    box++;if(box>6)box=1;
    document.querySelector("#box"+box).style.display="block";
}
