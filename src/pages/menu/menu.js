import menu from "./menu.lazy.css";

export {menu};

export default function makeMenu(){
    
    const section=document.createElement("section");
    section.classList.add("menu");
    const menu=document.createElement("ul");

    
    for(let i=0;i<18;i++){
        const name=document.createElement("p");
        const dish=document.createElement("li");
        const ingredients=document.createElement("p");
        ingredients.classList.add("ingredients");
        const description=document.createElement("p");
        description.classList.add("description");
        
        const card=document.createElement("div");
        card.classList.add("card");

        name.textContent="Lorem a la mode";
        ingredients.textContent="Lorem, Ipsum, Ice Cream, Grapes, Wine, Garlic and Chicken";
        description.textContent="Le petit bullshit that i dont know how to fill, all mixed to perfection to create a increible flavor flave."

        card.appendChild(name);
        card.appendChild(ingredients);
        card.appendChild(description);

        dish.appendChild(card);

        menu.appendChild(dish);
        
    }

    
    section.appendChild(menu);
    return section;

}