function buildMeta(data){

return {

title: `${data.toolName} | HaeyaGo`,

description: data.description,

keywords: data.keywords,

canonical: `https://haeyago.com/tools/${data.slug}/`

};

}

module.exports = {
buildMeta
};
