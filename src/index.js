

import makeHome from "./pages/home/home";
import "./shared-css/shared.css";

const content=document.querySelector("#content");
console.log(content);
content.appendChild(makeHome());

