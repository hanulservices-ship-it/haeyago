const currency=document.getElementById("currency");
const weight=document.getElementById("weight");
const rate=document.getElementById("rate");

const calculateBtn=document.getElementById("calculateBtn");
const resetBtn=document.getElementById("resetBtn");

const result=document.getElementById("result");
const resultButtons=document.getElementById("resultButtons");

const copyBtn=document.getElementById("copyBtn");
const shareBtn=document.getElementById("shareBtn");

let resultText="";

calculateBtn.addEventListener("click",()=>{

const w=parseFloat(weight.value);
const r=parseFloat(rate.value);

if(isNaN(w)||isNaN(r)||w<=0||r<0){

result.innerHTML="Please enter valid values.";

resultButtons.style.display="none";

return;

}

const total=w*r;

resultText=

`${currency.value}${total.toFixed(2)}

Package Weight: ${w} kg

Shipping Rate: ${currency.value}${r.toFixed(2)}/kg`;

result.innerHTML=`

<h3>Total Shipping Cost</h3>

<p><strong>${currency.value}${total.toFixed(2)}</strong></p>

<p>Package Weight: ${w} kg</p>

<p>Shipping Rate: ${currency.value}${r.toFixed(2)}/kg</p>

`;

resultButtons.style.display="flex";

});

resetBtn.addEventListener("click",()=>{

weight.value="";
rate.value="";

result.innerHTML="Enter the package weight and shipping rate, then tap Calculate.";

resultButtons.style.display="none";

});

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(resultText);

alert("Result copied.");

});

shareBtn.addEventListener("click",async()=>{

if(navigator.share){

await navigator.share({

title:"Shipping Cost Calculator",

text:resultText

});

}else{

navigator.clipboard.writeText(resultText);

alert("Sharing isn't supported. Result copied instead.");

}

});