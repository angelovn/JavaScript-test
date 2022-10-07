// function roadRadar(speed, place) {
//   let speedLimit = 0;
//   let status = "";
//   switch (place) {
//     case "motorway":
//       speedLimit = 130;
//       if (speed <= speedLimit) {
//         console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
//       } else {
//         if (speed - speedLimit <= 20) {
//           status = "speeding";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         } else if (speed - speedLimit <= 40) {
//           status = "excessive speeding";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         } else {
//           status = "reckless driving";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         }
//       }
//       break;
//     case "interstate":
//       speedLimit = 90;
//       if (speed <= speedLimit) {
//         console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
//       } else {
//         if (speed - speedLimit <= 20) {
//           status = "speeding";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         } else if (speed - speedLimit <= 40) {
//           status = "excessive speeding";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         } else {
//           status = "reckless driving";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         }
//       }
//       break;
//     case "city":
//       speedLimit = 50;
//       if (speed <= speedLimit) {
//         console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
//       } else {
//         if (speed - speedLimit <= 20) {
//           status = "speeding";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         } else if (speed - speedLimit <= 40) {
//           status = "excessive speeding";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         } else {
//           status = "reckless driving";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         }
//       }
//       break;
//     case "residential":
//       speedLimit = 20;
//       if (speed <= speedLimit) {
//         console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
//       } else {
//         if (speed - speedLimit <= 20) {
//           status = "speeding";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         } else if (speed - speedLimit <= 40) {
//           status = "excessive speeding";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         } else {
//           status = "reckless driving";
//           console.log(
//             `The speed is ${
//               speed - speedLimit
//             } km/h faster than the allowed speed of ${speedLimit} - ${status}`
//           );
//         }
//       }
//       break;
//   }
// }

function solve(speed, area) {
  let allowedSpeeds = {
    "motorway": 130,
    "interstate": 90,
    "city": 50,
    "residential": 20,
  };
  if (speed > allowedSpeeds[area]) {
    let speeding = speed - allowedSpeeds[area];
    logSpeeding(speeding);
  }

  function logSpeeding(speeding) {
    if (speeding <= 20) {
      console.log("speeding");
    } else if (speeding <= 40) {
      console.log("excessive speeding");
    } else {
      console.log("reckless driving");
    }
  }
}
// roadRadar(40, "city");
// roadRadar(21, "residential");
// roadRadar(120, "interstate");
solve(200, "motorway");
