//? LOOK IF THERE IS A RETURN
function tickets(ticketsDescription, sortingCriteria) {
  class Ticket {
    constructor(destination, price, departed) {
      this.destination = destination;
      this.price = price;
      this.status = departed;
    }
  }
  let ticketObjArr = ticketsDescription.map((el) => {
    let [city, ticketPrice, status] = el.split("|");
    ticketPrice = Number(ticketPrice);
    let person = new Ticket(city, ticketPrice, status);
    return person;
  });
  let sorted = [];
  if (sortingCriteria === "price") {
    sorted = ticketObjArr.sort((a, b) => {
      let val1 = a[sortingCriteria];
      let val2 = b[sortingCriteria];
      return val1 - val2;
    });
  } else {
    sorted = ticketObjArr.sort((a, b) => {
      let val1 = a[sortingCriteria];
      let val2 = b[sortingCriteria];
      return val1.localeCompare(val2);
    });
  }
  return sorted;
}
// tickets(
//   [
//     "Philadelphia|94.20|available",
//     "New York City|95.99|available",
//     "New York City|95.99|sold",
//     "Boston|126.20|departed",
//   ],
//   "destination"
// );
tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "price"
);
