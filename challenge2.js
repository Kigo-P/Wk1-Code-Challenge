/* 
Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
*/
var prompt = require('prompt-sync')();

let speedInput = prompt('Enter speed:');
let speed = parseFloat(speedInput)
function isSpeed(speed){
    switch(true){
        case (speed <= 70):
            console.log("Ok");
            break;
        case (speed > 70 && speed <= 75):
            console.log("Points: 1");
            break;
        case (speed > 75 && speed <= 80):
            console.log("Points: 2");
            break;
        case (speed > 80 && speed <= 85):
            console.log("Points: 3");
            break;
        case (speed > 85 && speed <= 90):
            console.log("Points: 4"); 
            break;
        case (speed > 90 && speed <= 95):
            console.log("Points: 5"); 
            break;
        case (speed > 95 && speed <= 100):
            console.log("Points: 6"); 
            break;
        case (speed > 100 && speed <= 105):
            console.log("Points: 7"); 
            break;
        case (speed > 105 && speed <= 110):
            console.log("Points: 8"); 
            break;
        case (speed > 110 && speed <= 115):
            console.log("Points: 9"); 
            break;
        case (speed > 115 && speed <= 120):
            console.log("Points: 10"); 
            break;
        case (speed > 120 && speed <= 125):
            console.log("Points: 11"); 
            break;
        case (speed > 125 && speed <= 130):
            console.log("Points: 12"); 
            break;
        default:
            console.log("License suspended");  
    }

}
isSpeed(speed);
/* In the question above we have been asked to write a fuction whose input is speed and the output is to print the demerit points based on the speed.
The solution comprises of:
a. A switch statement with various cases based on speed.The switch is a boolean value of true if the speed is within the specified limit.
b. Within the cases, there are relative comparison operators which give a speed range
c. After the cases, we want to print the result hence the use of console.log
d. After every case there is a break which is used to stop the switch from continuing to look at other case statements once it finds a match.
e. There is a default statement which is the last result if the switch statement does not find a match.
*/
// To test the above so that we know whether it will print the correct demerit points, lets use the following arguments:
