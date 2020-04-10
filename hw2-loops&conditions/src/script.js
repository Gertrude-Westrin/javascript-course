//Question1
//let number1 = +prompt("Give me a number");
//let number2 = +prompt("Give me your second number")
//let operation = prompt("What would you like to do with the two number? (+, -, *, or /)");
// request two numbers from a user and ask them what they want to do with the two numbers, (+, -, *, or /)?
//switch (operation) { //use switch statement to set conditions for the different possible operation in order to do the calculation.
    //case "+":
        //result = number1 + number2;
        //break;
    //case "-":
        //result = number1 - number2;
        //break;
    //case "*":
        //result = number1 * number2;
        //break;
    //case "/":
        //result = number1 / number2;
        //break;  
//}
//determined the result by based on the two numbers and oeration provided by the user.
//console.log(`${number1} ${operation} ${number2} = ${result}`);


//Question2 
//this one was quite tricky, got help from a friend so I sort of understand but not really would be good to go through it in class.
//let calculation = +prompt("Give me a number"); //request number from user
//let i; //determine the index using the for loop.
//for (i = calculation -1; i >= 1; i--) {
    //calculation = calculation * i;
//}//index defined 
//console.log(calculation); //display answer


//Question3
let sheep = prompt("How many sheep would you like?");//request user for number of sheep
let i; //set index
if (sheep >= 1) { 
    for (i = 1; i <= sheep; i ++) {
    document.write(`<p>${i} Sheep</p>`);
}   
} else { 
    alert(`Ooops! That doesn´t look right`);   
}
//using the if condition determine what the output to user will be. Within the if condition use the for loop to define the non-negative integer.

//Question4 
//let answer; //set answer condition and keep showing prompt untill user inputs correct answer
//do {
    //answer = prompt ("What is 2 + 2 * 2?"); //request user to make the calculation
//} while (answer != 6); //answer condition
//alert(`Good Job! 6 is the correct answer`); //show this message after having a correct answer


