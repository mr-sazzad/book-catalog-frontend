import { useGetAllBooksQuery } from '@/redux/api/apiSlice';
import { IBook } from './RecentlyAdded';
import SIngleBook from './SIngleBook';

const AllBooks = () => {
  const { data } = useGetAllBooksQuery(undefined);

  return (
    <div className="recent-add">
      <div className="recent-all-books">
        {data?.data?.map((book: IBook) => (
          <div className="books-card" key={book._id}>
            <SIngleBook book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
