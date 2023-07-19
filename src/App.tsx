import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
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
