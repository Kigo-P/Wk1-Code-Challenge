
/* ## Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
*/
var prompt = require('prompt-sync')();

let marksInput = prompt('Enter Marks:');
let marks = parseFloat(marksInput);

function isGrade(marks){
    if (marks > 79 && marks <= 100)
        console.log("Grade A");
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
isGrade(marks);
/* In the question above, we have been asked to write a function that prompts the user to input student marks whereby the output should respond to the correct grade.
The solution comprises of : 
a) A fuction whose name is isGrade and the parameters are the marks. 
b) Conditional statements and to be specific the if else statements.
c) Comparison operators and to be specific the relational comparison operators i.e >, <, >=, <=
d) return values for each grade
*/
// To test the above so that we know whether it will print the correct grades, lets use the following arguments:
