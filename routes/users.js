import express from "express";

import {
  createUser,
  deleteUserByID,
  getAllUsers,
  getUserByID,
  updateUserByID,
} from "../controllers/users.js";

const router = express.Router();

let users = [];

router.get("/", getAllUsers);

router.post("/", createUser);

router.get("/:id", getUserByID);

router.delete("/:id", deleteUserByID);

router.patch("/:id", updateUserByID);

export default router;
