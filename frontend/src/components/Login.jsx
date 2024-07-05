
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error messages

    // Mock API call
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Simulate successful login
      console.log('Login successful:', data);
      navigate('/main'); // Redirect to the main page
    } else {
      setError(data.message || 'An error occurred');
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 ">
        <Link to='/'>back</Link>
        <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <label className="block text-gray-700">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='   Enter email'
                className="w-full p-2 border border-gray-300 rounded-xl mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='   Enter password'
                className="w-full p-2  border border-gray-300 rounded-xl mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end text-gray-700  text-sm">Forgot Password ?</div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 font-medium rounded-xl hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>

            <div className="flex justify-start text-gray-700 pt-3 text-xs">
              Continue with
            </div>
            <hr class="h-px mb-4 bg-gray-200 border-0"></hr>

            <div className="flex justify-between items-center ">
              <button className='border rounded-xl shadow pl-11 pr-12 pt-2 pb-2 flex flex-row justify-center item-center gap-3'>
                <img src="https://th.bing.com/th/id/OIP.Din44az7iZZDfbsrD1kfGQHaHa?rs=1&pid=ImgDetMain" alt="google image" className='w-[24px]' />
                <div>Google</div>
              </button>
              <button className='border rounded-xl shadow ml-3 pl-11 pr-12 pt-2 pb-2 flex flex-row justify-center item-center gap-3'>
                <img src="https://www.svgrepo.com/show/75820/linkedin.svg" alt="google image" className='w-[24px]' />
                <div>LinkedIn</div>
              </button>

            </div>
        </div>
      </div>


    </>
  );
};

export default LoginPage;

