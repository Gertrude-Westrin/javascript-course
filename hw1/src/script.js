
//This is my code for question 1 of the Homework.

//let number = prompt ("what is the length of one square side?") //ask user for length of a square side
//let result = (number * 4); //to find perimeter multiply response by 4
//console.log(result); //perimeter of the square


//This is my code for question 2 of the Homework.

//let number = prompt ("Which year were you born?"); //ask user for their year of birth
//const currentYear = 2020; //store current year as constant
//let result = (currentYear - number); //calculate users age by subtracting users input (number) from current year
//console.log(result); //users age


//This is my code for question 3 of the Homework.

//let distance = prompt ("what is the distance in Kilometres between your two favourite cities?");//ask user for distance between two cities in kilometres
//let time = prompt ("How many minutes would you like it to take to travel between the two cities?"); //ask user desired travel time in minutes 
//let result = (distance / time); //calculate speed using the formular speed equals distance over time
//alert(`Wow! to get there on time drive at ${result} km/hr`); //speed in km/hr


//This is my code for question 4 of the Homework.

//let usd = prompt ("Enter dollar (USD) amount you want to change to EUR?"); //ask user for dollar amount
//const eur = 0.90 //define exchage rate
//let result = (usd * eur); //convert currency by multiplying usd and euro
//console.log(result); //result:USD converted to Euro 


//This is my code for question 5 of the Homework. //am really not sure about this one
//let a = prompt ("what is the value of a?"); //ask user for value of a in order to solve the equation a * X + b = 0
//let b = prompt ("What is the value for b?"); //ask user for value of b in order to solve the equation a * X + b = 0
//let x = (0 - b / a); //find x by using a simple algebra (X = 0 - b / a)
//console.log(x); //value of X


//This is my code for question 6 of the Homework.

let currentTime = prompt ("What is your current time (hh:mm)?"); //request current time from user
let currentHours = currentTime.slice(0, currentTime.indexOf(":")); //get current hours from input 
let currentMinutes = currentTime.slice(currentTime.indexOf(":") + 1);  //get current minutes from input 
let hoursLeft= 23 - currentHours; //subtract hours left from 23 of current hours
let minutesLeft = 60 - currentMinutes; //subtract minutes left from 60 of current minutes
alert(`You have ${hoursLeft} hours and ${minutesLeft} minutes untill tomorrow make the most of it!`);  //number of hours and minutes left untill tomorrow



