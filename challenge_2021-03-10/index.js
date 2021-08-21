// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const mouseTarget = document.querySelector('h2');

const superEventHandler = {
    mouseEnter : function(){
        mouseTarget.style.color = colors[0];
        mouseTarget.innerHTML = "The mouse is here!"
    },
    mouseLeave : function() {
        mouseTarget.style.color = colors[1];
        mouseTarget.innerHTML = "The mouse is gone";
    },
    resize : function() {
        mouseTarget.style.color = colors[2];
        mouseTarget.innerHTML = "you just resized";
    },
    rightClick : function() {
        mouseTarget.style.color = colors[3];
        mouseTarget.innerHTML = "That was a right click";
    }

};

mouseTarget.addEventListener('mouseenter', superEventHandler.mouseEnter)
mouseTarget.addEventListener('mouseleave', superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightClick);