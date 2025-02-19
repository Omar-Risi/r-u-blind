const colors = [
    {base: "#ff0000", unique: "#cc0000"},
    {base: "#00ff00", unique: "#00cc00"},
    {base: "#0000ff", unique: "#0000cc"},
    {base: "#ffff00", unique: "#cccc00"},
    {base: "#ff00ff", unique: "#cc00cc"},
    {base: "#00ffff", unique: "#00cccc"},
    {base: "#ff8000", unique: "#cc6600"},
    {base: "#8000ff", unique: "#6600cc"},
    {base: "#ff0080", unique: "#cc0066"},
    {base: "#80ff00", unique: "#66cc00"},
    {base: "#0080ff", unique: "#0066cc"},
    {base: "#80ff80", unique: "#66cc66"},
    {base: "#ff8080", unique: "#cc6666"},
    {base: "#8080ff", unique: "#6666cc"},
    {base: "#ffff80", unique: "#cccc66"},
    {base: "#ff80ff", unique: "#cc66cc"},
    {base: "#80ffff", unique: "#66cccc"},
    {base: "#ffcc00", unique: "#cc9900"},
    {base: "#cc00ff", unique: "#9900cc"},
    {base: "#00ffcc", unique: "#00cc99"},
    {base: "#ccff00", unique: "#99cc00"},
    {base: "#00ccff", unique: "#0099cc"},
    {base: "#ff0066", unique: "#cc0052"},
    {base: "#66ff00", unique: "#52cc00"},
    {base: "#0066ff", unique: "#0052cc"}
];

const map = document.querySelector('#game-map');
const scoreElm = document.querySelector("#score");
let score=0;

let uniqueButton;

function lose() {
    const highscore = localStorage.getItem('high-score');
    if(score > highscore) {
        localStorage.setItem('high-score', score)
        alert('يا لعيب يا قناص')
        alert(`رقمك القياسي الجديد ${score} والقديم لما كنت بوت ${highscore}`)
    }
    

    window.location.reload();
}

function generateButton(isUnique) {
    const elm = document.createElement("button");
    elm.classList.add('game-button');
    if (isUnique) {
        elm.setAttribute('unique', "");
    }
    else {
        elm.onclick = () => { lose() }
    }

    return elm;
}

function win() {
    scoreElm.textContent = ++score;
}

function generateMap() {
    map.classList.add('pop')
    setTimeout( () => {map.classList.remove('pop')}, 505)
    const uniqueIndex = Math.floor(Math.random() * 9);
    const colorGroup = colors[Math.floor(Math.random() * colors.length)];
    map.innerHTML=""

    map.style.cssText = `--base:${colorGroup.base}; --unique: ${colorGroup.unique};`;
    for (let i = 0; i < 9; i++) {
        const button = generateButton((i == uniqueIndex));
        map.appendChild(button);
        if (i == uniqueIndex) button.onclick = () => {win(); generateMap()};
    }
}

function setUpGame() {
    
    if(localStorage.getItem('high-score')) 
        localStorage.setItem('high-score', 0)

    generateMap();
}


setUpGame()