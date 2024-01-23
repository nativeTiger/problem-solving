const fs = require("fs");
const csv = require("csv-parser");

// Load the user data from the CSV file
const userData = [];
fs.createReadStream("user_data.csv")
  .pipe(csv())
  .on("data", (row) => {
    userData.push(row);
  })
  .on("end", () => {
    // Specify the target user for recommendation
    const targetUser = "6468964d71d63aa410ca85cd";
    console.log(targetUser);
    // Filter the user data to exclude the target user
    const filteredData = userData.filter((user) => user._id !== targetUser);
    // Create a binary matrix for the specific column
    const columnValues = userData.map((user) => user.occupation);
    const columnMatrix = [];
    for (let i = 0; i < columnValues.length; i++) {
      const row = [];
      for (let j = 0; j < columnValues.length; j++) {
        row.push(columnValues[i] === columnValues[j] ? 1 : 0);
      }
      columnMatrix.push(row);
    }

    // Calculate the Jaccard similarity between the target user and each user in the filtered data
    const targetUserIndex = userData.findIndex(
      (user) => user._id === targetUser
    );
    console.log(targetUserIndex);
    const targetUserData = columnMatrix[targetUserIndex];
    console.log(columnMatrix);
    const similarityScores = [];
    for (let i = 0; i < filteredData.length; i++) {
      const userIndex = userData.findIndex(
        (user) => user._id === filteredData[i]._id
      );
      const userColumnData = columnMatrix[userIndex];
      const intersection = targetUserData.filter(
        (value, index) => value === 1 && userColumnData[index] === 1
      ).length;
      const union =
        targetUserData.filter((value) => value === 1).length +
        userColumnData.filter((value) => value === 1).length -
        intersection;
      const similarity = intersection / union;
      similarityScores.push(similarity);
    }

    // Get the index of the most similar users
    const mostSimilarUsersIndices = similarityScores
      .map((score, index) => [score, index])
      .sort(([score1], [score2]) => score2 - score1)
      .map(([, index]) => index);

    // Get the usernames of the most similar users
    const mostSimilarUsers = mostSimilarUsersIndices.map(
      (index) => filteredData[index]._id
    );

    // Print the recommended friends
    console.log(`Recommended friends for ${targetUser}:`);
    for (const user of mostSimilarUsers) {
      console.log(user);
    }
  });
