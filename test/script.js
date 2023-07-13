
function calculateFibonacci(event) {
    event.preventDefault();

    var numberInput = document.getElementById('numberInput');
    var error = document.getElementById('error');
    var result = document.getElementById('result');

    var number = parseInt(numberInput.value);

    if (isNaN(number) || number <= 0 || number > 200) {
        error.textContent = 'Please enter a valid number between 1 and 200.';
        result.textContent = '';
    } else {
        error.textContent = '';
        var cachedResult = localStorage.getItem('fibonacci-' + number);
    if (cachedResult) {
        result.textContent = 'The Fibonacci number at position ' + number + ' is: ' + cachedResult;
    } else {
        var fibonacciNumber = fibonacci(number);
        result.textContent = 'The Fibonacci number at position ' + number + ' is: ' + fibonacciNumber;
        localStorage.setItem('fibonacci-' + number, fibonacciNumber);
    }
    }
}

function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
    var a = 0;
    var b = 1;
    var c;

    for (var i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return b;
    }
}
