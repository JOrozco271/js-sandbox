let colorSelect = document.getElementById("colorSelect");
colorSelect.onchange = function () {
    console.log(colorSelect.value);
    document.getElementById("colorBox").style = `background-color: ${colorSelect.value};`;
}
function toggleDarkMode(){
    let content = document.getElementById("content")
    content.classList.toggle("dark-mode")
    //alert("Toggle ME")
}
function teleportButton(){
    console.log("teleport");
    let runaway = document.getElementById("runaway");
    runaway.innerText = "Dont Touch ME!";
}