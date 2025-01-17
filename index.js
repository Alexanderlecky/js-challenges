function getStudentGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 49 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

// Prompt user for input
let marks = prompt("Enter the student marks (0-100): ");
marks = parseInt(marks);

if (marks >= 0 && marks <= 100) {
    let grade = getStudentGrade(marks);
    console.log(`The grade is: ${grade}`);
} else {
    console.log("Invalid input. Please enter marks between 0 and 100.");
}
