import { usePostABookMutation } from '@/redux/api/apiSlice';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormData = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
};

function AddNewBook() {
  const { register, handleSubmit } = useForm<FormData>();
  const [postABook, _options] = usePostABookMutation();

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    const formattedData = {
      Title: data.title,
      Author: data.author,
      Genre: data.genre,
      PublishedDate: new Date(data.publicationDate).toLocaleDateString(
        'en-US',
        {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }
      ),
    };

    // send data to the backend
    postABook(formattedData);
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto mt-10 border p-8 rounded bg-zinc-200"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-300 rounded-md p-2 w-full"
          {...register('title', { required: true })}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="author"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          className="border border-gray-300 rounded-md p-2 w-full"
          {...register('author', { required: true })}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="genre"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Genre
        </label>
        <input
          type="text"
          id="genre"
          className="border border-gray-300 rounded-md p-2 w-full"
          {...register('genre', { required: true })}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="publicationDate"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Publication Date
        </label>
        <input
          type="date"
          id="publicationDate"
          className="border border-gray-300 rounded-md p-2 w-full"
          {...register('publicationDate', { required: true })}
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
      >
        Book Created
      </button>
    </form>
  );
}

export default AddNewBook;
