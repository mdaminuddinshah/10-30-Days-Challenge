const btns = document.getElementById('btns');
const inputs = document.getElementById('inputs');
const divs = document.getElementById('displays');
const cls = document.getElementById('cls');

// 1st trigger = button
btns.addEventListener('click', function(){
    // divs.textContent += ' ' + inputs.value;
    // divs.style.width = 'fit-content';
    // divs.style.border = '1px solid black';

    let colors = ['red', 'blue', 'green', 'brown', 'black'];

    let indexs = Math.floor(Math.random() * colors.length)

    let randomColor = colors[indexs]
    console.log(randomColor)
 
    let createBtn = document.createElement('button');
    createBtn.textContent = inputs.value;
    createBtn.style.marginRight = '3px';
    createBtn.style.borderRadius = '7px';
    createBtn.style.color = 'white';
    createBtn.style.backgroundColor = randomColor.toString();
    divs.appendChild(createBtn);

    // if button more than width, create new div

})

// clear using button
// 1st trigger is delete buttton
cls.addEventListener('click', function(){
    inputs.value = ''
})

