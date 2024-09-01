let btn9=document.querySelectorAll(".btn9");
let result=document.querySelector(".result");
let resultContainer=document.querySelector(".resultContainer");
let resetGame=document.querySelectorAll(".resetGame");
let trunO=true;
let winPatans= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
];
let btnclick=0;
resultContainer.style.display="none";


resetGame.forEach(function(gameReset)
{
    gameReset.addEventListener("click",newGame);
}

)


btn9.forEach(function(btn)
{
    btn.addEventListener("click",function()
            {
                if(trunO)
                {
                    btn.innerText="O";
                    btn.style.color="#90E0EF";
                    trunO=false;
                }
                else
                {
                    btn.innerText="X";
                    btn.style.color="white";
                    trunO=true; 
                }

                btn.disabled=true;
                checkWinner();
                
                checkNoOneWin();
            })         
})


// All Functions

function checkWinner(){
    winPatans.forEach(function(win){

       let pos1 =btn9[win[0]].innerText;
       let pos2 =btn9[win[1]].innerText;
       let pos3 =btn9[win[2]].innerText;

      if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3)
        {
            
            winerName(pos1);
            btn9.forEach((btn)=> btn.disabled=true);
            btnclick=0;
        }
      }
        
    })
}

function checkNoOneWin(){
    btnclick++;
        if(btnclick == 9)
        {
            resultContainer.style.display="";
            result.innerText="No One Win, Play again!";
        }
}


function winerName(name){

    resultContainer.style.display="";
    result.innerText=`Winner is ${name}`;
}

function newGame()
{
    btn9.forEach((btn)=> {
        btn.disabled=false;
        btn.innerText="";
                        });

    btnclick=0;
    resultContainer.style.display="none";
    trunO=true;

}

