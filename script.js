let menu = document.querySelector(".menu")
let links = document.querySelector(".links")

menu.onclick = function(){
    menu.classList.toggle("active")
    links.classList.toggle("active")
}

