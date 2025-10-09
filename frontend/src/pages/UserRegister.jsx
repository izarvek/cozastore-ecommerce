import React, { useState } from 'react';
import { Mail, Lock, User, UserPlus, LogIn } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const UserRegister = () => {
  // State variables for all registration fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation check
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!', { position: 'top-center' });
      return;
    }
    
    // 1. Simulate API call (where you'd normally integrate Axios for registration)
    console.log("Attempting registration with Name:", name, "Email:", email, "Password:", password);

    // 2. Show success message using react-hot-toast
    toast.success('Registration successful! Redirecting to login...', {
        duration: 3000,
        position: 'top-center',
    });

    // 3. Clear the input boxes
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 font-sans">
      <Toaster />
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Join us and start your new journey today.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl shadow-gray-300 border border-gray-200">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="sr-only">Full Name</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`block w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 shadow-sm placeholder-gray-500 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all outline-none`}
                placeholder="Full Name"
              />
            </div>

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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`block w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 shadow-sm placeholder-gray-500 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all outline-none`}
                placeholder="Create a password"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={20} className="text-gray-400" />
              </div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`block w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 shadow-sm placeholder-gray-500 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all outline-none`}
                placeholder="Confirm your password"
              />
            </div>


            <button
              type="submit"
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white transition-all duration-200 transform focus:outline-none focus:ring-4 focus:ring-indigo-300
                bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] hover:shadow-xl`}
            >
              <UserPlus size={20} className="mr-3" />
              Register
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account? 
            <a href="/user-login" className="flex items-center justify-center mt-2 font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-150">
              <LogIn size={18} className="mr-1" />
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
