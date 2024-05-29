import InfoImage from "../info.jpg";

export default function info(){
    
    const info=document.createElement("section");
    
    const textContainer=document.createElement("div");
    const infoTitle=document.createElement("p");
    const infoSubTitle=document.createElement("p");
    const paragraph=document.createElement("p");
    const image=new Image();
    image.src=InfoImage;
    image.alt="People seating in our restaurant";

    info.classList.add("info");
    textContainer.classList.add("info-text");

    infoTitle.textContent="What's up with that?";
    infoSubTitle.textContent="No special meaning here, just placeholders."
    paragraph.textContent="Lorem";

    textContainer.appendChild(infoTitle);
    textContainer.appendChild(infoSubTitle);
    textContainer.appendChild(paragraph);

    info.appendChild(image);
    info.appendChild(textContainer);

    return info;
}