// 1. Create a class named Book with a constructor that initializes a title, author, and year properties.
// The title and author should be strings and the year should be a number

// 2. Create a subclass named Ebook that extends Book.

// 3. The Ebook class should have an additional property fileSize which is a number and a method download()
// that returns a string with the title of the ebook and its fileSize.

class Book {
  constructor(title, author, year) {
    if (!Number.isFinite(year) || year <= 0) throw new Error(`Invalid year: ${year}`);
    if (typeof author !== 'string') throw new Error(`Author need to be a string`);
    if (typeof title !== 'string') throw new Error(`Title need to be a string`);

    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    if (!Number.isFinite(fileSize) || fileSize <= 0) throw new Error(`Invalid file size: ${fileSize}`);

    super(title, author, year);
    this.fileSize = fileSize;
  }

  download() {
    return `Title: ${this.title}, file size: ${this.fileSize}`;
  }
}
