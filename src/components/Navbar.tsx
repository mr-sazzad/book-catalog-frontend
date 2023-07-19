import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { GiBookshelf } from 'react-icons/gi';
import { SiBookstack } from 'react-icons/si';
import { TbSquareRoundedPlusFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-1 px-2 mx-2">
            <Link to="/" className="logo-link">
              <GiBookshelf className="book-logo" />
              <h2>Book Catalog</h2>
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal menu-links">
              {/* Navbar menu content here */}
              <li className="f-link">
                <Link to="/">
                  <div>
                    <AiFillHome className="home-icon" />
                    <p>Home</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/books">
                  <div>
                    <SiBookstack className="book-icon" />
                    <p>Books</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="add-new">
                  <div>
                    <TbSquareRoundedPlusFilled />
                    <p>Add New</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="login">
                  <div>
                    <BsFillPersonCheckFill />
                    <p>Login</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 mobile-menu-links">
          {/* Sidebar content here */}
          <li className="f-link">
            <Link to="/">
              <div>
                <AiFillHome className="home-icon" />
                <p>Home</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/books">
              <div>
                <SiBookstack className="book-icon" />
                <p>Books</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="add-new">
              <div>
                <TbSquareRoundedPlusFilled />
                <p>Add New</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="add-new">
              <div>
                <BsFillPersonCheckFill />
                <p>Sign up</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
