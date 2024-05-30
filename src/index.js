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

let lastLocation;
navScroll();

window.addEventListener("load", ()=>{
   const content=document.querySelector("#content");
   content.appendChild(makeHome());
   homeStyleController.use();
   lastLocation="home"; //DEFAULT BEHAVIOR ON LOAD
})



const navBtns=document.querySelectorAll("nav button");

navBtns.forEach(btn => btn.addEventListener("click", handleInput ))

function handleInput(){
    const content=document.querySelector("#content");
    const val=this.textContent; /*value atribute could be use instead of this, but for my use case, it's the same*/

    if(val==lastLocation){ //AVOID UNNECESSARY EXECUTION;
        return;
    }

    lastLocation=val;

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

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