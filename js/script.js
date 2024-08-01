


// let slideIndex = 0;
// showSlides();

// function showSlides() { 
//   let slides = document.getElementsByClassName("mySlides");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   slides[slideIndex-1].style.display = "block";  
//   setTimeout(showSlides, 3000); 
// }





// let exitBtn = document.getElementById("exit")
// let togBtn = document.getElementById("toggle-button");
// let mobileNavbarBtm = document.getElementById("mobile-navbar")

// togBtn.addEventListener("click", (e)=>{
// mobileNavbarBtm.style.display= "block";
//  console.log("clicked")
// })

// exitBtn.addEventListener("click", (e)=>{
//   mobileNavbarBtm.style.display= "none";
//   console.log("Exit Compleated")
// })




// let currentIndex = 0;

// function showSlide(index) {
//   const slides = document.querySelectorAll('.slides img');
//   if (index >= slides.length) {
//     currentIndex = 0;
//   } else if (index < 0) {
//     currentIndex = slides.length - 1;
//   } else {
//     currentIndex = index;
//   }
//   const offset = -currentIndex * 100;
//   document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
// }

// function autoScroll() {
//   showSlide(currentIndex + 1);
// }

// // Start the auto-scrolling
// setInterval(autoScroll, 3000); // Change image every 3 seconds

// // Initialize the first slide
// showSlide(currentIndex);