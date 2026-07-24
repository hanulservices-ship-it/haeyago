const presets = {

    "5": {
        title: "Profit Margin Calculator",
        slug: "profit-margin",
        category: "Finance",
        description: "Calculate your profit margin percentage.",
        keywords: "profit margin calculator, margin calculator, business calculator",

        inputs: [
            "Revenue",
            "Cost"
        ],

        formula: "((Revenue-Cost)/Revenue)*100",

        result: {
            title: "Profit Margin",
            decimals: 2,
            suffix: "%"
        }
    },

    "6": {
        title: "ROI Calculator",
        slug: "roi",
        category: "Finance",
        description: "Calculate Return on Investment.",
        keywords: "roi calculator, return on investment, investment calculator",

        inputs: [
            "Investment",
            "Profit"
        ],

        formula: "Profit/Investment*100",

        result: {
            title: "ROI",
            decimals: 2,
            suffix: "%"
        }
    },

    "7": {
        title: "ROAS Calculator",
        slug: "roas",
        category: "Finance",
        description: "Calculate Return on Ad Spend.",
        keywords: "roas calculator, return on ad spend",

        inputs: [
            "Revenue",
            "Ad Spend"
        ],

        formula: "Revenue/Ad Spend",

        result: {
            title: "ROAS",
            decimals: 2,
            suffix: "x"
        }
    }

};

module.exports = {
    presets
};