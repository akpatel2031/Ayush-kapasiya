

let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newBtn = document.querySelector('#new-btn');
let winMsg = document.querySelector('#win-msg');
let msgContainer = document.querySelector('.msg-container');
let Container = document.querySelector('.container');

let count = 0;
let player = true; // X, O

const winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], /*diagonal from top left to bottom right*/
    [2, 4, 6]
];

const resetGame = () => {
    player = true;
    count = 0;
    enabledBtn();
    msgContainer.classList.add('hide');
    Container.classList.remove('hide2');
}

const boxesDisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) => {
    winMsg.innerHTML = `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove('hide');
    Container.classList.add('hide2');
    boxesDisabled();
}

const showDraw = () => {
    winMsg.innerHTML = "The game is a draw!";
    msgContainer.classList.remove('hide');
    Container.classList.add('hide2');
    boxesDisabled();
}

const checkWinner = () => {
    for (let pattern of winnerPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return true;
            }
        }
    }
    return false;
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.textContent === '' && !checkWinner()) {
            if (player) {
                box.innerHTML = "X";
                box.style.color = " #962E2A";
                player = false;
            } else {
                box.innerHTML = "O";
                box.style.color = "#1995AD";
                player = true;
            }
            box.disabled = true;
            count++;

            let isWin = checkWinner();
            if (count === 9  || isWin) {
                if (!isWin) {
                    showDraw();
                }
            }
        }
    });
});

resetBtn.addEventListener('click', resetGame);
newBtn.addEventListener('click', resetGame);
