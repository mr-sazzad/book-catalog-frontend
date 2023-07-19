import Footer from '@/components/Footer';
import {
  useDeleteSingleBookMutation,
  useGetSingleBookQuery,
} from '@/redux/api/apiSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useGetSingleBookQuery(id);

  const [deleteBook, _options] = useDeleteSingleBookMutation();

  const handleDelete = () => {
    deleteBook(id);
    navigate('/books');
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
      <div className="card-body">
        <h2 className="card-title">{data?.data?.Title}</h2>
        <p>{data?.data?.Genre}</p>
        <p>{data?.data?.Author}</p>
        <p>{data?.data?.PublishedDate}</p>
        <div className="card-actions justify-between">
          <Link to={`/books/${id}`} className="btn bg-green-300">
            Edit
          </Link>
          <button className="btn bg-red-400" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDetails;
