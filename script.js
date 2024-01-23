let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn=true;// playerX,palyerO
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turn=true;
    enableBox();
    msgContainer.classList.remove("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
        //box.innerText="siddu";
        if(turn===true){
            box.innerText="O";
            turn=false;
        }else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        checkwinner();

    });    
});
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;

    }

};
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }

};
const showWinner=(winner)=>{
    msgContainer.innerText='Congratulation your the winner'+console.dir(showWinner);
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkwinner=()=>{
    for(let patten of winPattern){
       
        let pos1val=boxes[patten[0]].innerText;
        let pos2val=boxes[patten[1]].innerText;
        let pos3val=boxes[patten[2]].innerText;
        if(pos1val !=""&&pos2val!="" &&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner");
                showWinner();

            }

        }

        
    }
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
