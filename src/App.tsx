import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from './Firebase/firebase';
import Navbar from './components/Navbar';
import { useAppDispatch } from './redux/hooks';
import { setLoading, setUser } from './redux/users/userSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email as string));

        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div className="view-port">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
