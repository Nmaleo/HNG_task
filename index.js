const express = require("express");

let server = express();
let weekdays = [
  "Monday",
  "Tuesday,",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

server.get("/api", (req, res) => {
  let responce = {
    slack_name: req.query.slack_name,
    current_day: weekdays[new Date().getDay() - 1],
    utc_time: new Date().toISOString().split(".")[0] + "Z",
    track: req.query.track,
    github_file_url:
      "https://github.com/Nmaleo/HNG_task/index.js",
    github_repo_url: "https://github.com/Nmaleo/HNG_task",
    status_code: 200,
  };
  let data = JSON.stringify(responce)
  res.json(data);
});

server.listen(9000, () => {
  console.log("server running on port 9000");
});
