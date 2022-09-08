var navbar = document.querySelector("nav");
var header = document.querySelector("header");
const footerDate = document.querySelector(".date");

window.onscroll = () => {
    makeSticky();
}

function makeSticky(){
    if(document.documentElement.scrollTop > header.getBoundingClientRect().bottom){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}


footerDate.innerHTML = `<p>Copyright &copy; ${ new Date().getFullYear() } by Omnifood. All rights reserved.</p>`;
