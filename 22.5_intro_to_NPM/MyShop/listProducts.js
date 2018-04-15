var faker = require('faker');

function fakeShop(){
    console.log("========================")  
    console.log("Welcome to my shop!")  
    console.log("========================")  
    for (var i = 0; i<10; i++){
        var randomProduct = faker.commerce.productName();
        var randomPrice = faker.commerce.price();
        console.log(randomProduct + " - $" + randomPrice);
    };
};

fakeShop();