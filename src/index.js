const colors = [
    { base: "#6f6", unique: "#3a3" },
    { base: "#7f7", unique: "#4b4" },
    { base: "#8f8", unique: "#5c5" },
    { base: "#9f9", unique: "#6d6" },
    { base: "#afa", unique: "#7e7" },
    { base: "#bfb", unique: "#8f8" },
    { base: "#cfc", unique: "#9g9" },
    { base: "#dfd", unique: "#ah0" },
    { base: "#efe", unique: "#bi1" },
    { base: "#fff", unique: "#cj2" },
    { base: "#f6f", unique: "#d3d" },
    { base: "#e6e", unique: "#c2c" },
    { base: "#d6d", unique: "#b1b" },
    { base: "#c6c", unique: "#a0a" },
    { base: "#b6b", unique: "#9f9" },
    { base: "#a6a", unique: "#8e8" },
    { base: "#969", unique: "#7d7" },
    { base: "#868", unique: "#6c6" },
    { base: "#767", unique: "#5b5" },
    { base: "#666", unique: "#4a4" },
    { base: "#565", unique: "#393" },
    { base: "#464", unique: "#282" },
    { base: "#363", unique: "#171" },
    { base: "#262", unique: "#060" },
    { base: "#161", unique: "#050" },
    { base: "#060", unique: "#040" },
    { base: "#050", unique: "#030" },
    { base: "#040", unique: "#020" },
    { base: "#030", unique: "#010" },
    { base: "#020", unique: "#000" },
    { base: "#010", unique: "#fff" },
    { base: "#000", unique: "#eee" },
    { base: "#111", unique: "#ddd" },
    { base: "#222", unique: "#ccc" },
    { base: "#333", unique: "#bbb" },
    { base: "#444", unique: "#aaa" },
    { base: "#555", unique: "#999" },
    { base: "#666", unique: "#888" },
    { base: "#777", unique: "#777" },
    { base: "#888", unique: "#666" }
];

const map = document.querySelector('#game-map');
const scoreElm = document.querySelector("#score");
let score=0;

let uniqueButton;

function lose() {
    alert("BOT delete game")
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


generateMap();

