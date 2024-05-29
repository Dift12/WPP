import makeAbout from "./pages/about/about";
import "./shared-css/shared.css";

const content=document.querySelector("#content");
console.log(content);
content.appendChild(makeAbout());

