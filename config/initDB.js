const sequelize = require("./database");
const Book = require("../models/book");
const User = require("../models/user");
const Transaction = require("../models/transaction");

const initDB = async () => {
    try{
        await sequelize.sync({alert:true});
        console.log('Database & tables created !');
    }catch(err){
        console.error('error syncing database',err);
    }
};
module.exports = initDB;