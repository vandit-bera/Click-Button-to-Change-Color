/* variable of button */
const btn = document.getElementById("button");
/* Add event listener on click */
btn.addEventListener("click", changeColor);

/* change color function to give colorto peticular tag */
function changeColor(){
    document.getElementById("canvas").style.backgroundColor = randColor();
}

/* Pick Random color in Hash Value */
const randColor = () => {
    let val = "1234567890ABCDEF";
    let hash = "#";

    /* for consider 6 value */
    for(let i=0; i<6; i++){
        hash = hash + val[Math.floor(Math.random() * 16)];
    }
    return hash;
}

