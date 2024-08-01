const slide = document.querySelector('.slides');
let currentIndex = 0;

function updateSlider() {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
    const slideCount = slide.querySelectorAll('img').length;
    if (currentIndex >= slideCount - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlider();
}, 3000);


let exitBtn = document.getElementById("exit")
let togBtn = document.getElementById("toggle-button");
let mobileNavbarBtm = document.getElementById("mobile-navbar")

togBtn.addEventListener("click", (e)=>{
mobileNavbarBtm.style.display= "block";
 console.log("clicked")
})

exitBtn.addEventListener("click", (e)=>{
  mobileNavbarBtm.style.display= "none";
  console.log("Exit Compleated")
})
