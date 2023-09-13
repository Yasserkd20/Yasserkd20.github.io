window.onload=function(){
    //
    const display=document.getElementById("display");
    //
    document.getElementById("ac").addEventListener("click",function() { display.value="";});
    document.getElementById("de").addEventListener("click",
    function() { 
        var a=display.value.toString();
        a=a.slice(0,-1);
        display.value=a;
    });
    //
    var tab=document.getElementsByName("btn");
    for(var i=0;i<16;i++){
        tab[i].addEventListener("click",function() { display.value+=this.value;});
    }
    //
    const equal=document.getElementById("equal");
    equal.addEventListener("click",function() { display.value=eval(display.value);});
    
    //
}
