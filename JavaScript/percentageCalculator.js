/** The following shows a miniprojcet that calculates percentage of a number. */
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('result');
let form = document.getElementById('percentForm')
/**
 * The following code is also optional.
document.getElementById('percentForm').addEventListener('submit',function(){})
 */
form.addEventListener('submit',function(event){
    let x = parseFloat(num1.value)
    let y = parseFloat(num2.value)
    if(!x || !y){
        alert('Please input your value in the fields.')
    }
    else{
       let z = (x/y) * 100;
       result.innerText = `${x} is ` + z + "% " + "of " + y;
       event.preventDefault();
    }
})