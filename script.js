//Why am I making this so difficult?
//Because I don't understand the goal
//The Goal is to make a workable game
//Create a gameboard - Check
//create 1 through 9 and think through the logic
//create 2 player objects

let main = document.querySelector('main');
main.style.width='100vw';
main.style.height='100vh'


let gridBlock =[];

//PLAYER LOGIC

function makePlayer(name, symbol){
    let inventory = [];
    return{name, symbol, inventory}
}

let player1= makePlayer("Luke", "X");
let player2 = makePlayer("Jenelyn", "O");


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
    let container= document.createElement('div');
    
    if(container){
        container.style.width='75vh';
        container.style.height='75vh';
        container.style.border="2px solid black";
        container.style.display='grid';
        container.style.gridTemplateColumns='1fr 1fr 1fr';
        container.style.gridTemplateRows='1fr 1fr 1fr';
        
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
            gridBlock.push(number);


            number.addEventListener('click',()=>{
                if(gameover) return;

                if(!number.textContent){
                currentPlayer.inventory.push(i);
                number.textContent=currentPlayer.symbol;
                }

               
                for( let number of winningNumber){
                    if(number.every(num=>currentPlayer.inventory.includes(num))){
                        alert("You Win!")
                        gameover=true;
                    }
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

       
}


//Whoever clicks the 'number', that div is removed from 'gridBlock' and either placed 
//into player1.inventory, or player2.inventory. It happens on button click.

function gameRules(){
    if(player1){
        
    }
}