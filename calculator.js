var buttons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "x", "c", "0", "=", "/", "squared", "1/2", "areaButton"];
var clicked;
window.addEventListener("load", addListeners);

function addListeners() {
    for( var i=0; i<buttons.length; i++) {
        document.getElementById(buttons[i]).addEventListener("click", addValue);
        document.getElementById(buttons[i]).onfocus = function() { event.target.style = "outline: 1px solid #ed6240;" }
        document.getElementById(buttons[i]).onblur = function() { event.target.style = "outline: none;" }
        document.getElementById(buttons[i]).onmouseover = function() { event.target.style = "background-color: rgba(0,0,0,0)" }
        document.getElementById(buttons[i]).onmouseout = function() { event.target.style = "background-color: rgba(227,208,173, .8)" }
    }
    document.getElementById("c").addEventListener("click", function() { document.getElementById("input").value = "" })

}

function addValue(){
    document.getElementById("input").value += event.target.value;
}