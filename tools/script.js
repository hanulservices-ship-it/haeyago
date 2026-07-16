const searchInput = document.getElementById("toolSearch");
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll("#toolGrid .card:not(.coming-soon)");

let activeCategory = "all";

function filterTools() {

const keyword = searchInput.value.toLowerCase();

cards.forEach(card => {

const matchesSearch =
card.innerText.toLowerCase().includes(keyword);

const matchesCategory =
activeCategory === "all" ||
card.classList.contains(activeCategory);

card.style.display =
(matchesSearch && matchesCategory)
? ""
: "none";

});

const visible = [...cards].filter(card => card.style.display !== "none");

toolCount.textContent = visible.length + " Tools";

}

searchInput.addEventListener("input", filterTools);

chips.forEach(chip => {

chip.addEventListener("click", () => {

chips.forEach(c =>
c.classList.remove("active"));

chip.classList.add("active");

activeCategory = chip.dataset.category;

filterTools();

});

});

const toolCount = document.getElementById("toolCount");

function updateToolCount(){

const visibleCards =
document.querySelectorAll(
'#toolGrid .card:not(.coming-soon)'
);

toolCount.textContent =
visibleCards.length + " Tools";

}

updateToolCount();