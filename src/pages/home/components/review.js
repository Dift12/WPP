export default function review(){

    const reviews=document.createElement("section");
    reviews.classList.add("reviews");
    const reviewText=document.createElement("p");
    const display=document.createElement("div");
    display.classList.add("display");
    
    for(let i=0; i<11;i++){

        const card=document.createElement("div");
        card.classList.add("card");


        const title=document.createElement("p");
        const author=document.createElement("p");
        const text=document.createElement("p");
        const score=document.createElement("span");
        score.classList.add("material-symbols-outlined");
        score.textContent="star star star star star";

        title.textContent="Amazing in every aspect.";
        author.textContent="John Wick";
        text.textContent=`Everything is amazing, everthing tastes great, the website looks pretty neat
                but it is a copy of another design, i believe there's no need for copying someone else work
                but the idea is to practice, anyway, this was a food review, everthing is okay, dishes cost
                "una re banda", but it's worth it.`

        card.appendChild(title);
        card.appendChild(score);
        card.appendChild(text);
        card.appendChild(author);
    
        display.appendChild(card);
    }

    reviewText.textContent="Check out our reviews!";
    reviews.appendChild(reviewText);
    reviews.appendChild(display);

    return reviews;
    
}