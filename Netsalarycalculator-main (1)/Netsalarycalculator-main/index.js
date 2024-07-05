function calculateNetSalary(basicSalary, benefits) {
    const kraRate = 0.3; 
    const nhifRate = 0.025; 
    const nssfRate = 0.06; 

    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * kraRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    return {
        grossSalary,
        payee,
        nhifDeduction,
        nssfDeduction,
        netSalary
    };
}

const basicSalary = prompt('Enter basic salary:');
const benefits = prompt('Enter benefits:');
const salaryDetails = calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));
console.log('Salary Details:', salaryDetails);
