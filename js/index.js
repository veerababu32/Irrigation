let headerRightSection = document.getElementById("headerRightSection");
let barIcon = document.getElementById("barIcon");
let crossIcon = document.getElementById("crossIcon");

function hamburgerSection(){
    crossIcon.classList.toggle("disable");
    barIcon.classList.toggle("disable");
    headerRightSection.classList.toggle("header___right-section");
    headerRightSection.classList.toggle("right-section");
}