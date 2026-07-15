const mode=document.getElementById("mode");
const currency=document.getElementById("currency");
const amount=document.getElementById("amount");
const vatRate=document.getElementById("vatRate");

const amountLabel=document.getElementById("amountLabel");

const calculateBtn=document.getElementById("calculateBtn");
const resetBtn=document.getElementById("resetBtn");

const result=document.getElementById("result");
const resultButtons=document.getElementById("resultButtons");

const copyBtn=document.getElementById("copyBtn");
const shareBtn=document.getElementById("shareBtn");

let resultText="";

function updateLabel(){

if(mode.value==="add"){

amountLabel.textContent="Amount (Before VAT)";

}else if(mode.value==="remove"){

amountLabel.textContent="Amount (Including VAT)";

}else{

amountLabel.textContent="Amount";

}

}

updateLabel();

mode.addEventListener("change",updateLabel);

calculateBtn.addEventListener("click",()=>{

const a=parseFloat(amount.value);
const r=parseFloat(vatRate.value);

if(isNaN(a)||isNaN(r)||a<0||r<0){

result.innerHTML="Please enter valid values.";

resultButtons.style.display="none";

return;

}

const rate=r/100;

let html="";

if(mode.value==="add"){

const vat=a*rate;
const total=a+vat;

html=`
<h3>Result</h3>

<p><strong>Original Amount:</strong> ${currency.value}${a.toFixed(2)}</p>

<p><strong>VAT (${r}%):</strong> ${currency.value}${vat.toFixed(2)}</p>

<p><strong>Total:</strong> ${currency.value}${total.toFixed(2)}</p>
`;

resultText=`Original Amount: ${currency.value}${a.toFixed(2)}
VAT (${r}%): ${currency.value}${vat.toFixed(2)}
Total: ${currency.value}${total.toFixed(2)}`;

}

else if(mode.value==="remove"){

const original=a/(1+rate);
const vat=a-original;

html=`
<h3>Result</h3>

<p><strong>Total Amount:</strong> ${currency.value}${a.toFixed(2)}</p>

<p><strong>VAT (${r}%):</strong> ${currency.value}${vat.toFixed(2)}</p>

<p><strong>Original Amount:</strong> ${currency.value}${original.toFixed(2)}</p>
`;

resultText=`Total Amount: ${currency.value}${a.toFixed(2)}
VAT (${r}%): ${currency.value}${vat.toFixed(2)}
Original Amount: ${currency.value}${original.toFixed(2)}`;

}

else{

const vat=a*rate;

html=`
<h3>Result</h3>

<p><strong>Amount:</strong> ${currency.value}${a.toFixed(2)}</p>

<p><strong>VAT (${r}%):</strong> ${currency.value}${vat.toFixed(2)}</p>
`;

resultText=`Amount: ${currency.value}${a.toFixed(2)}
VAT (${r}%): ${currency.value}${vat.toFixed(2)}`;

}

result.innerHTML=html;
resultButtons.style.display="flex";

});

resetBtn.addEventListener("click",()=>{

amount.value="";
vatRate.value="12";

updateLabel();

result.innerHTML="Choose a calculation type, enter the values, then tap Calculate.";

resultButtons.style.display="none";

});

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(resultText);

alert("Result copied.");

});

shareBtn.addEventListener("click",async()=>{

if(navigator.share){

await navigator.share({

title:"VAT Calculator",

text:resultText

});

}else{

navigator.clipboard.writeText(resultText);

alert("Sharing isn't supported. Result copied instead.");

}

});