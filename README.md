# Week 1 Toy problems Prerequisites

## Prerequisites: 

1. Create a repository on your GitHub account. 

NB: One folder, with 3-4 files for each solution. Please note that a single file should only hold one solution.

2. Use JavaScript to wire down the solution.

3. Push the solution to the above repository once done.

4. Submit the repository link for grading.

5. Ensure your repository has a well written README.

NOTE: You are required to complete ALL the challenges.

## Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
    
    -In the question above, we have been asked to write a function that prompts the user to input student marks whereby the output should respond to the correct grade.
    The solution comprises of : 
        a. A fuction whose name is isGrade and the parameters are the marks. 
        b. Conditional statements and to be specific the if else statements.
        c. Comparison operators and to be specific the relational comparison operators i.e >, <, >=, <=
        d. return values for each grade


## Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

    In the question above we have been asked to write a fuction whose input is speed and the output is to print the demerit points based on the speed.
    The solution comprises of:
        a. A switch statement with various cases based on speed
        b. Within the cases, there are relative comparison operators which give a speed range
        c. After the cases, we want to print the result hence the use of console.log
        d. After every case there is a break which is used to stop the switch from continuing to look at other case statements once it finds a match.
        e. There is a default statement which is the last result if the switch statement does not find a match.


## Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

    NB: Use KRA, NHIF, and NSSF values provided in the link below.

    - https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

    Links to an external site.-  Links to an external site.Links to an external site.

    - www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks

    In the questio above we have been asked to calculate the Net salary
    The solution comprises of:
    a. a function for calculating the income tax based on the various tax brackets
    b. a function for calculating the NHIF based on the recent NHIF chart whereby if else statements and relative comparison operators have been used
    c. variables that are useful in the calculation of net pay
    d. a function for net pay which is console logged and gives successful results
