console.log("JS file is connected to HTML! Woo!")
var CardOne = "Queen";
var Cardtwo = "King";
var CardThree = "Queen";
var CardFour = "King";
/*if (CardOne) === (CardThree) {
	window.alert(" You found a match!")

}
else if (Cardtwo === CardFour) {
	window.alert("you found a match!")
}
else {window.alert("Sorry, try again.")}*/
var cards = ["King", "Queen", "king", "Queen"];
var Cardsinplay = [];
var Gameboard = document.getElementsById("game-board");
function createGameboard(){
	for (var i = 0; i < cards.lenght; i++){
		var cardelement = document.create('div');
		cardelement.classname = 'Card';
		cardelement.setAttribute('data-card', cards[i]);
		cardelement.addEventListner('click', isTwoCards);
		Gameboard.appendChild(cardelement);
		Gameboard.appendChild(cardelement);
	}function isTwoCards() {
		cardsinplay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
		if (this.getAttribute(data-card) == "King"){
			this.innerHTML = "<img src='http://i.imgur.com/r8DNi28m.png'>";
			else{
				this.innerHTML = "<img src='http://i.imgur.com/Fu55eJnm.png'>"
			}
		if (cardsinplay.length ===2){
			isMatch(cardsinplay);
			cardsinplay = [];
		}

			}
	function isMatch(cards){
		if (cards[0] === cards[1]){
			alert("Yes, you have a match!");
		}else {"Sorry, try again."};
	}
		}
		// body...
	}

}



}
