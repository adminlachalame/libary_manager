const User = require('../models/user');

exports.getAllUser = async (req,res) =>
{
    try{
        const users = await User.findAll();
        res.json(users);
    }catch (err){
    res.status(500).json({error: err.message});}
};
exports.createUser = async (req,res)=>{
    try{
        const user = await User.create(req.body);
        res.json(user);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.updateUser = async (req,res)=>{
    try{
        const user = await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({error:'user not found'});
        }
        await user.update(req.body);
        res.json(user);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        await user.destroy();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
