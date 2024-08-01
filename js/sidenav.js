
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
