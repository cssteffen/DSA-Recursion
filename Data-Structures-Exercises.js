/* ==========================================
For each of these exercises, without using any code, 
you are expected to identify the following:

    What is the input to the program?
    What is the output of the program?
    What is the input to each recursive call?
    What is the output of each recursive call?
=============================================== */

/* ======== 1. Counting Sheep =================
Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number 
of sheep you have. The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.
*/

let input = 3;

const numberOfSheep = function(input) {
  //Base case
  if (input === 0) {
    return input + ": All sheep jumped over the fence";
  }
  // General case
  return "Another sheep jumps over the fence" + numberOfSheep(input - 1);
};
console.log(numberOfSheep(3));

/* ======== 2. Power Calculator =================
Write a  function called powerCalculator() that takes two parameters, 
an integer as a base, and another integer as an exponent. The function 
returns the value of the base raised to the power of the exponent. 
Use only exponents greater than or equal to 0 (positive numbers)

    powerCalculator(10,2) should return 100
    powerCalculator(10,-2) should return exponent should be >= 0

*/

const powerCalculator = function(base, exponent) {
  if (exponent < 0) {
    return "exponent should be >= 0";
  }
  // Base
  if (exponent === 1) {
    return base;
  }

  return base * powerCalculator(base, exponent - 1);
};

/* ======== 3. Reverse String =================
Write a a function that reverses a string. 
Take a string as input, reverse the string, 
and return the new string.
*/

const reverseString = function(string) {
  if (string.length === 1) {
    return string;
  }
  return string.slice(-1) + reverseString(string.slice(0, -1));
};

let string = "Hello";
console.log(reverseString(string));

/* ======== 4. nth Triangular Number =================
Calculate the nth triangular number. A triangular number 
counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing 
a triangle with n dots on a side, and is equal to the sum 
of the n natural numbers from 1 to n. This is the Triangular 
Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
                          *
            *           *    *
*     |   *   *  |   *    *    *  |

 1st       2nd           3rd             nth? 
*/

const nth = function(nDots) {
  if (nDots === 1) {
    return nDots;
  }
  return nDots + nth(nDots - 1);
};

console.log(nth(5));

/* ======== 5. String Splitter =================
Write a recursive function that splits a string based 
on a separator (similar to String.prototype.split). 
Don't use JS array's split function to solve this problem.

    Input: 02/20/2020
    Output: ["02", "20", "2020"]

*/
////// I'm not sure how to do this without split.
const stringSplitter = function(string) {
  result = string.split("/");
  return result;
};

console.log(stringSplitter("02/20/2020"));

/* ======== 6. Fibonacci =================
Write a recursive function that prints the Fibonacci 
sequence of a given number. The Fibonacci sequence is 
a series of numbers in which each number is the sum of 
the 2 preceding numbers. For example, the 7th Fibonacci 
number in a Fibonacci sequence is 13. The sequence looks 
as follows: 1, 1, 2, 3, 5, 8, 13.
*/

const fibonacci = function(num) {
  if (num <= 0) {
    return "Please enter a number greater than 0";
  }
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(7));

/* ======== 7. Factorial =================
Write a recursive function that finds the factorial 
of a given number. The factorial of a number can be 
found by multiplying that number by each number between 
itself and 1. For example, 
the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/

const factorial = function(num) {
  if (num === 1) {
    return num;
  }
  return num * factorial(num - 1);
};
console.log(factorial(5));

/* ======== 8. Find a way out of the maze =================
================ NOT CURRENTLY WORKING ====================
You have entered a Maze and need to find your way out of it. 
There are more than one possible paths through the Maze to 
the single exit point. Write a recursive function that will 
help you find a possible path though the maze.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
*/

const find_Path = function(maze) {
  //for (let x = 0; x < maze.length; x++) {
  //for (let y = 0; y < maze[x].length; y++) {
  //if (maze[x][y] === "e") {
  //console.log(maze[x][y]);
  //return maze[x][y];
  //}
  //}
  let x;
  let y;
  start= maze[0][0];
  //currentSpace = maze[x][y];
  //futureSpace = maze[x][y];

  visited = "x"
find_Path(maze,start);
  if (maze[x][y] === " ") {
      console.log("currentSpace", currentSpace)
      console.log("x", x)
      console.log("y", y)
    //let North = find_Path([(x = x + 1)], [(y = y)]);
    //let East = find_Path([(x = x)], [(y = y + 1)]);
    //let South = find_Path([(x = x - 1)], [(y = y)]);
    //let West = find_Path([(x = x)], [(y = y - 1)]);
    let North= maze[x+1][y];
    let East= maze[x][y+1];
    //let South= maze[x-1][y];
    let West= maze[x][y-1];

    find_Path(maze, North);
    find_Path(maze, East);
    //find_Path(maze, South);
    find_Path(maze, West);


    if (North === " ") {
        maze[x][y] = visited;
        x=x+1;
        //currentSpace = maze[x+1][y];
        console.log("U");
        find_Path(maze, maze[x][y]);
  
        if (East === " ") {
          maze[x][y] = visited;
          y=y+1
          //currentSpace = maze[x][y+1];
          console.log("R");
          find_Path(maze, maze[x][y]);
          return true;
        }
    
        /*if (South === " ") {
            maze[x][y] = visited;
            x = x-1;
            //currentSpace = maze[x-1][y];
            console.log("D");
            find_Path(maze, maze[x][y]);
            return true;
        }*/
    
        if (West === " ") {
            maze[x][y] = visited;
            y=y-1;
            //currentSpace = maze[1][y-1];
            console.log("L");
            find_Path(maze, maze[x][y]);
            return true;
        }
  }
  //if (futureSpace === " ") {
    //console.log("space available");
       // return true;
     // }
    return true;
    }
    //out of maze bounds
    //if (x < 0 || y < 0 || x >= maze[x].length || y >= maze[x].length) {
    //return false;
    //}
    if (
      (x < 0 && y < 0) ||
      (x >= maze.length && y < 0) ||
      (x < 0 && y > maze.length) ||
      (x >= maze.length && y > maze.length)
    ) {
      return false;
    }

    //blocked areas
    if (
      maze[x][y] === "[" ||
      maze[x][y] === "*" ||
      maze[x][y] === "]" ||
      maze[x][y] === "x"
    ) {
      return false;
    }
    
  //base code
  if (maze[x][y] === "e") {
    console.log("e");
    return true;
  }
};

let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"]
];
console.log(find_Path(mySmallMaze));

/* ======== 9. Find ALL the ways out of the maze =================
================ NOT CURRENTLY WORKING ===========================
Use the above maze and modify your solution so it finds All the 
possible exit paths through the Maze. To find all possible exit 
paths through the maze, think about how many places you can move 
at each turn. Possibly up, down, left or right?

Notice that this maze has 3 exits paths. Your recursive function 
should print all three of the paths with the proper directions. 
For example, given the maze above, the program should output the following:

Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD
*/

/* ======== 10. Anagrams =================
An anagram is any word or phrase that uses the letters 
of a given ("subject") word or phrase in another, rearranged 
order. Write a function that creates an anagram list, listing 
all the rearrangements of a given word. For example, if the 
user types "east", the program should list all 24 permutations, 
including "eats", "etas", "teas", and non-words like "tsae".

Hint: For your algorithm, you might want to think about a 
prefix and use that to create the new words. For example, 
given "east", use "e" as a prefix and place it in front of 
all 6 permutations of "ast" — "ast", "ats", "sat", "sta", 
"tas", and "tsa". This will give you the words "east", "eats", 
"esat", "esta", "etas", and "etsa". Continue this way until you 
find all the anagrams for "east". Then you can use "a" as a prefix 
and permute the remaining words "est". For "east", there should be 
24 words.
*/

const listAnagram = function(string) {
    for(let i=0; i < string.length; i++){
        for(let letter=string[i]){

        }
    }
};

/* ======== 11. Organization Chart =================
Write a recursive function that prints the following organization 
chart. Your output should be as shown below with proper indentation 
to show the hierarchy. You may store the org chart in an object and 
send that as an input to your program.
Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes
*/

/* ======== 12. Binary Representation =================
Write a recursive function that prints out the binary representation 
of a given number. For example, the program should take 3 as an input 
and print 11 as output, or 25 as an input and print 11001 as an output. 
Note that the binary representation of 0 should be 0.

*/