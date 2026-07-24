function buildInputs(inputs) {

    let html = "";

    for (const label of inputs) {

        const id = label
            .toLowerCase()
            .replace(/\s+/g, "-");

        html += `

<div class="form-group">

<label>${label}</label>

<input
type="number"
id="${id}"
inputmode="decimal"
step="0.01"
min="0"
placeholder="0.00">

</div>`;

    }

    return html;

}

module.exports = {
    buildInputs
};