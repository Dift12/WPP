

//import makeHome from "./pages/home/home";
import makeMenu from "./pages/menu/menu";
import "./shared-css/shared.css";

const content=document.querySelector("#content");
console.log(content);
content.appendChild(makeMenu());

