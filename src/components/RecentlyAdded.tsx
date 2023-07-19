import { useGetRecentBooksQuery } from '@/redux/api/apiSlice';
import BookCard from './BookCard';

export interface IBook {
  _id?: string;
  Title: string;
  Author: string;
  Genre: string;
  PublishedDate: string;
}

const NewBooks = () => {
  const { data } = useGetRecentBooksQuery(undefined);

  return (
    <div className="recent-add">
      <p>📖 Recently Added Books 📖</p>
      <div className="recent-all-books">
        {data?.data?.map((book: IBook) => (
          <div className="books-card" key={book.Title}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewBooks;
