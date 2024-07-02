var prompt = require('prompt-sync')();

let speedInput = prompt('Enter speed:');
let speed = parseInt(speedInput)
// creating a fuction whose name is isSpeed and the parameter is - speed.Based on the speed, this function returns the demerit points to the user.
function isSpeed(speed){
    if(speed < 0){
        console.log ('Invalid Speed')//the speed input by the user should not be less than 0 or a string, if so print this: Invalid speed
    }else{
        if (speed < 70){
            console.log('Ok')
        }else{
            let remainingSpeed = speed - 70;//calculating the speed if it is above 70. Based on this output, the demerit points are calculatedfor every 5kms
            let pointsAccumulated = parseInt(remainingSpeed/5);
            if (pointsAccumulated > 12){
                console.log('License Suspended');//the output given to the user if the demerit points exceed 12 points
            }else {
                console.log(`Points: ${pointsAccumulated}`);//the output given to the user if the speed is above 70 
            }  
        }
    }
    
}


isSpeed(speed);//calling the isSpeed function

