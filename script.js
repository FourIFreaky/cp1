let deckName = "";
let hand = "";
document.getElementById("newDeckButton").addEventListener("click", function (event) {
	event.preventDefault();
	const url1 = "https://deckofcardsapi.com/api/deck/new/";
	fetch(url1)
		.then(function (response) {
			return response.json();
		}).then(function (json) {
			deckName = json.deck_id;
			console.log(deckName);
			hand = "";
			document.getElementById("yourHand").innerHTML = "";
		});
});
document.getElementById("shuffleButton").addEventListener("click", function (event) {
	event.preventDefault();
	const url2 = "https://deckofcardsapi.com/api/deck/" + deckName + "/shuffle/?remaining+true";
	fetch(url2)
		.then(function (response) {
			return response.json();
		}).then(function (json) {
			return json;
		});
});
document.getElementById("drawButton").addEventListener("click", function (event) {
	event.preventDefault();
	const value = document.getElementById("drawNumber").value;
	if (value === "") { return; }
	if (parseInt(value) > 52 || parseInt(value) == 0) { return; }
	console.log(value);
	const url3 = "https://deckofcardsapi.com/api/deck/" + deckName + "/draw/?count=" + value;
	fetch(url3)
		.then(function (response) {
			return response.json();
		}).then(function (json) {
			hand = "";
			for (let i = 0; i < json.cards.length; i++) {
				hand += '<div id="oneCard"><img src="https://deckofcardsapi.com/static/img/' + json.cards[i].code + '.png"/></div>';
			}
			document.getElementById("yourHand").innerHTML += hand;
		});
});

let app = new Vue({
	
})