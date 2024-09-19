class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name
        this.books = books
    }

    addBook(book) {
        this.books.push(book)
        return this
    }

    findBooksByAuthor(author) {
        return this.books.filter(book => {
            return book.author === author
        })
    }

    listAllBooks() {
        this.books.forEach(book => {
            console.log(`${book.title} - ${book.author} - ${book.pages} pages`)
        })
        return this
    }
}

class LibraryUser {
    constructor(name, library) {
        this.name = name
        this.library = library
        this.borrowedBooks = []
    }

    borrowBook(book) {
        if (!library.books.includes(book)) {
            console.log(`Книга "${book.title}" не найдена в библиотеке "${library.name}"`)
            return this
        }
        if (this.borrowedBooks.length >= 3) {
            console.log(`Пользователь ${this.name} достиг максимального числа взятых книг (3)`)
            return this
        }
        if (this.borrowedBooks.includes(book)) {
            console.log(`Книга "${book.title}" уже взята`)
            return this
        }
        this.borrowedBooks.push(book)
        console.log(`Книга "${book.title}" была взята пользователем ${this.name}`)
        return this
    }

    returnBook(book) {
        if (!this.borrowedBooks.includes(book)) {
            console.log(`Книга "${book.title}" не была взята пользователем ${this.name}`)
            return this
        }
        this.borrowedBooks.splice(this.borrowedBooks.indexOf(book), 1)
        console.log(`Книга "${book.title}" была возвращена пользователем ${this.name}`)
        return this
    }
}

let book1 = new Book('Книга1', '111', 100)
let book2 = new Book('Книга2', '222', 101)
let book3 = new Book('Книга3', '333', 102)
let book4 = new Book('Книга4', '444', 103)
let library = new Library('Библиотека', [book1, book2, book3])
library.addBook(book4)
console.log(library.findBooksByAuthor('111'))
console.log(library.listAllBooks())
let user1 = new LibraryUser('Читатель', library)
user1.borrowBook(book1).borrowBook(book2).borrowBook(book3).borrowBook(book4)
user1.returnBook(book1).borrowBook(book4)
console.log(user1.borrowedBooks)