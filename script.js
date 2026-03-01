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

let gameboard = ()=>{

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

    

    for(let i=1; i<=9; i++){
        let number = document.createElement('div');
        number.classList.add(`${i}`);
        number.style.border=" 1px solid black";
        container.appendChild(number);
        gridBlock.push(number);
    }
}