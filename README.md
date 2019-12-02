Objective: By the end of this checkpoint, you can create algorithms using recursion.

At the end of this checkpoint, you’ll complete 1 assignment:

    Complete a set of drills practicing recursion.

Key Terms

    Recursion
    Recursive case
    Base case
    Forward phase
    Backward phase

Recursion

In computer science, recursion is a method of solving problems that involves a function calling itself. In each call, it breaks down the problem into smaller and smaller subproblems until you get to a problem small enough that it can be solved trivially.

You can think of recursion as the process of defining a problem (or the solution to a problem) in terms of (a simpler version of) itself. Recursion may be applied to several data structures and algorithms to solve problems, but recursion itself is not a data structure or an algorithm, it is a concept.

A recursive algorithm is broken down into 2 parts:

    Base case (i.e., when to stop)
    General, or recursive case (i.e., function calling itself)

The recursive case is where we use the same algorithm to solve a simpler version of the problem. This is where the method calls itself with the same number of parameters to solve a smaller version of the problem.

The base case is the solution to the "simplest" possible problem. The base case does not require calling itself or any recursive case.

Let's walk through an example to make this concept clear. Let's write an algorithm that calculates the sum of all the numbers in an array. You can think of solving this problem using the following steps:

    Have a running total
    Go through the list and add each number to the running total until you reach the end of the list

To implement this iteratively, you would simply use a loop to go through each number in the list and add them. Let's see how this can be implemented recursively. The following is a recursive solution to this problem.

const sumOf = function(list) {
// Base case
if (list.length === 1) {
return list[0];
}
// General case
return list[0] + sumOf(list.slice(1));

}

let lst = [2,4,6,8,10];
console.log(sumOf(lst));

    In the above function, the statement within the if statement is its base case. It checks to see if the list has only 1 item. The sum of 1 item in a list is very trivial, it is the item itself. Therefore, we can just return the item and the function call can end.
    Notice that after the base case, the function calls itself. This is the recursive case. Also notice that when it calls itself, its argument to the function call is a smaller version of the list. When sumOf was initially called, we sent the list [2,4,6,8,10]. But within the function, when it calls itself, it is [4,6,8,10]. Each time the function calls itself, the list has 1 less item (.slice(1)).
    Also notice that before the function calls itself, it is extracting the 1st item in the list.

The picture below explains each of the recursive calls that are happening within the sumOf function.

Recursive sum

As you can see there is a series of recursive calls (the function calling itself). Each time the function calls itself, we are solving a smaller problem, until we reach the point where the problem cannot get any smaller.

In this case, we consider 1 item from the list in each call, and we make the list shorter until we reach the point where we have only 1 item in the list. This is called the forward phase of recursion. This is where a call to the function spins off another function call (think about it as a clone of itself), and that spins off another call and so on until the base case is reached.

Recursive sum-return

When we reach the point where the problem is as simple as it can get (the base case), we begin to piece together the solutions of each of the small problems until the initial problem is solved. When a function call satisfies the base case, the call returns control (and any return value) to the previous function that called it. At this point, the previous function call that has been waiting wakes up and resumes its work, and then returns control back to the function that called it. This continues until control is returned to the function that was called initially (the call that started all the other calls). This function then returns the solution to the problem (accumulated from the returns of all the other function calls). This is called the backward phase of recursion. The main function called does not return until all recursive calls are completed.
Assignment

Create a GitHub repo called "DSA-Recursion". Save all this work in the repo and submit the repo via the submission box at the end of this lesson.

Requirements

You must use recursion to solve these problems.

It's possible to solve them non-recursively and you'll probably be tempted to use tools that you already understand. However, that defeats the purpose of this exercise, which is to become more comfortable using recursion.

Tips and resources

For each of these exercises, without using any code, you are expected to identify the following:

    What is the input to the program?
    What is the output of the program?
    What is the input to each recursive call?
    What is the output of each recursive call?

Start each problem by understanding the problem and coming up with some sample input and output. In some of the drills we have provided sample inputs and outputs for your convenience.

1. Counting Sheep

Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

    Input: 3
    Output:
        3: Another sheep jumps over the fence
        2: Another sheep jumps over the fence
        1: Another sheep jumps over the fence
        All sheep jumped over the fence

2. Power Calculator

Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

    powerCalculator(10,2) should return 100
    powerCalculator(10,-2) should return exponent should be >= 0

3. Reverse String

Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

4. nth Triangular Number

Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

                          *
            *           *    *

-     |   *   *  |   *    *    *  |

1st 2nd 3rd nth?

5. String Splitter

Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

    Input: 02/20/2020
    Output: ["02", "20", "2020"]

6. Fibonacci

Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

7. Factorial

Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 _ 4 _ 3 _ 2 _ 1 = 120.

8. Find a way out of the maze

You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

You can use the following mazes to test your program.

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

The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be RRDDLLDDRRRRRR

9. Find ALL the ways out of the maze

Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?

Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:

Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD

10. Anagrams

An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

11. Organization Chart

Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

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

12. Binary Representation

Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.
Checkpoint

Submit your ideas or a link to your work here and use it as a conversation starter during your next mentor session.
This checkpoint will not be graded, but is still required.
**bold** _italic_ `code` > quote - bullet list
Preview
Report a typo or other issue
