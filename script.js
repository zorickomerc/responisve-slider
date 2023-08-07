const mobileMenu = () => {
   let menu = document.querySelector('.header ul');
   let btn = document.querySelector("#btn-menu");
   if (btn.innerText === "MENU") {
       menu.style.display = "block";
       btn.innerText = "CLOSE";
   } else {
    menu.style.display = "none"    
    btn.innerText = "MENU";
    }  
}
 
