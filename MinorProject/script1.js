const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

//Variables for storing operands and operator
let currentOperand = '';
let previousOperand = '';
let operator = '';

//Function to update display
function updateDisplay(value) 
{
    if (value === '') 
    {
        display.innerText = '0'; //display's Zero if nothing
    } 
    else 
    {
        display.innerText = value;//display's a value if clicked
    }
}

//Event listener for button clicks
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (!isNaN(value) || value === '.') 
        {
            //Number or Decimal clicked
            handleNumber(value);
        } 
        else 
        {
            //Operator clicked
            handleOperator(value);
        }
    });
});

//Function to handle number input
function handleNumber(num) 
{
    if (currentOperand.includes('.') && num === '.') return;
    currentOperand += num;
    updateDisplay(currentOperand);
}

//Function to handle operator input
function handleOperator(op) 
{
    if (op === 'AC') 
    {
        clearAll();
    } 
    else if (op === '=') 
    {
        calculate();
    } 
    else if (op === '^2') 
    {
        currentOperand = (parseFloat(currentOperand) ** 2).toString();
        updateDisplay(currentOperand);
    } 
    else 
    {
        if (currentOperand === '') 
            return; //If an operator is not chosen
        if (previousOperand !== '') 
            calculate(); //If an operator is choosen
        operator = op;
        previousOperand = currentOperand; 
        currentOperand = ''; //Reset for next operand
    }
}

//Function to perform the calculation
function calculate() 
{
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return; //to prevent wrong calculations

    switch (operator) 
    {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    currentOperand = result.toString();
    operator = '';
    previousOperand = '';
    updateDisplay(currentOperand);
}

//Function to clear all the data
function clearAll() 
{
    currentOperand = '';
    previousOperand = '';
    operator = '';
    updateDisplay('0');
}
