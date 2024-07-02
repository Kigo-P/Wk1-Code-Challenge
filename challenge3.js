var prompt = require('prompt-sync')();

let basicSalaryInput = prompt('Enter basic salary: ');
let basicSalary = parseInt(basicSalaryInput);
let benefitsInput = prompt('Enter benefits: ');
let benefits = parseInt(benefitsInput);
let grossSalary = basicSalary + benefits;

function netSalary(grossSalary) {
    let incomeTax = null;//They have been input in the global scope and are calculated in their respective brackets
    let NHIF = null;
    let NSSF = null;

    //The basic salary or the benefits input by the user should not be less than 0. If so print a message
    if (basicSalary < 0 || benefits < 0) {
        console.log('Invalid gross salary');
    } else {
        // Calculate income tax
        if (grossSalary <= 24000) {
            incomeTax = Math.round(0.1 * grossSalary);
        } else if (grossSalary >= 24001 && grossSalary <= 32333) {
            incomeTax = Math.round(0.25 * grossSalary);
        } else if (grossSalary >= 32334 && grossSalary <= 500000) {
            incomeTax = Math.round(0.3 * grossSalary);
        } else if (grossSalary >= 500001 && grossSalary <= 800000) {
            incomeTax = Math.round(0.325 * grossSalary);
        } else {
            incomeTax = Math.round(0.35 * grossSalary);
        }

        // Calculate NHIF
        if (grossSalary <= 5999) {
            NHIF = 150;
        } else if (grossSalary >= 6000 && grossSalary <= 7999) {
            NHIF = 300;
        } else if (grossSalary >= 8000 && grossSalary <= 11999) {
            NHIF = 400;
        } else if (grossSalary >= 12000 && grossSalary <= 14999) {
            NHIF = 500;
        } else if (grossSalary >= 15000 && grossSalary <= 19999) {
            NHIF = 600;
        } else if (grossSalary >= 20000 && grossSalary <= 24999) {
            NHIF = 750;
        } else if (grossSalary >= 25000 && grossSalary <= 29999) {
            NHIF = 850;
        } else if (grossSalary >= 30000 && grossSalary <= 34999) {
            NHIF = 900;
        } else if (grossSalary >= 35000 && grossSalary <= 39999) {
            NHIF = 950;
        } else if (grossSalary >= 40000 && grossSalary <= 44999) {
            NHIF = 1000;
        } else if (grossSalary >= 45000 && grossSalary <= 49999) {
            NHIF = 1100;
        } else if (grossSalary >= 50000 && grossSalary <= 59999) {
            NHIF = 1200;
        } else if (grossSalary >= 60000 && grossSalary <= 69999) {
            NHIF = 1300;
        } else if (grossSalary >= 70000 && grossSalary <= 79999) {
            NHIF = 1400;
        } else if (grossSalary >= 80000 && grossSalary <= 89999) {
            NHIF = 1500;
        } else if (grossSalary >= 90000 && grossSalary <= 99999) {
            NHIF = 1600;
        } else {
            NHIF = 1700;
        }

        // Calculate NSSF
        if (grossSalary <= 7000) {
            NSSF = Math.round(0.06 * 7000);
        } else {
            NSSF = Math.round(0.06 * 36000);
        }

        // Calculate net pay
        const personalRelief = 2400;
        let netPay = grossSalary + personalRelief - NSSF - incomeTax - NHIF;

        // Creating the net pay calculator based on the net pay calculations above
        const netPayCalculator = {
            GrossSalary: grossSalary,
            Payee: incomeTax,
            NSSF: NSSF,
            NHIF: NHIF,
            Net: netPay,
        };

        console.log(netPayCalculator); // what is printed to the net calculator
    }
}

// Call the netSalary function 
netSalary(grossSalary);
