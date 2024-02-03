let current = "normal"

function getRandomColour(){
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    var randomColor = (1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1);
    return '#' + randomColor;
}

alterBackground = () => {

    if (current == "crazy"){
        clearInterval(colorChangeInterval);
    
        // Change background color for all <p> elements
        var paragraphs = document.getElementsByTagName("p");
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.backgroundColor = "#FFFFFF";
        }
    
        // Change background color for all <h1> elements (assuming they have the same class)
        var headings = document.getElementsByTagName("h1");
        for (var i = 0; i < headings.length; i++) {
            headings[i].style.backgroundColor = "#FFFFFF";
        }
    }

    current = "normal"
    var colour = getRandomColour()
    document.body.style.backgroundColor = colour;
    document.getElementById("text").innerHTML = colour.toUpperCase();
}

alterEverything = () => {
    current = "crazy"

    var colour = getRandomColour();
    document.body.style.backgroundColor = colour;
    document.getElementById("text").innerHTML = colour.toUpperCase();

    let all_elements = document.body.getElementsByTagName("*");

    for (let i = 0; i < all_elements.length; i++) {
        if (!isDescendant(all_elements[i], document.querySelector('.buttons-container'))) {
            all_elements[i].style.backgroundColor = getRandomColour();
        }
    }

}


function copyText() {
    var text = document.getElementById('text').textContent; 
    navigator.clipboard.writeText(text); 
}

function isDescendant(element, container) {
    while (element !== null) {
        if (element === container) {
            return true;
        }
        element = element.parentElement;
    }
    return false;
}

G0Cr8Zee = () => colorChangeInterval = setInterval(alterEverything, 1);