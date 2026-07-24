function buildContent(data){

    return {

        intro:
`The ${data.toolName} helps you quickly calculate ${data.description.toLowerCase()} using simple inputs and instant results.`,

        howTo:
[
"Enter all required values.",
"Press Calculate.",
"Review the generated result.",
"Copy or share your result if needed."
],

        formula:
`This calculator uses the standard ${data.toolName} formula.`,

        faq:[
{
question:`What is ${data.toolName}?`,
answer:data.description
},
{
question:"Is this calculator free?",
answer:"Yes. All HaeyaGo calculators are completely free to use."
}
]

    };

}

module.exports={
buildContent
};
