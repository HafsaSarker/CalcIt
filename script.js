const numBtn = document.querySelectorAll('[data-num]');
const opBtn = document.querySelectorAll('[data-op]');
const clear = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('[data-equals]');
let inpField = document.getElementById('usrInp');
//console.log(numBtn.dataset.num.value);

numBtn.forEach(numBtn => {
    numBtn.onclick = () => displayInp(numBtn.dataset.num);
})

opBtn.forEach(opBtn => {
  opBtn.onclick = () => displayInp(opBtn.dataset.op);
})

clear.addEventListener("click", () => {
  inpField.value = "";
})
function displayInp(data) {
    console.log(data);        
    inpField.value += data;
}


