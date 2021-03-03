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
function teleportButton(distance){
    let runaway = document.getElementById("runaway");
    console.log(runaway.style.top), " - ", runaway.style.left
    if (runaway.style.top == 0 && runaway.style.left == 0) {
        runaway.style.top = `${distance}px`;
    }else if (runaway.style.top == `${distance}px` && runaway.style.left == 0) {
        runaway.style.left = `${distance}px`;
    }else if (runaway.style.top == `${distance}px` && runaway.style.left == `${distance}px`) {
        runaway.style.top = 0;
    }else if (runaway.style.top == "0px" && runaway.style.left == `${distance}px`) {
        runaway.style.left = null;
        runaway.style.top = null;
    }
    runaway.innerText = "Dont Touch ME!";
}
