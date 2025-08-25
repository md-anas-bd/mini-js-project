const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const getHexaNUmber = function gethex() {
    let hexaColor= "#";
    for (let i = 0; i < 6; i++) {
        const randomNumber= Math.floor(Math.random()*hexCharacters.length);
        hexaColor+=hexCharacters[randomNumber];
    }
    return hexaColor;
}

const button = document.querySelector(`.btn`);
button.addEventListener("click",function () {
    const newcolor = getHexaNUmber();
    button.style.backgroundColor = newcolor;
    document.getElementById('colorName').textContent = `Current color: ${newcolor}`; 
    
})
