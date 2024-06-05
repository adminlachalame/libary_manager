const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const User = require('../models/user');
const Book = require('../models/book');

const Transaction = sequelize.define('Transaction', {
    userId:{
        type: DataTypes.INTEGER,
        references:{
            model: 'User',
            key:'id',
        }
    },
    bookId:{
        type: DataTypes.INTEGER,
        references:{
            model: 'Book',
            key:'id',
        }
    },
    borrowedAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    dueDate:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    returnedAt:{
        type: DataTypes.DATE,
        allowNull: true,
    }
});
module.exports = Transaction;