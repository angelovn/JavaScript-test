// function solution(command) {
//   let totalVotes = this.upvotes + this.downvotes;
//   let bal = this.upvotes - this.downvotes;
//   switch (command) {
//     case "upvote":
//       this.upvotes++;
//       break;
//     case "downvote":
//       this.downvotes++;
//       break;
//     case "score":
//       let arr = [];
//       let balance = 0;
//       let status = "";
//       let inflatedUpvote = 0;
//       let inflatedDownvote = 0;
//       let inflatedScore = 0;
//       if (this.upvotes + this.downvotes > 50) {
//         if (this.upvotes > this.downvotes) {
//           inflatedScore = Math.ceil(this.upvotes * 0.25);
//           inflatedUpvote = inflatedScore + this.upvotes;
//           inflatedDownvote = inflatedScore + this.downvotes;
//           balance = this.upvotes - this.downvotes;
//           if (totalVotes < 10) {
//             status = "new";
//           } else if (this.upvotes > 0.66 * totalVotes) {
//             status = "hot";
//           } else if (totalVotes > 100 && bal >= 0) {
//             status = "controversial";
//           } else if (bal < 0) {
//             status = "unpopular";
//           } else {
//             status = "new";
//           }
//           arr.push(inflatedUpvote, inflatedDownvote, balance, status);
//         } else if (this.upvotes < this.downvotes) {
//           inflatedScore = Math.ceil(this.downvotes * 0.25);
//           inflatedDownvote = inflatedScore + this.downvotes;
//           inflatedUpvote = inflatedScore + this.upvotes;
//           balance = this.upvotes - this.downvotes;
//           if (totalVotes < 10) {
//             status = "new";
//           } else if (this.upvotes > 0.66 * totalVotes) {
//             status = "hot";
//           } else if (totalVotes > 100 && bal >= 0) {
//             status = "controversial";
//           } else if (bal < 0) {
//             status = "unpopular";
//           } else {
//             status = "new";
//           }
//           arr.push(inflatedUpvote, inflatedDownvote, balance, status);
//         } else if (this.upvotes === this.downvotes) {
//           inflatedScore = Math.ceil(this.downvotes * 0.25);
//           inflatedUpvote = inflatedScore + this.upvotes;
//           inflatedDownvote = inflatedScore + this.downvotes;
//           balance = this.upvotes - this.downvotes;
//           if (totalVotes < 10) {
//             status = "new";
//           } else if (this.upvotes > 0.66 * totalVotes) {
//             status = "hot";
//           } else if (totalVotes > 100 && bal >= 0) {
//             status = "controversial";
//           } else if (bal < 0) {
//             status = "unpopular";
//           } else {
//             status = "new";
//           }
//           arr.push(inflatedUpvote, inflatedDownvote, balance, status);
//         }
//       } else {
//         inflatedUpvote = this.upvotes;
//         inflatedDownvote = this.downvotes;
//         balance = inflatedUpvote - inflatedDownvote;
//         if (totalVotes < 10) {
//           status = "new";
//         } else if (this.upvotes > 0.66 * totalVotes) {
//           status = "hot";
//         } else if (totalVotes > 100 && bal >= 0) {
//           status = "controversial";
//         } else if (bal < 0) {
//           status = "unpopular";
//         } else {
//           status = "new";
//         }
//         arr.push(inflatedUpvote, inflatedDownvote, balance, status);
//       }

//       return arr;
//   }
// }

function result(command) {
  if (command === "upvote") return this.upvotes++;
  if (command === "downvote") return this.downvotes++;

  let upvote = this.upvotes;
  let downvote = this.downvotes;
  let totalVotes = upvote + downvote;
  let balance = upvote - downvote;

  function ratingState() {
    if (totalVotes < 10) return "new";
    if (upvote > totalVotes * 0.66) return "hot";
    if (balance >= 0 && totalVotes > 100) return "controversial";
    if (balance < 0) return "unpopular";
    return "new";
  }

  if (totalVotes > 50) {
    let inflateVote = Math.ceil(Math.max(upvote, downvote) * 0.25);
    return [
      upvote + inflateVote,
      downvote + inflateVote,
      balance,
      ratingState(),
    ];
  }

  return [upvote, downvote, balance, ratingState.call(this)];
}
// let post = {
//   id: "3",
//   author: "emil",
//   content: "wazaaaaa",
//   upvotes: 100,
//   downvotes: 100,
// };
// solution.call(post, "upvote");
// solution.call(post, "downvote");
// let score = solution.call(post, "score");
// console.log(score);
// for (let i = 0; i < 50; i++) {
//   solution.call(post, "downvote");
// }
// score = solution.call(post, "score");
// console.log(score);
