console.log("TicTacToe game")
    //let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3")
    //let gameover = new Audio("gameover.mp3")
let chance = "X"
let isgameOver = false;

//function to change the turn
const changeTurn = () => {
    return chance === "X" ? "0" : "X"
}

//function to check fir a win
const checkWin = () => {
    let boxtext1 = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext1[e[0]].innerText === boxtext1[e[1]].innerText) && (boxtext1[e[2]].innerText === boxtext1[e[1]].innerText) && (boxtext1[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext1[e[0]].innerText + " Won"
            isgameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("gameBox");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = chance;
            chance = changeTurn();
            turn.play();
            checkWin();
            if (!isgameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn For " + chance;
            }
        }
    })
})

//reset button function
reset.addEventListener('click', () => {
    let boxtext2 = document.querySelectorAll('.boxtext');
    Array.from(boxtext2).forEach(element => {
        element.innerText = "";
    });
    chance = "X";
    isgameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + chance;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})