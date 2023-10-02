import {
  useGetSingleBookQuery,
  useUpdateSingleBookMutation,
} from '@/redux/api/apiSlice';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

type FormData = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
};

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useGetSingleBookQuery(id);

  const book = data?.data;

  const { register, handleSubmit, reset } = useForm<FormData>();
  const [updateBook, _options] = useUpdateSingleBookMutation();

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
      image: data.image,
    };

    updateBook({ id, formattedData })
      .unwrap()
      .then((fulfilled) => {
        console.log(fulfilled);
        reset();
        navigate('/books');
      })

      .catch((rejected) => console.error(rejected));
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
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Image URL
        </label>
        <input
          type="text"
          id="image"
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Hosted Link Please"
          {...register('image', { required: true })}
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
      >
        Update The Book
      </button>
    </form>
  );
}

export default EditBook;
