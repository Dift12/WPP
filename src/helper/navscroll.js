export default function navScroll(){
    const nav=document.querySelector("nav");
    
    document.addEventListener("scroll",()=>{
        const page=document.querySelector("html");
        
        if(page.scrollTop>nav.scrollHeight){
            nav.classList.add("scrolled")
        }
        else
        {
            nav.classList.remove("scrolled")
        }       
    })
    
}