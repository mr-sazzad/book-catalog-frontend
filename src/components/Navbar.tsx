import { auth } from '@/Firebase/firebase';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setUser } from '@/redux/users/userSlice';
import { signOut } from 'firebase/auth';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonCheckFill, BsPersonFillSlash } from 'react-icons/bs';
import { GiBookshelf } from 'react-icons/gi';
import { SiBookstack } from 'react-icons/si';
import { TbSquareRoundedPlusFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'You want to Log Out!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Log Out!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          signOut(auth).then(() => {
            dispatch(setUser(null));
          });
          swalWithBootstrapButtons.fire(
            'Log Out !',
            'Log Out Successfully !.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'You are Now Safe :)',
            'error'
          );
        }
      });
  };
  return (
    <div className="drawer drawer-end z-50">
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
                {!user.email && (
                  <>
                    <Link to="login">
                      <div>
                        <BsFillPersonCheckFill />
                        <p>Login</p>
                      </div>
                    </Link>
                  </>
                )}
                {user.email && (
                  <>
                    <button onClick={handleLogout}>
                      <div className="flex gap-1 justify-center items-center">
                        <BsPersonFillSlash />
                        <p>Logout</p>
                      </div>
                    </button>
                  </>
                )}
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
            {!user.email && (
              <>
                <Link to="login">
                  <div>
                    <BsFillPersonCheckFill />
                    <p>Login</p>
                  </div>
                </Link>
              </>
            )}
            {user.email && (
              <>
                <button onClick={handleLogout}>
                  <div className="flex gap-1 justify-center items-center">
                    <BsPersonFillSlash />
                    <p>Logout</p>
                  </div>
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
