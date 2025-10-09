import React, { useState } from 'react';
import { Mail, Lock, LogIn, UserPlus } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast'; // Import react-hot-toast components

const UserLogin = () => {
  // Separate state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Updated handler to clear fields and show a toast notification
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Simulate API call success (where you'd normally integrate Axios)
    console.log("Attempting login with Email:", email, "and Password:", password);

    // 2. Show success message using react-hot-toast
    toast.success('User successfully logged in!', {
        duration: 3000, // Show for 3 seconds
        position: 'top-center',
    });

    // 3. Clear the input boxes
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 font-sans">
      <Toaster /> {/* Component to display toasts */}
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Sign in to access your account dashboard.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl shadow-gray-300 border border-gray-200">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={20} className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                // Binding the value to state and updating on change
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`block w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 shadow-sm placeholder-gray-500 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all outline-none`}
                placeholder="Your email address"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={20} className="text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                required
                // Binding the value to state and updating on change
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`block w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 shadow-sm placeholder-gray-500 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all outline-none`}
                placeholder="Your secure password"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-150">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white transition-all duration-200 transform focus:outline-none focus:ring-4 focus:ring-indigo-300
                bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] hover:shadow-xl`}
            >
              <LogIn size={20} className="mr-3" />
              Sign In
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account? 
            <a href="/user-register" className="flex items-center justify-center mt-2 font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-150">
              <UserPlus size={18} className="mr-1" />
              Create an Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
