import { Link } from 'react-router-dom';
import { BookCardProps } from './BookCard';

const SIngleBook = ({ book }: BookCardProps) => {
  return (
    <div className="book-card single-book-card">
      <Link to={`book-details/${book._id}`}>
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
      </Link>
    </div>
  );
};

export default SIngleBook;
