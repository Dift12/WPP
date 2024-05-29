export default function hero(){

    const hero=document.createElement("section");
    const heroOverlay=document.createElement("div");
    const brand=document.createElement("div");
    const brandSubText=document.createElement("p");
    const badge=document.createElement("div");

    hero.classList.add("hero");
    heroOverlay.classList.add("overlay");
    brand.classList.add("brand-text");
    brandSubText.classList.add("brand-text-alt");

    brand.innerHTML="<p>oysver <br> danver</p>";
    brandSubText.textContent="読書するクソ野郎";

    badge.appendChild(brand);
    badge.appendChild(brandSubText);
    heroOverlay.appendChild(badge);
    hero.appendChild(heroOverlay);

    return hero;

}