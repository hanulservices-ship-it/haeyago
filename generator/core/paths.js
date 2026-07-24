const paths = {

home: () => "/index.html",

tools: () => "/tools/index.html",

tool: slug => `/tools/${slug}/index.html`,

categories: () => "/categories/index.html",

category: slug => `/categories/${slug}/`,

about: () => "/pages/about.html",

contact: () => "/pages/contact.html",

privacy: () => "/pages/privacy.html",

terms: () => "/pages/terms.html"

};

module.exports = paths;