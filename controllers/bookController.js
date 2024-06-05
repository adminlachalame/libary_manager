const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
    try{
        const book = await Book.findAll();
        res.json(book);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.createBook = async (req, res) => {
    try{
        const book = await Book.create(req.body);
        res.json(book);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.updateBook = async (req, res) => {
    try{
        const book = await Book.findByPk(req.params.id);
        if(!book){
            res.status(400).json({error: 'Book not found'});
        }
        await book.update(req.body);
        res.json(book);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.deleteBook = async (req, res) => {
    try{
        const book = await Book.findByPk(req.params.id);
        if(!book){
            res.status(400).json({error: 'Book not found'});
        }
        await book.remove();
        res.json(book);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};