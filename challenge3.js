/* Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

Links to an external site.-  Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks
*/

//function to calculate the income tax
var prompt = require('prompt-sync')();
//The function below prompts the user to only put positive values and prints a message: Enter a positive value. 
function promptPositive(message) {
    let input = parseFloat(prompt(message));
    
    if (input < 0) {
        console.log("Enter a positive value");
        return promptPositive(message); 
    }
    
    return input;
}
let basicSalaryInput = promptPositive('Enter basic salary: ');
let basicSalary = parseFloat(basicSalaryInput);
let benefitsInput = promptPositive('Enter benefits: ');
let benefits = parseFloat(benefitsInput);
// lets input our variables to calculate the gross salary
let grossSalary = basicSalary + benefits
function incomeTax(basicSalary) {
//To make the function easier to understand, we will introduce a variable of ranges from the first range in the tax bracket to the last range and multiply it to the percentage taxed
//The reason we have done this is because in the  next tax bracket we have to compute the previous tax bracket(s) range multiplied to the rate of tax which is later added to the current tax 
let range1 = (24000 - 0) * 0.1;
let range2 = (32333 - 24001) * 0.25;
let range3 = (500000 -32334) * 0.3;
let range4 = (800000- 500001) * 0.325; 

//introducing if statements to calculate income tax
    if(grossSalary <= 24000) {
        return Math.round(0.1 * 24000);//we have math rounded all the figures to ensure that the user does not see many decimal points
    }else if(grossSalary >= 24001 && grossSalary <= 32333) {
        return Math.round(0.25 * (grossSalary -24001) + (range1));
    }else if(grossSalary >= 32334 && grossSalary <= 500000) {
        return Math.round(0.3 * (grossSalary - 32334) + (range2) + (range1));
    }else if(grossSalary >= 500001 && basicSalary <= 800000) {
        return Math.round(0.325 * (grossSalary - 500001) + (range3)+ (range2) + (range1));
    }else{
        return Math.round(0.35 * (grossSalary - 800000) + (range4) + (range3) + (range2) + (range1));
    } 
    
}


//function to calculate the NHIF deductions
function NHIF(basicSalary){
    if (basicSalary <=5999){
        return 150
    }else if(basicSalary >= 6000 && basicSalary <= 7999){
        return 300
    }else if(basicSalary >= 8000 && basicSalary <= 11999){
        return 400
    }else if(basicSalary >= 12000 && basicSalary <= 14999){
        return 500
    }else if(basicSalary >= 15000 && basicSalary <= 19999){
        return 600
    }else if(basicSalary >= 20000 && basicSalary <= 24999){
        return 750
    }else if(basicSalary >= 25000 && basicSalary <= 29999){
        return 850
    }else if(basicSalary >= 30000 && basicSalary <= 34999){
        return 900
    }else if(basicSalary >= 35000 && basicSalary <= 39999){
        return 950
    }else if(basicSalary >= 40000 && basicSalary <= 44999){
        return 1000
    }else if(basicSalary >= 45000 && basicSalary <= 40999){
        return 1100
    }else if(basicSalary >= 50000 && basicSalary <= 59999){
        return 1200
    }else if(basicSalary >= 60000 && basicSalary <= 69999){
        return 1300
    }else if(basicSalary >= 70000 && basicSalary <= 79999){
        return 1400
    }else if(basicSalary >= 80000 && basicSalary <= 89999){
        return 1500
    }else if(basicSalary >= 90000 && basicSalary <= 99999){
        return 1600
    }else {
        return 1700
    }

}


//function to calculate the NSSF deductions
//To make the function easier to understand, we will introduce a variable of range from 0 to 7000
let range5 = 0.06 * 7000
function NSSF(basicSalary) {
    if(basicSalary <= 7000) {
        return Math.round (0.06 * basicSalary);
    }else if(basicSalary >= 7001 && basicSalary <= 36000) {
        return Math.round (0.06 * (basicSalary -7001) + (range5));
    }else{
        return Math.round (0.06 * 36000)}
}


//To calculate the net pay
//let basicSalary;

const personalRelief = 2400;
//For example: 

let netPay =(grossSalary + personalRelief - NSSF(basicSalary) - incomeTax(basicSalary)- NHIF(basicSalary))

// to print these values in an object
const netPayCalculator = {
    GrossSalary: grossSalary,
    Payee: incomeTax(basicSalary),
    NSSF : NSSF(basicSalary),
    NHIF : NHIF(basicSalary),
    Net: Math.round(netPay),
}
console.log(netPayCalculator)
