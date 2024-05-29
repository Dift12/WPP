import about from "./about.lazy.css";

export {about};

export default function makeAbout(){

    const section=document.createElement("section");
    section.classList.add("about");
    
    const aboutUs=document.createElement("div");
    const aboutTitle=document.createElement("h2");
    const aboutText=document.createElement("p");
    const aboutSub=document.createElement("h2");
    const aboutText2=document.createElement("p");

    aboutTitle.textContent="Who we are:";

    aboutText.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    aboutSub.textContent="Our philosophy:";

    aboutText2.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    aboutUs.appendChild(aboutTitle);
    aboutUs.appendChild(aboutText);
    aboutUs.appendChild(aboutSub);
    aboutUs.appendChild(aboutText2);

    const map=document.createElement("div");
    const whereTo=document.createElement("h2");
    const iframe=document.createElement("iframe");

    whereTo.textContent="Where to find us:";
    iframe.src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32282.89005938148!2d-57.88469262516266!3d-34.914864140334274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1717018685360!5m2!1ses!2sar";
    iframe.style.border="none";
    iframe.allowFullscreen=false;
    iframe.loading="lazy";
    iframe.referrerPolicy="no-referrer-when-downgrade";


    map.appendChild(whereTo);
    map.appendChild(iframe);

    section.appendChild(aboutUs);
    section.appendChild(map);


    return section;
}


