const {User} = require("../models/user")

async function getAllUsers(req, res){
    const users = await User.find()
    return res.json(users)
}

async function getUserById(req, res){
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
}

async function createUser(req, res){
    try {
        const { name, email, age } = req.body;
        const newUser = await User.create({ name, email, age });
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function updateUserById(req, res){
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    return res.json(updatedUser);
}

async function deleteUserById(req, res){
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    return res.json({ message: "User deleted successfully" });
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}