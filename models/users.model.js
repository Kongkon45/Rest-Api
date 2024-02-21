const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    name: "Kongkon Jowarder",
    email: "kongkon@gmail.com",
  },
  {
    id: uuidv4(),
    name: "Dalim",
    email: "dalim@gmail.com"
  }
];


module.exports = users;
