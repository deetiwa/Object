// window object => The window object represents an open window in a browser.

let myWindow;

function openWin()        // function make for window open 
 {
  myWindow = window.open("", "myWindow", "width=400,height=200");
}

function closeWin()       // function make for window close
 {
  if (myWindow) 
  {
    myWindow.close();
  }
}

function checkWin()     // function make for check window oper or nty
 {
let text = "";

if (!myWindow)
 {
  text = "It has never been opened!";
} 
else
 {
  if (myWindow.closed)
   { 
    text = "It is closed.";
  } 
  else
   {
    text = "It is open.";
  }
}
document.getElementById("demo").innerHTML = text;
}