import { IBook } from './RecentlyAdded';

export interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="book-card">
      <h3>
        <span>{book.Title}</span>
      </h3>
      <p className="pt-5">
        <span>Author: </span>
        {book.Author}
      </p>
      <p>
        <span className="gree">Genre:</span> {book.Genre}
      </p>
      <p>
        <span>Date:</span> {book.PublishedDate}
      </p>
    </div>
  );
};

export default BookCard;
