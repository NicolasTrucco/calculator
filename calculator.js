let calculator = {
    display: 0,
    currentNumber: 0,
    previousNumber:0,
    result:0,
}

let display = '';
let displayValue = document.getElementById('display');
let operation = 'add';
let previousNumber = 0;
let currentNumber = 0;
let result = 0;


const buttonClear = document.querySelector('.clear')
buttonClear.addEventListener('click', erase)
function erase(){
	document.getElementById('display').innerHTML = "";
	display = '';
	operation = 'add';
	previousNumber = 0;
	currentNumber = 0;
};

const buttonDelete = document.querySelector('.delete')
buttonDelete.addEventListener('click', letsdelete)
function letsdelete(){
	console.log('display',display)
	display = display.substring(0, display.length - 1);
	console.log('display',display)
	document.getElementById('display').innerHTML = display;

};


const buttonZero = document.querySelector('.zero')
buttonZero.addEventListener('click', inserteZero)
function inserteZero(){
	display += '0'
	document.getElementById('display').innerHTML = display;
};

const buttonOne = document.querySelector('.one')
buttonOne.addEventListener('click', inserteOne)
function inserteOne(){
	display += '1'
	document.getElementById('display').innerHTML = display;
};

const buttonTwo = document.querySelector('.two')
buttonTwo.addEventListener('click', inserteTwo)
function inserteTwo(){
	display += '2'
	document.getElementById('display').innerHTML = display;
};

const buttonThree = document.querySelector('.three')
buttonThree.addEventListener('click', inserteThree)
function inserteThree(){
	display += '3'
	document.getElementById('display').innerHTML = display;
};

const buttonFour = document.querySelector('.four')
buttonFour.addEventListener('click', inserteFour)
function inserteFour(){
	display += '4'
	document.getElementById('display').innerHTML = display;
};

const buttonFive = document.querySelector('.five')
buttonFive.addEventListener('click', inserteFive)
function inserteFive(){
	display += '5'
	document.getElementById('display').innerHTML = display;
};

const buttonSix = document.querySelector('.six')
buttonSix.addEventListener('click', inserteSix)
function inserteSix(){
	display += '6'
	document.getElementById('display').innerHTML = display;
};

const buttonSeven = document.querySelector('.seven')
buttonSeven.addEventListener('click', inserteSeven)
function inserteSeven(){
	display += '7'
	document.getElementById('display').innerHTML = display;
};

const buttonEight = document.querySelector('.eight')
buttonEight.addEventListener('click', inserteEight)
function inserteEight(){
	display += '8'
	document.getElementById('display').innerHTML = display;
};

const buttonNine = document.querySelector('.nine')
buttonNine.addEventListener('click', inserteNine)
function inserteNine(){
	display += '9'
	document.getElementById('display').innerHTML = display;
};

const buttonDot = document.querySelector('.dot')
buttonDot.addEventListener('click', inserteDot)
function inserteDot(){
	display += '.'
	document.getElementById('display').innerHTML = display;
};



const buttonAdd = document.querySelector('.add')
buttonAdd.addEventListener('click', letsadd)
function letsadd(){
	
	operate()
	operation = 'add';
};

const buttonSubtract = document.querySelector('.subtract')
buttonSubtract.addEventListener('click', letssubtract)
function letssubtract(){

	operate()
	operation = 'subtract';
		
};

const buttonMultiply = document.querySelector('.multiply')
buttonMultiply.addEventListener('click', letsmultiply)
function letsmultiply(){

	operate()
	operation = 'multiply';
		
};

const buttonDivide = document.querySelector('.divide')
buttonDivide.addEventListener('click', letsdivide)
function letsdivide(){

	operate()
	operation = 'divide';
		
};

const buttonEqual = document.querySelector('.equal')
buttonEqual.addEventListener('click', operate)
function operate(){
	
	switch(operation) {
		case 'add':
			currentNumber = display;
			if (currentNumber == '') {
				currentNumber = 0;
			}
			display = '';
			previousNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
			document.getElementById('display').innerHTML = previousNumber;


		  	break;
		case 'subtract':
			currentNumber = display;
			display = '';
			previousNumber -= currentNumber;
			document.getElementById('display').innerHTML = previousNumber;
			break;
		case 'multiply':
			if (display != '') {
			currentNumber = display;
			}
			display = '';
			previousNumber *= currentNumber
			document.getElementById('display').innerHTML = previousNumber;
			currentNumber = 1;			
			break;
		case 'divide':
			if (display != '') {
				currentNumber = display;
				}
			display = '';
			console.log('div',operation)
			console.log('previous:', previousNumber)
			console.log('currentNumber:', currentNumber)
			previousNumber /= currentNumber
			document.getElementById('display').innerHTML = previousNumber;
			currentNumber = 1;		
			console.log('previous:', previousNumber)
			console.log('currentNumber:', currentNumber)
			break;

	  }
};

// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     if (button.class == 'add') {
//         acalavarialbe = lafuncion('add', previousNumber,currentNumber);
//     } else if (button.class == 'subtract') {
//         acalavarialbe = lafuncion('subtract', previousNumber,currentNumber);
//     } else if (button.class == 'multiply') {
//         acalavarialbe = lafuncion('multiply', previousNumber,currentNumber);
//     } else if (button.class == 'divide') {
//         acalavarialbe = lafuncion('divide', previousNumber,currentNumber);
//     } 
    
    
//   });
// })