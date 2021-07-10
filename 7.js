var number = parseInt(prompt('Enter a positive integer: '));

if (number < 0) {
    document.write('Error! Factorial for negative number does not exist.');
}

else if (number === 0) {
    document.write('The factorial of '+number+' is 1.');
}

else {
    var fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    document.write('The factorial of '+number+' is '+fact);
}