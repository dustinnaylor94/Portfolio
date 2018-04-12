var slideshowPics = ["Saabertooth.jpg", "sonett.jpg", "93aero.jpg", "95.jpg", "900airflow.jpg", "9000.jpg"];
var slideshowTitles = ["My Saab 900 SPG", "Saab Sonett II", "My wife's Saab 9-3 Aero", "Saab 9-5", "Saab 900 with Airflow kit", "Saab 9000"];
var counter = 0;
var start;

window.addEventListener("load", addListeners);

function addListeners(){
    document.getElementById("slideshow").src = "img/" + slideshowPics[0];
    document.getElementById("slideshowText").innerText = slideshowTitles[0];
    document.getElementById("back").addEventListener("click", slideshowBack );
    document.getElementById("next").addEventListener("click", slideshowNext);
    document.getElementById("play").addEventListener("click", slideshowPlay);
    document.getElementById("pause").addEventListener("click", slideshowPause);
}

function slideshowBack(){
    if(counter > 0) {
        counter--;
    }else {
        counter = 5;
    }

    document.getElementById("slideshow").src = "img/" + slideshowPics[counter];
    document.getElementById("slideshowText").innerText = slideshowTitles[counter];
}

function slideshowNext(){
    if(counter < 5) {
        counter++;
    }else {
        counter = 0;
    }

    document.getElementById("slideshow").src = "img/" + slideshowPics[counter];
    document.getElementById("slideshowText").innerText = slideshowTitles[counter];
}

function slideshowPlay() {
   start = setInterval(slideshowNext, 3000);
}

function slideshowPause() {
    clearInterval(start);
}