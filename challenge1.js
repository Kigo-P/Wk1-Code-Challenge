var prompt = require('prompt-sync')();

let marksInput = prompt('Enter Marks:');
let marks = parseInt(marksInput);
// creating a fuction whose name is isGrade and the parameters are the marks.Based on the marks value, this function returns the grade.
function isGrade(marks){
    if (marks > 79 && marks <= 100)//using if else statements and relational comparison operators
        console.log("Grade A");//the grade output seen by the user
    else if (marks >=60 && marks <=79)
        console.log("Grade B");
    else if (marks >=49 && marks <=59)
        console.log("Grade C");
    else if (marks >=40 && marks <49)
        console.log("Grade D");
    else if (marks >=0 && marks < 40)
        console.log("Grade E");
    else
    console.log("invalid mark");
}
isGrade(marks);//calling the isGrade function

