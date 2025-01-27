import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import closeIcon from '../../assets/svg/closeIcon.svg';

interface RegisterModalProps {
  handleClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ handleClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = (e: React.FormEvent): void => {
    e.preventDefault();
    setError(null);

    axios
      .post(
        `${API_URL}/auth/register`,
        {
          email,
          password,
          first_name: firstName,
          last_name: lastName,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        handleClose();
      })
      .catch((error) => {
        if (error.response.status !== 401) {
          setError(error.response.data.message);
          console.error({
            message: 'Something went wrong when registering the user',
            description: error,
          });
        } else {
          console.error('Registration error:', error);
        }
      });
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <button
            className="absolute top-2 right-2 p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={handleClose}
          >
            <img className="w-6 h-6" src={closeIcon} alt="Modal Close Icon" />
          </button>

          <div className="bg-white p-6 space-y-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Register to ScholarX
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleRegister}>
              <div>
                <label
                  htmlFor="firstname lastname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <div className="flex">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 mr-2"
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    required
                  />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>

              {error !== null ? (
                <div
                  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
                  role="alert"
                >
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              >
                Register to ScholarX
              </button>
              <div className="text-sm font-medium text-gray-900">
                Already have an account?{' '}
                <a className="text-blue-600 hover:underline">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
