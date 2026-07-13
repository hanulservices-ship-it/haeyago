const tools = [

{
name:"Profit Margin Calculator",
description:"Calculate profit, markup and margin.",
url:"tools/profit-margin/index.html"
},

{
name:"Markup Calculator",
description:"Calculate markup percentage and profit.",
url:"tools/markup/index.html"
},

{
name:"ROI Calculator",
description:"Calculate Return on Investment (ROI).",
url:"tools/roi/index.html"
},

{
name:"Selling Price Calculator",
description:"Calculate selling price using markup percentage.",
url:"tools/selling-price/index.html"
},

{
name:"Shipping Calculator",
description:"Coming Soon",
url:"#"
},

{
name:"KRW to PHP Calculator",
description:"Coming Soon",
url:"#"
}

];

const search=document.getElementById("toolSearch");

const results=document.getElementById("searchResults");

if(search){

search.addEventListener("input",()=>{

const keyword=search.value.trim().toLowerCase();

results.innerHTML="";

if(keyword===""){

results.style.display="none";

return;

}

const filtered=tools.filter(tool=>

tool.name.toLowerCase().includes(keyword)

);

if(filtered.length===0){

results.innerHTML=`
<div class="search-item">
<h4>No tools found</h4>
<p>Try another keyword.</p>
</div>
`;

results.style.display="block";

return;

}

filtered.forEach(tool=>{

results.innerHTML+=`

<a class="search-item" href="${tool.url}">

<h4>${tool.name}</h4>

<p>${tool.description}</p>

</a>

`;

});

results.style.display="block";

});

}