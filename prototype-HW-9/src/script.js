const detailedImage = document.querySelector(".detailedContainer--image");
const detailedTitle = document.querySelector(".detailedContainer--title");

const boxesElements = document.querySelectorAll(".box")
function setDetails(boxElement){

    detailedImage.alt = boxElement.getAttribute("data-alt-text")
    detailedTitle.innerHTML = boxElement.getAttribute("data-detailed-text")
}

for(let  i = 0; i < boxesElements.length; i++) {
    boxesElements[i].addEventListener("click", function(){
        setDetails(boxesElements[i]);
    })
}

// detailedImage.src = "../images/corgi.jpg";   // img = src
// detailedTitle.innerHTML = "corgi ..."
