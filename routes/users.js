import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "Alex",
    lastName: "Frank",
    age: 24,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 26,
  },
];

router.get("/", (req, res) => res.send(users));

router.post("/", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send(
    `User ${newUser.firstName} ${newUser.lastName} has been added to the database.`
  );
});

export default router;
