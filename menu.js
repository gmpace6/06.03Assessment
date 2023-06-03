///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that deals with food objects, arrays of objects and filtering those arrays. 
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6 properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values of the correct data type.

    Note: the category is something like appetizer/entree, the popularity is an overall ranking, the rating is an average of all customer ratings, and for the tags, think of things that a user might filter by, like 'gluten-free' or 'kids'
*/

let pizza = {
    name: "Hawaiian",
    price: 9.99,
    cat: "entree",
    pop: 15209,
    rating: 4.9,
    tags: ["pineapple", "ham", "stuffed crust"]
}
console.log(pizza)

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.
    First, log the popularity of pizza. Use dot notation to access the value.
*/

console.log(pizza.pop)

/*
    Second, log the second tag in your pizza's tags array.
    Use a combination of dots and brackets to get the value.
*/

console.log(pizza.tags[1])

/*
    Third, destructure the price off of the pizza object.
        Print the value of your new price variable.
*/

let {price} = pizza
console.log(price)

/*
    Fourth, and last, destructure the category property.
    Print the value of your category variable. 
*/

let {cat} = pizza
console.log(cat)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it. The objects should mimic the `pizza` object. Call the array `foodArr`.
    Make sure that they have slightly different values for price, popularity, rating, and tags. That way, you'll be able to use this data in some functions that you'll write.
*/

let foodArr = [
    {
    name: "Cheesy garlic breadsticks",
    price: 4.99,
    cat: "appetizer",
    pop: 11413,
    rating: 4.7,
    tags: ["cheese", "garlic", "dipping sauce"]
},
    {
    name: "Rocky Road ice cream",
    price: 3.99,
    cat: "dessert",
    pop: 17474,
    rating: 4.9,
    tags: ["chocolate", "almond", "marshmallow"]
},
    {
    name: "Triple chocolate brownies",
    price: 3.49,
    cat: "dessert",
    pop: 15658,
    rating: 4.8,
    tags: ["chocolate", "chocolate chips", "fudge", "walnuts"]
},
    {
    name: "Root Beer",
    price: 1.49,
    cat: "beverage",
    pop: 11859,
    rating: 4.5,
    tags: ["soft drink", "ice"]
},
    {
    name: "Caesar salad",
    price: 4.49,
    cat: "appetizer",
    pop: 12589,
    rating: 4.6,
    tags: ["croutons", "lettuce", "low-fat dressing"]
},
]
console.log(foodArr)

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according to their tags.
    Write a callback function below that will return only food objects that have a certain tag.
    You can check for any tag that at least 1 of your food objects has.
*/

function cb(food, tag){
    return food.tags.includes(tag)
}
const filteredFood = foodArr.filter((food) => cb(food, "chocolate"))
console.log(filteredFood)


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little more flexible than just filtering for one value. We want to be able to filter for food that has above a certain rating, below a certain price, or any other combo.
    Write a function called `filterByProperty` that takes in three arguments: `property`, `number`, and `type. 
    The property will be a string (rating, popularity, or price)
    The number will be the number that you want to compare against
    The type should be 'above' or 'below' to indicate whether you want to get foods with values that are above or below the given number for the given property
    Inside the function, create a variable to hold a filtered array
    Use the filter method to filter the foodArr
        In the callback, check if the `type` is `above`, if it is, return objects whose value for the given property is greater than the `number` passed in
        If the type is `below`, return objects whose value for the given property is less than the `number` passed in
        Return the filtered array from the entire function
*/

function filterByProperty(prop, num, type){
    let filteredArr
    if(type === "above"){
        filteredArr = foodArr.filter((food) => food[prop] >= num)
    } else if(type === "below"){
        filteredArr = foodArr.filter((food) => food[prop] < num)
    }
    return filteredArr
}

/*
Invoke the `filterByProperty` function passing in a value for each paramter.
You'll have to console.log to see the filtered array
*/

console.log(filterByProperty("price", 4, "below"))