import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login berhasil:', { email, password });
    // Tempatkan logika otentikasi nyata di sini
  };

  // Komponen Input yang dapat digunakan kembali untuk keringkasan
  const Input = ({ id, label, type, value, onChange, placeholder }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input 
        type={type} 
        id={id} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        required
        // Styling input: padding, border, focus biru, dan menetralkan outline default
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );

  return (
    // Latar belakang abu-abu terang (bg-gray-100) dan penempatan di tengah layar
    // Menggunakan kelas 'antialiased' dan 'font-sans' untuk tipografi yang bersih
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans antialiased">
      
      {/* Kontainer Utama Form Login Dua Kolom */}
      {/* Menggunakan shadow-xl dan rounded-xl untuk tampilan modern */}
      <div className="flex max-w-4xl w-full bg-white shadow-xl rounded-xl overflow-hidden">

        {/* 1. Sisi Kiri (Abu-abu Placeholder) */}
        {/* Disembunyikan pada layar kecil, muncul sebagai w-1/2 pada layar md ke atas */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gray-200 w-1/2 p-10 min-h-[400px]">
          <span className="text-4xl text-gray-600 font-semibold select-none">
            600 × 500
          </span>
          <p className="text-gray-500 mt-2 text-sm select-none">Area Placeholder</p>
        </div>

        {/* 2. Sisi Kanan (Form Login) */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-12">
          <h2 className="text-xl font-bold mb-6 text-center text-gray-900">
            Login
          </h2>
          
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Email Field */}
            <Input 
              id="email" 
              label="Email" 
              type="email" 
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            {/* Password Field */}
            <Input 
              id="password" 
              label="Password" 
              type="password" 
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {/* Tombol Login */}
            <button 
              type="submit" 
              className="w-full text-white font-medium py-2 mt-4 rounded-md bg-blue-600 hover:bg-blue-700 shadow-lg transition duration-150 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
