class Book{
    constructor(title,genre,author,read,readDate){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate
    }

    toString(){
        return `Titulo: ${this.title} <br>Genero: ${this.genre}<br>Autor: ${this.author}<br>Leido: ${this.read}<br>Date: ${this.readDate}`;
    }
    setRead(valor){
        this.read = valor;
    }
    setReadDate(){
        this.readDate = new Date();
    }
}

class BookList{
    constructor(numberBooksRead,numberBooksNotRead,nextBook,currentBookBeing,currentBookLast,arrayBooks){
        this.numberBooksRead = numberBooksRead;
        this.numberBooksNotRead = numberBooksNotRead;
        this.nextBook = nextBook;
        this.currentBookBeing = currentBookBeing;
        this.currentBookLast = currentBookLast;
        this.arrayBooks = arrayBooks;
    }

    add(book){
        this.arrayBooks.push(book);
    }

    finishCurrentBook(book){
        book.setRead(true);
        
    }
}

let book1 = new Book("La guia del ligue","Seducción","El padrino",false," ");
let book2 = new Book("Español lectura","Literatura","Paco aka El Chato",true,new Date());

document.getElementById("escribeAqui").innerHTML = book1.toString();
document.getElementById("escribeAqui2").innerHTML = book2.toString();