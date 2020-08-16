const fetch = require("node-fetch");

const name = process.argv[2];
// console.log(param[2])

const base = "https://api.github.com/users/";

fetch(base + name + "/repos")
  .then((res) => res.json())
  .then((body) => console.log(body));
