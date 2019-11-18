var waterflow;

function openTap(state) {
    if (state=='open') {
    waterflow = setInterval(function(){ 
            var elem = document.getElementById("water");
            var waterStyle = getComputedStyle(document.querySelector("#water"));
            elem.style.top = parseInt(waterStyle.top, 10) + 1 + "px"
           console.log(waterStyle.top,elem.style.top)
           if(elem.style.top == '300px')
             clearInterval(waterflow);
        }, 100);
    }
    else if(state=='close'){
        clearInterval(waterflow);
    }
    else if(state=='fill'){
        location.reload();
     waterflow = setInterval(function(){ 
            }, 1000);
    }  
}