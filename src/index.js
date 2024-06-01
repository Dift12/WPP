import makeHome from "./pages/home/home";
import makeMenu from "./pages/menu/menu";
import makeAbout from "./pages/about/about";
import navScroll from "./helper/navscroll";

/*Imports needed to manage the css lazy load*/
import { home as homeStyleController } from "./pages/home/home" ; 
import { menu as menuStyleController } from "./pages/menu/menu";
import { about as aboutStyleController} from "./pages/about/about";

import "./shared-css/shared.css";

/*THIS COULD BE DONE WAY BETTER; BUT FOR THIS CASE; THE ONLY NEED IS THAT IT WORKS AS INTENDED; AND NOT THE HOW*/

let lastUsedTab;
navScroll();

window.addEventListener("load", ()=>{ //THIS IS NOT NECESSARY AS THE SCRIPT TAG HAS A DEFER ATTRIBUTEM;
   const content=document.querySelector("#content");
   content.appendChild(makeHome());
   homeStyleController.use();
   lastUsedTab="home"; //DEFAULT BEHAVIOR ON LOAD
})

const navBtns=document.querySelectorAll("nav button");

navBtns.forEach(btn => btn.addEventListener("click", handleInput ));

function handleInput(){

    const content=document.querySelector("#content");
    const val=this.textContent; /*value atribute could be use instead of this, but for my use case, it's the same*/

    if(val==lastUsedTab){ //AVOID UNNECESSARY EXECUTION;
        return;
    } 

    /*SOL 1: To avoid writing this logic in JS, an option could be to define the active class for every tab text in their own lazy stylesheet, 
    so it will be applied whenever the required stylesheet load, and the classes for unactive tabs will cease to load
    achieveng that way the desired effect of making the active and inactive tab look differente.
    This increases css repetition*/
    //this.classList.add(`active-${this.textContent}`); 

    lastUsedTab=val;

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    navBtns.forEach(btn=> btn.classList.remove("active")); //THIS COULD ALSO WORK INSTEAD OF SOL 1.
    this.classList.add("active");

    homeStyleController.unuse();
    aboutStyleController.unuse();
    menuStyleController.unuse();

    switch(val){
        case "home":
            content.innerHTML="";
            content.appendChild(makeHome());
            homeStyleController.use();
            break;
        case "menu":
            content.innerHTML="";
            content.appendChild(makeMenu());
            menuStyleController.use();
            break;
        case "about":
            content.innerHTML="";
            content.appendChild(makeAbout());
            aboutStyleController.use();
    }
}