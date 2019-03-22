let menuKnop = document.getElementById('menutoggle');
let menuLabel = document.getElementById('togglelabel');
let moved = false;
console.log(moved);

function movelabel() {
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

menulabel.addEventListener('click', movelabel);
