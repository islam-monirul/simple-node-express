const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from Node js");
});

const users = [
  { id: 1, name: "Shabana", email: "Shabana@gmail.com", phone: "017888888888" },
  { id: 2, name: "Shabnur", email: "Shabnur@gmail.com", phone: "017888888888" },
  {
    id: 3,
    name: "Srabonti",
    email: "Srabonti@gmail.com",
    phone: "017888888888",
  },
  { id: 4, name: "Soniya", email: "Soniya@gmail.com", phone: "017888888888" },
  { id: 5, name: "Susmita", email: "Susmita@gmail.com", phone: "017888888888" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(users[id]);
});

// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  console.log("Hitting the post", req.body);

  res.json(newUser);
});

app.listen(port, () => {
  console.log("Listening to port : ", port);
});
