let panel = document.querySelectorAll(".panel")
panel.forEach(panel=>{
  panel.addEventListener("click",(e)=>{
    removing();
    panel.classList.add("active")
  })
})

function removing(){
  panel.forEach(panel=>{
    panel.classList.remove("active");
  })
}
