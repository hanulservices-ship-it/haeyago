function buildSchema(data){

return `
<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"WebApplication",
"name":"${data.toolName}",
"description":"${data.description}",
"url":"https://haeyago.com/tools/${data.slug}/",
"applicationCategory":"BusinessApplication",
"operatingSystem":"Any"
}
</script>
`;

}

module.exports={
buildSchema
};
