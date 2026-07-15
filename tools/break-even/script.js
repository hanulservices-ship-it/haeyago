const currency = document.getElementById("currency");
const fixedCost = document.getElementById("fixedCost");
const sellingPrice = document.getElementById("sellingPrice");
const variableCost = document.getElementById("variableCost");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");

const resultButtons = document.getElementById("resultButtons");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

calculateBtn.addEventListener("click", () => {

const fixed = parseFloat(fixedCost.value);
const selling = parseFloat(sellingPrice.value);
const variable = parseFloat(variableCost.value);

if (
isNaN(fixed) ||
isNaN(selling) ||
isNaN(variable)
){

result.innerHTML = "Please enter all values.";

resultButtons.style.display = "none";

return;

}

if(selling <= variable){

result.innerHTML =
"Selling Price must be greater than Variable Cost.";

resultButtons.style.display = "none";

return;

}

const breakEven = fixed / (selling - variable);

result.innerHTML = `

<h3>Results</h3>

<p><strong>Break-even Units:</strong> ${breakEven.toFixed(2)}</p>

<p><strong>Contribution Margin per Unit:</strong> ${currency.value}${(selling-variable).toFixed(2)}</p>

`;

resultButtons.style.display = "flex";

});

resetBtn.addEventListener("click",()=>{

fixedCost.value="";
sellingPrice.value="";
variableCost.value="";

result.innerHTML="Enter your costs, then tap Calculate.";

resultButtons.style.display="none";

});

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(result.innerText);

alert("Result copied!");

});

shareBtn.addEventListener("click",()=>{

if(navigator.share){

navigator.share({

title:"Break-even Calculator",

text:result.innerText

});

}else{

alert("Sharing is not supported on this device.");

}

});