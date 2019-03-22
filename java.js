let menuKnop = document.getElementById('menuToggle');
let menuLabel = document.getElementById('toggleLabel');
let moved = false;
console.log(moved);


function moveLabel() {
    if (moved == false) {
        console.log(moved);
        menuLabel.style.marginLeft = "3.5em";
        moved = true;
    } else if (moved == true) {
        console.log(moved);
        menuLabel.style.marginLeft = "0";
        moved = false;
    }
}

menuLabel.addEventListener('click', moveLabel);
