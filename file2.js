//setInterval()

setInterval(anim, 4000);

var a =0;

function anim()
{
    a = a+10;

    var target = document.getElementById("test");

    target.style.marginLeft = a + 'px';
    
    //console.log("Hello")

    console.log(a);
}

// ClearInterval

var b = 0;

var id =setInterval(anim2, 500);

function anim2()
{
    b = b + 10;

    if(b == 200)
    {
        clearInterval(id)
    }
    else{
        
        var target = document.getElementById("test");

        target.style.marginLeft = b + 'px';
        
        //console.log("Hello")
    
        console.log(a);
    }
}
