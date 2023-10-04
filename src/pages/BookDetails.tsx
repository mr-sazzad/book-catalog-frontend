import {
  useDeleteSingleBookMutation,
  useGetBookReviewsQuery,
  useGetSingleBookQuery,
  usePostBookReviewMutation,
} from '@/redux/api/apiSlice';
import { useAppSelector } from '@/redux/hooks';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { GoPerson } from 'react-icons/go';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);

  const { data: comments } = useGetBookReviewsQuery(id);

  const [postBookReview] = usePostBookReviewMutation();

  const { register, handleSubmit, reset } = useForm();

  const { data } = useGetSingleBookQuery(id);

  console.log(data, 'Book');

  const [deleteBook] = useDeleteSingleBookMutation();

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't to delete this book!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(id);
        Swal.fire('Deleted!', 'Book has been deleted.', 'success');
      }
    });
    navigate('/books');
  };

  const handleReview: SubmitHandler<FieldValues> = (data) => {
    if (!user.email) {
      navigate('/login');
    } else if (user.email) {
      postBookReview({ id, data });
    }
    reset();
  };

  return (
    <div className="mx-[50px] flex flex-col mt-10">
      <div className="flex flex-col justify-center md:flex-row gap-10 items-center md:justify-around border-b-[1px] pb-10">
        <div>
          <span className="font-semibold text-xl pl-2 border-l-[3px] border-indigo-400">
            {data?.data?.Title}
          </span>
          <p className="text-lg my-3">Genre: {data?.data?.Genre}</p>
          <p className="text-lg mb-3">Author: {data?.data?.Author}</p>
          <p className="text-lg mb-3">Date: {data?.data?.PublishedDate}</p>
          <div className="card-actions justify-between">
            <Link
              to={`/books/${id}`}
              className="btn bg-indigo-400 text-white hover:text-black transition"
            >
              Edit Book
            </Link>
            <button
              className="btn bg-red-400 text-white transition"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="relative group">
          <img
            src={data?.data?.Image}
            alt="book-image"
            className="h-96 rounded-xl opacity-70 hover:opacity-100 transition duration-500"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-5xl font-extrabold text-indigo-400 group-hover:text-indigo-600 transition duration-500">
              {data?.data?.Title}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 gap-5">
        <form className="relative" onSubmit={handleSubmit(handleReview)}>
          <input
            type="text"
            className="w-full px-5 py-2 rounded-full outline-none focus:outline-none border border-black"
            placeholder="Leave A Review"
            {...register('review', { required: true })}
          />
          <button className="absolute top-[5px] right-2" type="submit">
            <p className="bg-indigo-400 py-1 px-3 rounded-full text-white">
              Push Your Review
            </p>
          </button>
        </form>

        <div className="mb-10">
          <span className="border-2 py-2 px-5 border-indigo-300 rounded-full text-indigo-500 font-medium">
            Reviews Section
          </span>
          <div className="flex flex-col gap-3 mt-5">
            {Array.isArray(comments?.data) ? (
              comments?.data.map((comment: any) => (
                <div key={comment._id}>
                  <div className="flex items-center flex-row gap-3">
                    <div className="border p-1 text-lg rounded-full border-indigo-500">
                      <GoPerson />
                    </div>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No comments available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
