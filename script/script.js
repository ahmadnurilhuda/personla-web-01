const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerNav = document.querySelector(".header-nav");

// console.log(hamburgerMenu)
hamburgerMenu.addEventListener("click",(event) =>{
    
    // console.log(headerNav)
    
    event.preventDefault();
    headerNav.classList.toggle("show")
});
