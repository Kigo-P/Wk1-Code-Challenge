/* Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

Links to an external site.-  Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks
*/

//function to calculate the income tax
function incomeTax(basicSalary) {
//To make the function easier to understand, we will introduce a variable of ranges from the first range in the tax bracket to the last range and multiply it to the percentage taxed
//The reason we have done this is because in the  next tax bracket we have to compute the previous tax bracket(s) range multiplied to the rate of tax which is later added to the current tax 
let range1 = (24000 - 0) * 0.1;
let range2 = (32333 - 24001) * 0.25;
let range3 = (500000 -32334) * 0.3;
let range4 = (800000- 500001) * 0.325; 

//introducing if statements to calculate income tax
    if(basicSalary <= 24000) {
        return 0.1 * 24000;
    }else if(basicSalary >= 24001 && basicSalary <= 32333) {
        return 0.25 * (basicSalary -24001) + (range1);
    }else if(basicSalary >= 32334 && basicSalary <= 500000) {
        return 0.3 * (basicSalary - 32334) + (range2) + (range1);
    }else if(basicSalary >= 500001 && basicSalary <= 800000) {
        return 0.325 * (basicSalary - 500001) + (range3)+ (range2) + (range1);
    }else{
        return 0.35 * (basicSalary - 800000) + (range4) + (range3) + (range2) + (range1);
    } 
    
}
console.log(incomeTax(50000));

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
console.log(NHIF(4000));

//function to calculate the NSSF deductions
//To make the function easier to understand, we will introduce a variable of range from 0 to 7000
let range5 = 0.06 * 7000
function NSSF(basicSalary) {
    if(basicSalary <= 7000) {
        return 0.06 * basicSalary;
    }else if(basicSalary >= 7001 && basicSalary <= 36000) {
        return 0.06 * (basicSalary -7001) + (range5);
    }else{
        return 0.06 * 36000}
}
console.log(NSSF(30000))

//To calculate the net pay
let basicSalary;
let allowances;
let personalRelief = 2400;


//For example: 
basicSalary = 50000;
allowances = 0;
let netPay=(basicSalary + allowances + personalRelief - NSSF(basicSalary) - incomeTax(basicSalary)- NHIF(basicSalary))

// to print these values in an object
const netPayCalculator = {
    GrossSalary: basicSalary,
    Payee: incomeTax(basicSalary),
    NSSF : NSSF(basicSalary),
    NHIF : NHIF(basicSalary),
    Net: netPay,
}
console.log(netPayCalculator)
