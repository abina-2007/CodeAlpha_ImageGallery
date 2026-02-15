let currentIndex = 0;

const images = document.querySelectorAll(".gallery img");

function openLightbox(index){
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[index].src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction){
    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterSelection(category){
    let elements = document.getElementsByClassName("image");

    for(let i=0; i<elements.length; i++){
        if(category === "all" || elements[i].classList.contains(category)){
            elements[i].style.display = "block";
        }else{
            elements[i].style.display = "none";
        }
    }
}