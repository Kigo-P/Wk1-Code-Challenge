
/* ## Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
*/
function isGrade(marks){
    if (marks > 79 && marks <= 100)
        {return "Grade A";}
    else if (marks >=60 && marks <=79)
        {return "Grade B";}
    else if (marks >=49 && marks <=59)
        {return "Grade C";}
    else if (marks >=40 && marks <49)
        {return "Grade D";}
    else if (marks >=0 && marks < 40)
        {return "Grade E";}
    else
    {return "invalid mark"}
}
/* In the question above, we have been asked to write a function that prompts the user to input student marks whereby the output should respond to the correct grade.
The solution comprises of : 
a) A fuction whose name is isGrade and the parameters are the marks. 
b) Conditional statements and to be specific the if else statements.
c) Comparison operators and to be specific the relational comparison operators i.e >, <, >=, <=
d) return values for each grade
*/
// To test the above so that we know whether it will print the correct grades, lets use the following arguments:
console.log(isGrade(86));
console.log(isGrade(79));
console.log(isGrade(68));
console.log(isGrade(60));
console.log(isGrade(59));
console.log(isGrade(50));
console.log(isGrade(49));
console.log(isGrade(48));
console.log(isGrade(42));
console.log(isGrade(40));
console.log(isGrade(39));
console.log(isGrade(9));
console.log(isGrade(0));
console.log(isGrade(101));
console.log(isGrade(-15));