const express = require('express');
const router = express.Router();
const books = require('../../Books');
const uuid = require('uuid');

// Gets all books
router.get('/', (req, res) => res.json(books));

// Get single book
router.get('/:id', (req, res) => {
    const found = books.some(book => book.id === parseInt(req.params.id));

    if(found) {
        res.json(books.filter(book => book.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No book with the id of ${req.params.id}`});
    }
});

// Create book
router.post('/', (req, res) => {
    const newBook = {
        id: uuid.v4(),
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    };

    if(!newBook.title || !newBook.author || !newBook.genre) {
        return res.status(400).json({ msg: 'Please include a title, an author and a genre' });
    }

    books.push(newBook);
    // for RESTful API, you should return the object you just created
    res.json(books);

    // for templating engine, you should redirect to the homepage or list of books route after creating a new book
    // res.redirect('/');
});

// Update book

router.put('/:id', (req, res) => {
    const found = books.some(book => book.id === parseInt(req.params.id));

    if(found) {
        const updBook = req.body;
        books.forEach(book => {
            if(book.id === parseInt(req.params.id)) {
                book.title = updBook.title ? updBook.title : book.title;
                book.author = updBook.author ? updBook.author : book.author;
                book.genre = updBook.genre ? updBook.genre : book.genre;

                res.json({ msg: 'book updated', book });
            }
        });
    } else {
        res.status(400).json({ msg: `No book with the id of ${req.params.id}`});
    }
});

// Delete book
router.delete('/:id', (req, res) => {
    const found = books.some(book => book.id === parseInt(req.params.id));

    if(found) {
        res.json({
            msg: 'book deleted',
            books: books.filter(book => book.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({ msg: `No book with the id of ${req.params.id}`});
    }
});


module.exports = router;