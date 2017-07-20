let container =document.querySelector('.container');
let display = document.querySelector('.wide');
container.addEventListener('click', function(evt){

  let pressedButtonText = evt.target.innerText;

  if (pressedButtonText === "0" ||Number(pressedButtonText)){
    console.log(Number(pressedButtonText));
    display.textContent += pressedButtonText;
  }  else {
    if(pressedButtonText === "C"){
      //clear was press! Delete all things!
    display.textContent = '';
  } else if  (pressedButtonText !== '='){
    display.textContent += ' ' + pressedButtonText + ' ';
  } else if ( pressedButtonText === '='){
    let equation = display.textContent.split(' ');
    let lhs = Number(equation[0]);
    let operator =equation[1];
    let rhs = Number(equation[2]);

    if(operator === '+'){
    display.textContent = lhs + rhs;
    } else if (operator === '-'){
    display.textContent = lhs - rhs;
    } else if (operator === 'X'){
    display.textContent =lhs * rhs;
    } else if (operator === '/'){
    display.textContent = lhs / rhs;

  }

  }
}
});
