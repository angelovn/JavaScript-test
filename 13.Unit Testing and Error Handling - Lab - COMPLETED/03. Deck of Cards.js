function printDeckOfCards(cards) {
  isInvalid = false;
  let deck = [];
  let validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  function playingCards(face, suit) {
    return {
      face,
      suit,
      toString() {
        switch (suit) {
          case "S":
            return `${this.face}\u2660`;
          case "H":
            return `${this.face}\u2665`;
          case "D":
            return `${this.face}\u2666`;
          case "C":
            return `${this.face}\u2663`;
        }
      },
    };
  }
  for (let i = 0; i < cards.length; i++) {
    const cardData = cards[i].split("");
    const [face, suit] = [
      cardData.slice(0, -1).join(""),
      cardData[cardData.length - 1],
    ];

    try {
      deck.push(playingCards(face, suit).toString());
    } catch (e) {
      console.log(`Invalid card: ${arr[i]}`);
      return;
    }
  }

  return deck.join(" ");
}
let n = printDeckOfCards(["10D", "10D", "KH", "2C"]);
console.log(n);
printDeckOfCards(["5S", "3D", "QD", "2C"]);
