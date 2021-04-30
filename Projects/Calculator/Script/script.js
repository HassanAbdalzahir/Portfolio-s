/*
    * Sort Buttons
    * defined those
    * 
*/

const el = (element) => {
    if (element.charAt(0) == '#'){
        return document.querySelector(element);
    }
    return document.querySelectorAll(element);
};

let viewer = el('#viewer');
const buttons = el('.nums');
const operators = el('.ops');
let equals = el('#equals'),
    clears = el('#clear'),
    memory,
    memory2,
    ops;


function equal(thisU) {
    thisU.onclick = () => {
        memory = parseFloat(viewer.innerHTML);
        switch(ops){
            case 'plus': 
                viewer.innerHTML = parseFloat(memory2) + parseFloat(memory);
                break;
            case 'minus': 
                viewer.innerHTML = parseFloat(memory2) - parseFloat(memory);
                break;
            case 'times': 
                viewer.innerHTML = parseFloat(memory2) * parseFloat(memory);
                break;
            case 'divided by': 
                viewer.innerHTML = parseFloat(memory2) / parseFloat(memory);
                break;
        }
    }
}


function operator(thisIs) {
    thisIs.forEach(operatorr => {
        operatorr.onclick = () => {
            memory = parseFloat(viewer.innerHTML);
            memory2 = memory;
            memory = 0;
            viewer.innerHTML = 0;
            ops = operatorr.dataset.ops;
            switch(ops){
                case 'plus':
                    memory = '+';
                    break;
                case 'minus':
                    memory = '-';
                    break;
                case 'divided by':
                    memory = '/';
                    break;
                case 'times':
                    memory = '*';
                    break;}
                    testV1();
        }})

}

operator(operators);

function clickIt(buttons) {
    buttons.forEach(element => {
       element.onclick = () => {
        switch(viewer.innerHTML){
            case '+':
            case '-':
            case '*':
            case '/':
                viewer.innerHTML = 0;
                break;        
        }
           memory = (element.dataset.number);
           testV1();
        }});
}

function testV1() {
    if(viewer.innerHTML == 0){
        viewer.innerHTML = memory;
    }else{
        viewer.innerHTML += memory
    }
}
clickIt(buttons);

function clearIt(){
    viewer.innerHTMl = 0;
    memory = 0;
}

clears.onclick = () => viewer.innerHTML = 0; memory = 0;

equal(equals);