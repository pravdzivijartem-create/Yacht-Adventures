const open1 = document.getElementById("open1");
const close1 = document.getElementById("close1");
const modal = document.getElementById("modal");

open1.addEventListener("click", ()=>{
    modal.style.display = "block";
})

close1.addEventListener("click", ()=>{
    modal.style.display = "none";
})

