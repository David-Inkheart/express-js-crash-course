# express-js-crash-course

> #### This is a basic CRUD application using ExpressJS. RESTful API is used to perform CRUD operations on a book collection. Handlebars is used as the view engine.

> A mix of both MVC and RESTful API architecture is used in this project. The MVC architecture is used to render the views and the RESTful API architecture is used to perform CRUD operations on the book collection. While apps like this are usually built using one architecture, I wanted to try out a mix of both architectures, so this serves as a template, a good reference and learning experience for me.


## Quick Start

```bash
# Install dependencies
npm install

# Serve on localhost:5000
npm run dev
```

## Endpoints

### Get All Books

```bash
GET /api/books
```

### Get Single Book

```bash
GET /api/books/:id
```

### Delete Book

```bash
DELETE /api/books/:id
```

### Add Book

```bash
POST /api/books
```

```bash
# Request sample
{
  "title": "Book Title",
  "author": "Book Author",
  "genre": "Book Genre"
}
```

### Update Book

```bash
PUT /api/books/:id
```

```bash
# Request sample
{
  "title": "Updated Title",
  "author": "Updated Author",
  "genre": "Updated Genre"
}
```
