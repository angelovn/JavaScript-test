function playingCards(face, suit) {
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
  if (!validFaces.includes(face)) {
    throw new Error();
  }
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
playingCards("A", "S");
playingCards("10", "H");
playingCards("1", "C");
module.exports = { playingCards };
