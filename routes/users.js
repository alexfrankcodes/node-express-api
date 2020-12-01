import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [
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

export default router;
