function buildHowTo(steps){

return `
<section class="card">
<h2>How to Use</h2>

<ol>

${steps.map(step=>`<li>${step}</li>`).join("\n")}

</ol>

</section>
`;

}

function buildFAQ(items){

return `
<section class="card">

<h2>Frequently Asked Questions</h2>

${items.map(item=>`

<h3>${item.question}</h3>

<p>${item.answer}</p>

`).join("\n")}

</section>
`;

}

module.exports={
buildHowTo,
buildFAQ
};
