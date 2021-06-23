var navbar = document.querySelector("nav");
var header = document.querySelector("header");

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

const footerDate = document.querySelector(".date");
footerDate.innerHTML = `<p>Copyright &copy; ${ new Date().getFullYear() } by Omnifood. All rights reserved.</p>`;
