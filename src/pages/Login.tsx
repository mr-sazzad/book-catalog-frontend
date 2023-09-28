import { useAppDispatch } from '@/redux/hooks';
import { loginUser } from '@/redux/users/userSlice';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    dispatch(loginUser({ email: data.email, password: data.password }));

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="bg-gray-100 rounded-lg shadow p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Log In
          </button>
        </form>
        <p className="login-p mt-5">
          New To Book Catalog{' '}
          <Link to="/sign-up">
            <button className="text-blue-500 font-semibold border-b-2 border-blue-500">
              Sign-Up
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
