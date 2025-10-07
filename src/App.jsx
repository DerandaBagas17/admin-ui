import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        LATIHAN 1
        <nav className="p-4 bg-gray-100 flex flex-col items-start space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0 flex-wrap">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0 md:mt-0">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48 "
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
        </div>
        <hr />
        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-4 text-center flex flex-col md:flex-row gap-4">
          <div className="bg-gray-200 p-6 rounded flex-1">
            Basic
            <br />
            Rp 50.000
          </div>
          <div className="bg-blue-300 p-6 rounded flex-1 border-blue-600 scale-105">
            Pro
            <br />
            Rp 100.000
          </div>
          <div className="bg-gray-200 p-6 rounded flex-1">
            Premium
            <br />
            Rp 200.000
          </div>
        </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="min-h-screen grid gap-4 grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_1fr_auto]">
      {/* Header: Menggunakan py-10 untuk tinggi Header yang besar */}
          <header className="bg-gray-300 py-25 px-4 col-span-full md:col-span-12 md:row-start-1">
            Header
          </header>
          
          {/* Sidebar: col-span-2 (kecil) */}
          <aside className="bg-gray-200 py-25 px-4 col-span-full md:col-span-2 md:row-start-2 md:p-4">
            Sidebar
          </aside>
          
          {/* Content: col-span-10 (besar) */}
          <main className="bg-white py-25 px-4 col-span-full md:col-span-10 md:row-start-2 border md:p-4">
            Content
          </main>
          
          {/* Footer: Menggunakan py-6 untuk memperbesar ukuran container Footer */}
          <footer className="bg-gray-300 py-25 px-4 col-span-full md:col-span-12 md:row-start-3">Footer</footer>
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border flex flex-col items-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
          
          {/* Gambar Produk */}
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20 flex-shrink-0"
          />
          
          {/* Detail Produk */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h3 className="font-bold">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
