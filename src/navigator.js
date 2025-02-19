const menuScreen = document.querySelector('#menu-screen');
const gameScreen = document.querySelector('#game-screen');

const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button")

let currentScene = menuScreen;


function switchScene(newScene) {

    if (newScene == gameScreen)
        gameScreen.style.cssText = "background-image: url('./src/ancelotti.jpeg');"

    currentScene.setAttribute('hidden', '');
    newScene.removeAttribute('hidden');
    currentScene = newScene;
}

function setUp() {
    gameScreen.setAttribute('hidden', '')
}

setUp()

let time = 60;
startButton.onclick = () => {
    switchScene(gameScreen);

    let interval = setInterval(() => {
        document.querySelector("#time-left").textContent = --time + "s"


        if (time == 0) {
            lose("Out of time!")
            clearInterval(interval)
        }
    }, 1000)
}

resetButton.onclick = () => { window.location.reload() }