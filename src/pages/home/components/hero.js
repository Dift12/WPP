export default function hero(){

    const hero=document.createElement("section");
    const heroOverlay=document.createElement("div");
    const brand=document.createElement("p");
    const brandSubText=document.createElement("p");

    hero.classList.add("hero");
    heroOverlay.classList.add("overlay");
    brand.classList.add("brand-text");
    brandSubText.classList.add("brand-text-alt");

    brand.innerHTML="<p>oysver <br> danver</p>";
    brandSubText.textContent="ASDASDASD";

    heroOverlay.appendChild(brand);
    heroOverlay.appendChild(brandSubText);
    hero.appendChild(heroOverlay);

    return hero;

}