import hero from "./components/hero";
import info from "./components/info";
import banner from "./components/banner";
import review from "./components/review";

import "./home.lazy.css";

export default function makeHome(){
    const home=document.createElement("div");
    home.appendChild(hero());
    home.appendChild(info());
    home.appendChild(banner());
    home.appendChild(review());
    return home;
}