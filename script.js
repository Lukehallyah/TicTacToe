//Why am I making this so difficult?
//Because I don't understand the goal
//The Goal is to make a workable game
//Create a gameboard - Check
//create 1 through 9 and think through the logic
//create 2 player objects

let main = document.querySelector('main');
let container= document.createElement('div');
let isFormUp = false;



let form = document.querySelector('form');
let player1Input = document.querySelector("#player1Input");
let player2Input = document.querySelector('#player2Input');
main.removeChild(form);


let gridBlock =[];

//PLAYER LOGIC

function makePlayer(symbol){
    let inventory = [];
    return{symbol, inventory}
}

let player1= makePlayer("X");
let player2 = makePlayer("O");

function inputForm(){
    player1.name=player1Input.value;
    player2.name=player2Input.value;
    player1Input.value="";
    player2Input.value="";

    main.removeChild(form);
    //Wow this actually worked, disappeared

    let versus = document.createElement('div');
    versus.textContent= player1.name+" "+"vs"+" "+player2.name;
    main.appendChild(versus);
    main.style.display='flex';
    main.style.flexDirection='column';
}


//WINNING NUMBERS/COMBINATIONS
let winningNumber = [
    [1,2,3],
    [1,4,7], 
    [1,5,9], 
    [2,5,8],
    [3,5,7],
    [3,6,9],
    [4,5,6],
    [7,8,9]
]


let gameover=false;

//GAMEBOARD LOGIC
let gameboard = ()=>{

    //CONTAINER AND BLOCK STYLE
    
    if(container){
        container.classList.add('container');
    }

    main.appendChild(container);


    let currentPlayer = player1;

    
    //CREATING THE BLOCKS/BEHAVIOR
    for(let i=1; i<=9; i++){

        let number = document.createElement('div');
        
            number.classList.add(`${i}`);
            number.style.border=" 1px solid black";
            number.style.display='flex';
            number.style.justifyContent='center';
            number.style.alignItems='center';
            number.style.fontSize='3rem';
            container.appendChild(number);
            

            number.addEventListener('click',()=>{
                if(gameover) return;

                if(!number.textContent){
                currentPlayer.inventory.push(i);
                gridBlock.push(number);

                number.textContent=currentPlayer.symbol;
                }

                let gameWin=false;
                for( let number of winningNumber){
                    if(number.every(num=>currentPlayer.inventory.includes(num))){
                        alert("You Win!")
                        gameover=true;
                        gameWin=true;
                    }
                }

                 if(gridBlock.length===9 && !gameWin){
                    //'gameWin' means true, !gameWin means false or 'not gameWin'
                    gameover=true;
                    alert("It's a tie!")
                }
                //EXPLAIN - for every 'array' of winningNumber
                //check the currentPlayer inventory and see if it includes that number set
                //if it does, return it and compare it to the 'arrays' of winningNumber
                //if it checks out, alert "You Win"
                //gameover becomes true
                //NOTICE if(gameover) return; at the top of the click event handler

                //gameover was declared in global scope, once a player wins it's gameover
                if(currentPlayer===player1){
                    currentPlayer=player2;
                }
                else {currentPlayer=player1};

              
        })
        //Number only accessible inside the for loop
    }

      
    
    let beginGame = document.createElement('div');
        beginGame.classList.add('beginGame');
    let startButton = document.createElement('button');
        startButton.textContent='Start';
        startButton.addEventListener('click', ()=>{
            main.appendChild(form);
            isFormUp=true;

            if(isFormUp=true){
                beginGame.removeChild(startButton);
            }
            
        });
    let resetButton = document.createElement('button');
        resetButton.textContent='Reset';
        resetButton.addEventListener('click', ()=>{
            player1.inventory.length=0;
            player2.inventory.length=0;

            for(let block of gridBlock){
                 block.textContent='';
                }

            gridBlock=[];
            gameover=false;
            currentPlayer=player1;
           
        })
    beginGame.appendChild(startButton);
    beginGame.appendChild(resetButton);
    main.appendChild(beginGame);
}


console.log(gameboard());

//let startButton = document.querySelector('.startButton');
//let resetButton =document.querySelector('.resetButton');



