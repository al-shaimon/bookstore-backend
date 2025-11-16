import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import { mongoDBURL } from './config/config.js';

const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publishYear: 1960,
  },
  {
    title: '1984',
    author: 'George Orwell',
    publishYear: 1949,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishYear: 1925,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publishYear: 1813,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publishYear: 1951,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publishYear: 1937,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    publishYear: 1997,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    publishYear: 1954,
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    publishYear: 1945,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    publishYear: 1932,
  },
  {
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    publishYear: 1950,
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    publishYear: 1847,
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    publishYear: 1847,
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    publishYear: 1851,
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    publishYear: -800,
  },
  {
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    publishYear: 1320,
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    publishYear: 1866,
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    publishYear: 1880,
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    publishYear: 1869,
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    publishYear: 1877,
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    publishYear: 1890,
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    publishYear: 1818,
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    publishYear: 1897,
  },
  {
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    publishYear: 1892,
  },
  {
    title: "Alice's Adventures in Wonderland",
    author: 'Lewis Carroll',
    publishYear: 1865,
  },
  {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    publishYear: 1943,
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    publishYear: 1967,
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    publishYear: 1988,
  },
  {
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    publishYear: 2003,
  },
  {
    title: 'Life of Pi',
    author: 'Yann Martel',
    publishYear: 2001,
  },
  {
    title: 'The Book Thief',
    author: 'Markus Zusak',
    publishYear: 2005,
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    publishYear: 2008,
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    publishYear: 2003,
  },
  {
    title: 'Angels & Demons',
    author: 'Dan Brown',
    publishYear: 2000,
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    publishYear: 2005,
  },
  {
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    publishYear: 2012,
  },
  {
    title: 'The Fault in Our Stars',
    author: 'John Green',
    publishYear: 2012,
  },
  {
    title: 'The Perks of Being a Wallflower',
    author: 'Stephen Chbosky',
    publishYear: 1999,
  },
  {
    title: 'The Bell Jar',
    author: 'Sylvia Plath',
    publishYear: 1963,
  },
  {
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    publishYear: 1969,
  },
  {
    title: 'Catch-22',
    author: 'Joseph Heller',
    publishYear: 1961,
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    publishYear: 1953,
  },
  {
    title: "The Handmaid's Tale",
    author: 'Margaret Atwood',
    publishYear: 1985,
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    publishYear: 1859,
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    publishYear: 1861,
  },
  {
    title: 'Oliver Twist',
    author: 'Charles Dickens',
    publishYear: 1838,
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    publishYear: 1939,
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    publishYear: 1937,
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding',
    publishYear: 1954,
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    publishYear: 2006,
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoDBURL);
    console.log('✅ Connected to MongoDB');

    // Clear existing books
    const deleteResult = await Book.deleteMany({});
    console.log(`🗑️  Deleted ${deleteResult.deletedCount} existing books`);

    // Insert new books
    const insertedBooks = await Book.insertMany(books);
    console.log(`📚 Successfully seeded ${insertedBooks.length} books`);

    // Display some sample books
    console.log('\n📖 Sample books added:');
    insertedBooks.slice(0, 5).forEach((book, index) => {
      console.log(`   ${index + 1}. "${book.title}" by ${book.author} (${book.publishYear})`);
    });
    console.log(`   ... and ${insertedBooks.length - 5} more books\n`);

    console.log('✨ Database seeding completed successfully!');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('👋 Disconnected from MongoDB');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
