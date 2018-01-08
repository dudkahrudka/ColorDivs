var sliderH = document.getElementById("h-range");
var outputH = document.getElementById("h-value");
outputH.innerHTML = sliderH.value;

sliderH.oninput = function() {
  outputH.innerHTML = this.value;
}

var sliderS = document.getElementById("s-range");
var outputS = document.getElementById("s-value");
outputS.innerHTML = sliderS.value;

sliderS.oninput = function() {
  outputS.innerHTML = this.value;
}

var sliderL = document.getElementById("l-range");
var outputL = document.getElementById("l-value");
outputL.innerHTML = sliderL.value;

sliderL.oninput = function() {
  outputL.innerHTML = this.value;
}

function makeDivs() {
    var boxValue = document.getElementById("input-box").value;

    var h = parseInt(document.getElementById("h-range").value) 
    var s = parseInt(document.getElementById("s-range").value) 
    var l = parseInt(document.getElementById("l-range").value) 

    
    var stepH = parseInt(document.getElementById("shade-box-h").value)
    var stepS = parseInt(document.getElementById("shade-box-s").value)
    var stepL = parseInt(document.getElementById("shade-box-l").value) 

    

    for(var i = 1; i <= boxValue; i++) {
        var div = document.createElement("div");

        div.style.background = "hsl(" + h + ", " + s + "%, " + l + "%)";


        div.classList.add("item-card");
        document.getElementById("main").appendChild(div);

        h += parseInt(stepH)
        
      
        s += parseInt(stepS)
        
       
        l += parseInt(stepL)
        
        
    }
}

function removeAll() {
    var myNode = document.getElementById("main");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}




