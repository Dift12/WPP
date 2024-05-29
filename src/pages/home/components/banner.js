import media from "../video.mp4";

export default function banner(){
    const banner=document.createElement("section");
    
    const title=document.createElement("p");
    const subTitle=document.createElement("p");
    const overlay=document.createElement("div");
    const video=document.createElement("video");

    const button=document.createElement("button");

    banner.classList.add("banner");
    overlay.classList.add("ban-overlay");

    title.textContent="What do you think it is?";
    subTitle.textContent="A cool banner, work with us or something";
    button.textContent="Hover me!";

    video.src=media;
    video.loop=true;
    video.autoplay=true;
    video.controls=false;
    video.muted=true;
    

    overlay.appendChild(title);
    overlay.appendChild(subTitle);
    overlay.appendChild(button);
    banner.appendChild(video);
    banner.appendChild(overlay);

    return banner;
}