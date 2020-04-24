//Create a “groceries list” array. 
//Each element of the array is an object that contains the name of a product, an amount needed and a property saying whether it is bought or not. 
//1) Function for displaying the entire list; 
//2) Function for adding a purchase to the list. Note that if a product already exists in the array, the amount needs to be increased in the existing purchase, not in a new one; 
//3) Function for purchasing a product. The function accepts the name of a product and marks it as bought.


//creating a grocery list array and making each element an object with product name, quantity needed for the product and it´s availability.

// const groceryList = [
//     {
//         item: "Eggs",
//         quantity: 12,
//         availability: false,

//     },
//     {
//         item: "Milk",
//         quantity: 1,
//         availability: false,

//     },
//     {
//         item: "Diapers",
//         quantity: 2,
//         availability: false,

//     },

// ];

//function to display the entire list, used the the forEach function.

//groceryList.forEach(function(item,index,array){
    //console.log(item);
//}
//);


//Function for adding a purchase to the list. Note that if a product already exists in the array, the amount needs to be increased in the existing purchase, not in a new one. 


// groceryList.push("butter");
// console.log(groceryList);

// for (let i = 0; i < groceryList.length; i++) {
//    groceryList.push() 
// }


//Create an array of classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it: 1) Display all the classrooms; 2) Display all the classrooms for a given faculty; 3) Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.

const classrooms = [
    {
        name: "classroom1",
        numberOfSeats: 10,
        faculty: "Humanities"
    },
    {
        name: "classroom2",
        numberOfSeats: 15,
        faculty: "Natural Sciences" 
    },
    {
        name: "classroom3",
        numberOfSeats: 20,
        faculty: "Education"
    },
];
classrooms.forEach(function(item,index,array){
console.log(item);
}
);




