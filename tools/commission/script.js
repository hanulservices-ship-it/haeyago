const currency=document.getElementById("currency");
const sales=document.getElementById("sales");
const rate=document.getElementById("rate");

const calculateBtn=document.getElementById("calculateBtn");
const resetBtn=document.getElementById("resetBtn");

const result=document.getElementById("result");
const resultButtons=document.getElementById("resultButtons");

const copyBtn=document.getElementById("copyBtn");
const shareBtn=document.getElementById("shareBtn");

let resultText="";

calculateBtn.addEventListener("click",()=>{

const s=parseFloat(sales.value);
const r=parseFloat(rate.value);

if(isNaN(s)||isNaN(r)||s<0||r<0){

result.innerHTML="Please enter valid values.";

resultButtons.style.display="none";

return;

}

const commission=s*(r/100);
const netSales=s-commission;

resultText=
`Sales Amount: ${currency.value}${s.toFixed(2)}
Commission Rate: ${r.toFixed(2)}%
Commission: ${currency.value}${commission.toFixed(2)}
Net Sales: ${currency.value}${netSales.toFixed(2)}`;

result.innerHTML=`

<h3>Calculation Result</h3>

<p><strong>Commission:</strong> ${currency.value}${commission.toFixed(2)}</p>

<p><strong>Net Sales:</strong> ${currency.value}${netSales.toFixed(2)}</p>

`;

resultButtons.style.display="flex";

});

resetBtn.addEventListener("click",()=>{

sales.value="";
rate.value="";

result.innerHTML="Enter your sales amount and commission rate, then tap Calculate.";

resultButtons.style.display="none";

});

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(resultText);

alert("Result copied.");

});

shareBtn.addEventListener("click",async()=>{

if(navigator.share){

await navigator.share({

title:"Commission Calculator",

text:resultText

});

}else{

navigator.clipboard.writeText(resultText);

alert("Sharing isn't supported. Result copied instead.");

}

});