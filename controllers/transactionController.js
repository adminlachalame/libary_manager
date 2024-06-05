const Transaction = require('../models/transaction');
const Book = require('../models/book');

exports.borrowBook = async (req,res) =>{
    try{
        const { userId, bookId, dueDate} = req.body;
        const book = await Book.findByPk(bookId);
        if(!book || book.quantity < 1){
            return res.status(400).json({error: 'Book is not available'});
        }
        const transaction = await Transaction.create({userId, bookId,dueDate});
        await book.update({quantity: book.quantity - 1});
        res.json(transaction);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};
exports.returnBook = async (req,res) =>{
    try{
        const {transactionId} = req.body;
        const transaction = await Transaction.findByPk(transactionId);
    if(!transaction || transaction.returnedAt){
        return res.status(400).json({error:'Invalid transaction'});
    }
    const book = await Book.findByPk(transaction.bookId);
    await transaction.update({returnedAt: new Date()});
    await  book.update({quantity: book.quantity + 1});
    res.json(transaction);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.getTransactionHistory = async (req,res) =>{
    try{
        const transactions = await Transaction.findAll();
        res.json(transactions);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};