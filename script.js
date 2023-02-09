const numBtn = document.querySelectorAll('[data-num]');
const opBtn = document.querySelectorAll('[data-op]');
const clear = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('[data-equals]');
let inpField = document.getElementById('usrInp');
const resDisp = document.getElementById('res');
//console.log(numBtn.dataset.num.value);

numBtn.forEach(numBtn => {
    numBtn.onclick = () => displayInp(numBtn.dataset.num);
})

opBtn.forEach(opBtn => {
  opBtn.onclick = () => displayInp(opBtn.dataset.op);
})

clear.addEventListener("click", () => {
  clearField();
})
function displayInp(data) {
    console.log(data);        
    inpField.value += data;
}
function clearField(){
  inpField.value = "";
}
equalBtn.addEventListener("click", () => {

  console.log(inpField.value);
  inpField.value += equalBtn.dataset.equals;
  resDisp.innerText = inpField.value;
  clearField();
})