function generateColors() {
    const colors = [];
    
    for (let i = 0; i < 150; i++) {
        let lightnessBase, lightnessUnique;
        
        if (i < 75) {
            lightnessBase = 75; // High contrast
            lightnessUnique = 65;
        } else if (i < 125) {
            lightnessBase = 55; // Medium contrast
            lightnessUnique = 50;
        } else {
            lightnessBase = 39; // Low contrast
            lightnessUnique = 35;
        }

        const hue = Math.random() * 360; // Random hue
        const base = `hsl(${hue}, 80%, ${lightnessBase}%)`;
        const unique = `hsl(${hue}, 80%, ${lightnessUnique}%)`;

        colors.push({ base, unique });
    }

    return colors;
}

const colors = generateColors();

const map = document.querySelector('#game-map');
const scoreElm = document.querySelector("#score");
let score = 0;

let uniqueButton;

function lose() {
    const highscore = localStorage.getItem('high-score');
    if (score > highscore) {
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
    setTimeout(() => { map.classList.remove('pop') }, 505)
    const uniqueIndex = Math.floor(Math.random() * 9);
    const colorGroup = colors[Math.floor(Math.random() * colors.length)];
    map.innerHTML = ""

    map.style.cssText = `--base: ${colorGroup.base}; --unique: ${colorGroup.unique}; `;
    for (let i = 0; i < 9; i++) {
        const button = generateButton((i == uniqueIndex));
        map.appendChild(button);
        if (i == uniqueIndex) button.onclick = () => { win(); generateMap() };
    }
}

function setUpGame() {

    if (!localStorage.getItem('high-score'))
        localStorage.setItem('high-score', 0)

    generateMap();
}


setUpGame()