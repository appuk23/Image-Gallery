let scrollbox = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollbox.addEventListener("wheel", (evt) => {
   evt.preventDefault;
   scrollbox.scrollLeft += evt.deltaY;
   scrollbox.style.scrollBehavior="auto";
});

nextBtn.addEventListener("click",()=>{
    scrollbox.scrollLeft += 900;
    scrollbox.style.scrollBehavior="smooth";
});

backBtn.addEventListener("click",()=>{
    scrollbox.scrollLeft -= 900;
    scrollbox.style.scrollBehavior="smooth";

});
