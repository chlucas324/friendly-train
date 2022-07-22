const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "chlucas324",
    email: "chlucas324@gmail.com",
    password: "password123",
  },
  {
    username: "callie3",
    email: "callie3@gmail.com",
    password: "password123",
  },
  {
    username: "stella",
    email: "stella4@gmailcom",
    password: "password123",
  },
  {
    username: "heidi",
    email: "heidi22@gmail.com",
    password: "password123",
  },
  {
    username: "darcy",
    email: "darcy@gmail.com",
    password: "password123",
  },
  {
    username: "lucas",
    email: "lucas@gmail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
