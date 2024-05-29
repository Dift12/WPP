export default function banner(){
    const banner=document.createElement("section");
    
    const title=document.createElement("p");
    const subTitle=document.createElement("p");

    const button=document.createElement("button");

    banner.classList.add("banner");

    title.textContent="What do you think it is?";
    subTitle.textContent="A cool banner, work with us or something";
    button.textContent="Hover me!";

    banner.appendChild(title);
    banner.appendChild(subTitle);
    banner.appendChild(button);

    return banner;
}