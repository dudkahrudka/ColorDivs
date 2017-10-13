function makeDivs() {
    /*zisti kolko mam urobit diviek , cize ake cislo je napisane v okienku
    vytvor tolko diviek , kolko je to cislo*/
    var boxValue = document.getElementById("input-box").value;
    for(var i = 1; i <= boxValue; i++) {
        var div = document.createElement("div");
        var colors = ["#B66DE0", "#62fce5", "#f6ff7c"];
        var randomColor = colors[Math.floor(Math.random() * (3 - 0)) + 0];
        div.style.background = randomColor;
        div.classList.add("item-card");
        document.getElementById("main").appendChild(div);
    }
}

function removeAll() {
    var myNode = document.getElementById("main");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}




