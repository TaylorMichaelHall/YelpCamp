var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]


function average(arr){
    var sum = 0;
    var av = 0;
    for (var i = 0; i<arr.length; i++){
        sum = sum + arr[i]; 
    }
    av = sum / arr.length;
    console.log(Math.round(av));
    
};
console.log("scores average:");
average(scores); // should return 94
console.log("-----");
console.log("-----");
console.log("-----");
console.log("scores2 average:");
average(scores2); //should return 68
