// setTimeout() => two parameter 1. function name, 2.millisecind

// one time animation

// var id = setTimeout(anim, 5000);

// function anim()
// {
//     var target = document.getElementById("test");

//     target.style.width = "500px";

//     console.log("Hello");

// }

// function stopAnimation()
// {
//     clearTimeout(id);
// }


var id = setTimeout(function(){ var target = document.getElementById("test");
target.style.height = "1000px";
}, 5000);
function stopAnimation()
{
    clearTimeout(id);
}