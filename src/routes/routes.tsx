import App from '@/App';
import EditBook from '@/components/EditBook';
import BookDetails from '@/pages/BookDetails';
import Books from '@/pages/Books';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NewBook from '@/pages/NewBook';
import Signup from '@/pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import PrivetRoute from './PrivetRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/books/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/books/:id',
        element: <EditBook />,
      },
      {
        path: '/add-new',

        element: (
          <PrivetRoute>
            <NewBook />,
          </PrivetRoute>
        ),
      },
      {
        path: '/sign-up',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default routes;
