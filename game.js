let boxes = document.querySelectorAll(".box");
let turnO = true;
let draw = true;
let messageBox = document.querySelector(".winner_message");
let message = document.getElementById("message");
let newGame = document.querySelector(".new_game");
let restart = document.querySelector("#restart");
let winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];

boxes.forEach(box => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
        checkDraw();
    })
});

const checkwinner = () => {
    winner.forEach((position) => {
        if(boxes[position[0]].innerText!="" && boxes[position[1]].innerText!="" && boxes[position[2]].innerText!=""){
            if(boxes[position[0]].innerText==boxes[position[1]].innerText && boxes[position[1]].innerText==boxes[position[2]].innerText){
                message.innerText = `Congratulations! Winner is Player "${turnO===true?"X":"O"}"`;
                messageBox.style.display = "block";
                draw = false;    
            }
        }
    })
} ;

newGame.addEventListener("click", () => {
    messageBox.style.display = "none";
    restartGame();
});

const restartGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    draw = true;
};

restart.addEventListener("click",() => {
    restartGame();
});

const checkDraw = () => {
    if(boxes[0].innerText!="" && 
    boxes[1].innerText!="" && 
    boxes[2].innerText!="" && 
    boxes[3].innerText!="" && 
    boxes[4].innerText!="" && 
    boxes[5].innerText!="" && 
    boxes[6].innerText!="" && 
    boxes[7].innerText!="" && 
    boxes[8].innerText!="")
    {
        if(draw == true){
        message.innerText = `It's a Draw! Play Again`;
        messageBox.style.display = "block";
        }
    };
};