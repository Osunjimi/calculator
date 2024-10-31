const display = (value)=>{
    let display = document.getElementById('display-input')
    display.value += value
}
const solve = () => {
    let display = document.getElementById('display-input')
    display.value = eval(display.value);
}
const clearScreen= () =>{
    let display = document.getElementById('display-input')
    display.value = ''
}
const backSpace = () => {
    let display = document.getElementById("display-input");
     display.value = display.value.slice(0,-1)
 }
