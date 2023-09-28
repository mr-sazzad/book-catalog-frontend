import { IBook } from './RecentlyAdded';

export interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="book-card flex flex-col">
      <img src={book.Image} className="h-36 object-contain " />
      <p className="font-semibold text-xl">{book.Title}</p>
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
