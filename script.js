/* document.getElementById("burger")
document.getElementsByClassName("name")
document.getElementsByTagName("li")
document.querySelector("")
document.querySelectorAll("") */

document.getElementById("burger").onclick = function(){
    openCloseMenu()
}

function openCloseMenu(){
    document.getElementById("menu").classList.toggle("open");
}