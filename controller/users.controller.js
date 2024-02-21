
const users = require('../models/users.model');
const { v4: uuidv4 } = require("uuid");

// get all users 
const getAllusers = (req, res)=>{
    res.status(200).json({users})
}

// create user 
const createUser = (req, res)=>{
    const newUser = {
        id : uuidv4(),
        name : req.body.name,
        email : req.body.email
    }
    users.push(newUser);
    res.status(200).json({users})
}

// update user 
const updateUser = (req, res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    users.filter((user)=>user.id === id).map((selectedUser)=>{
        selectedUser.name = name;
        selectedUser.email = email;
    });
    res.status(200).json(users)
}

//delete user 
const deleteUser = (req, res)=>{
    const id = req.params.id;
    const user = users.filter((user)=> user.id !==id)
    res.status(200).json(user)
}

module.exports = {getAllusers, createUser, updateUser, deleteUser }