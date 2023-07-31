let nav=document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scroll > 20)
    {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

let navbar=document.querySelectorAll(".nav-link");
let navcoll=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a)
{
    a.addEventListener("click",function()
    {
        navcoll.classList.remove("show");
    })
})
