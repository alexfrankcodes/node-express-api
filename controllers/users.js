import { v4 as uuidv4 } from "uuid";

let users = [];

export const getAllUsers = (req, res) => res.send(users);

export const createUser = (req, res) => {
  const newUser = req.body;
  users.push({ ...newUser, id: uuidv4() });
  res.send(
    `User ${newUser.firstName} ${newUser.lastName} has been added to the database.`
  );
};

export const getUserByID = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUserByID = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with id ${id} has been removed from the database.`);
};

export const updateUserByID = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;
  res.send(`User with id ${id} has been updated`);
};
