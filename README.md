theOdinProject Steps

Wants me to store the gameboard as an array inside of a gameboard object.

Players also going to be stored in objects.

An object to control the flow of the game itself??

PsuedoCode



GAMEBOARD

Create a gameboard container that holds nine distinct boxes that can be clicked and Either X or O added
Put these boxes in an array so that players can take them and add characteristics to it.

Create two player objects. 
Each player is either X or O. 
These Objects will have an empty name attribute that will take input from a form. 
These player objects will be able to assign a box either X or O. Also each player will be able to 'claim' a square on the 
board.
Whichever player gets a line of 3 first wins, if not then both players draw

Board looks like this
123
456
789

Rules are determined off of these numbers.
Each box is assigned one of these numbers. 

Each of these boxes with the class of one of these numbers is added to either player 
and removed from the array in which they are stored.



Players

Create two player objects.
Each of these objects has to be able to 'hold'(ie choose) the squares.
When each square is chosen it is removed from the array and placed in the player inventory.
Check each player inventory and when the parameters are reached, that player wins.
When the array is empty and none of the parameters have been met => draw.

