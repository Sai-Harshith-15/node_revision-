const express = require("express");
const app = express();
const UserModel = require("./usermodel");
app.get("/", (req, res) => {
  res.send("hey");
});

//create
app.get("/create", async (req, res) => {
  let createdUser = await UserModel.create({
    name: "sai",
    userName: "sai harshith",
    email: "sai@gmail.com",
  });
  res.send(createdUser);
});

//update
app.get("/update", async (req, res) => {
  let updatedUser = await UserModel.findOneAndUpdate(
    { userName: "sai harshith" },
    { name: "harshith" },
    { new: true }
  );
  res.send(updatedUser);
});

//read

app.get("/read", async (req, res) => {
  // let users = await UserModel.find({ userName: "sai harshith" });
  let users = await UserModel.find();
  res.send(users);
});

// find will give in array if there is no user in the array it will show the empty array.

//findOne will give the object if there is no data it will show the null value

//delete
app.get("/delete", async (req, res) => {
  let users = await UserModel.findOneAndDelete({ userName: "sai harshith" });
  res.send(users);
});

app.listen(3000);
