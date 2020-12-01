import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  // {
  //   firstName: "Alex",
  //   lastName: "Frank",
  //   age: 24,
  // },
  // {
  //   firstName: "Jane",
  //   lastName: "Doe",
  //   age: 26,
  // },
];

router.get("/", (req, res) => res.send(users));

router.post("/", (req, res) => {
  const newUser = req.body;
  users.push({ ...newUser, id: uuidv4() });
  res.send(
    `User ${newUser.firstName} ${newUser.lastName} has been added to the database.`
  );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with id ${id} has been removed from the database.`);
});

export default router;
