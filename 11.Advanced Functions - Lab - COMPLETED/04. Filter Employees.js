function filterEmployees(data, criteria) {
  let counter = 0;
  let [key, val] = criteria.split("-");
  let parsedData = JSON.parse(data);
  let filtered = parsedData.filter((el) => {
    if (el[key] === val) {
      return true;
    } else if (key === "all") {
      return true;
    } else {
      return false;
    }
  });
  filtered.forEach((el) => {
    console.log(
      `${counter}. ${el["first_name"]} ${el["last_name"]} - ${el["email"]}`
    );
    counter++;
  });
}
filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "all"
);
