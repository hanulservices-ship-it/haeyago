const search = document.getElementById("toolSearch");

if(search){

search.addEventListener("input", function(){

const keyword = this.value.toLowerCase();

const cards = document.querySelectorAll("#tools .card");

cards.forEach(card=>{

const text = card.textContent.toLowerCase();

if(text.includes(keyword)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}