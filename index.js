const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
// const logger = require('./middleware/logger');
const books = require('./Books');


const app = express();

// Init middleware
// app.use(logger);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Handlebars Middleware for templating engine
// Added `.engine` to the end of the exphbs variable because it was throwing an error.`
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware for API Routes
app.use(express.json());
// Handle form submissions with URL encoded data
app.use(express.urlencoded({ extended: false }));

// Homepage Route using template engine
app.get('/', (req, res) => res.render('index', {
    title: 'Book App',
    books
}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Books API Routes
app.use('/api/books', require('./routes/api/books'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));