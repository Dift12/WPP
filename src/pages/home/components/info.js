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
    paragraph.textContent=`The amount of text required here to make a paragraph look real is something that i 
                           dont know , so i'll just fill everthing with text to make it look somewhat real,
                           nevertheless the content of this paragraph is completely irrelevant and it makes no sense.`

    textContainer.appendChild(infoTitle);
    textContainer.appendChild(infoSubTitle);
    textContainer.appendChild(paragraph);

    info.appendChild(image);
    info.appendChild(textContainer);

    return info;
}