import { useGetAllBooksQuery } from '@/redux/api/apiSlice';
import { IBook } from './RecentlyAdded';
import SIngleBook from './SIngleBook';

interface FiltersType {
  title?: boolean;
  author?: boolean;
  genre?: boolean;
}

interface AllBooksProps {
  searchValue: string;
  Filters: FiltersType;
}

const AllBooks: React.FC<AllBooksProps> = ({ searchValue, Filters }) => {
  const { data } = useGetAllBooksQuery(undefined);

  const books = data?.data;

  let filteredData: IBook[] = [];

  if (books) {
    filteredData = books.filter((book: IBook) => {
      const title = book.Title.toLowerCase();
      const filterTitleValue = book.Title;
      const author = book.Author.toLowerCase();
      const filterAuthorValue = book.Author;
      const genre = book.Genre.toLowerCase();
      const filterGenreValue = book.Genre;
      const searchText = searchValue.toLowerCase();
      const filterText = searchValue;

      // Check if any of the filter options is selected or if there's a search term match
      const filterTitle =
        Filters.title && filterTitleValue.includes(filterText);
      const filterAuthor =
        Filters.author && filterAuthorValue.includes(filterText);
      const filterGenre =
        Filters.genre && filterGenreValue.includes(filterText);

      // Include the book if any filter option is selected or there's a search term match
      const noFiltersSelected =
        !Filters.title && !Filters.author && !Filters.genre;
      return (
        filterTitle ||
        filterAuthor ||
        filterGenre ||
        (noFiltersSelected &&
          (title.includes(searchText) ||
            author.includes(searchText) ||
            genre.includes(searchText)))
      );
    });
  }

  return (
    <div className="recent-add">
      <div className="recent-all-books">
        {filteredData.map((book: IBook) => (
          <div className="books-card" key={book._id}>
            <SIngleBook book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
