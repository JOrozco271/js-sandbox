let colorSelect = document.getElementById("colorSelect");
colorSelect.onchange = function () {
    console.log(colorSelect.value);
    document.getElementById("colorBox").style = `background-color: ${colorSelect.value};`;
}
function toggleDarkMode(){
    alert("Toggle ME")
}