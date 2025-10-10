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
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48 w-full object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48 w-full object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48 w-full object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48 w-full object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48 w-full object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48 w-full object-cover"
          />
        </div>
        <hr />
        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-4 text-center grid gap-4 md:grid-cols-3">
          <div className="bg-gray-200 p-6 rounded">
            Basic
            <br />
            Rp 50.000
          </div>

          <div className="bg-blue-300 p-8 rounded shadow-lg border-2 border-blue-600 transform scale-105">
            <h3 className="font-bold text-xl">Pro</h3>
            <p className="text-2xl font-semibold mt-2">Rp 100.000</p>
          </div>

          <div className="bg-gray-200 p-6 rounded">
            Premium
            <br />
            Rp 200.000
          </div>
        </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="min-h-screen grid gap-4 grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_1fr_auto]">
          {/* Header */}
          <header className="bg-gray-300 p-4 md:pt-4 md:pb-50 col-span-full md:col-span-12 md:row-start-1">
            Header
          </header>

          {/* Sidebar */}
          <aside className="bg-gray-200 p-4 col-span-full md:col-span-2 md:row-start-2">
            Sidebar
          </aside>

          {/* Content */}
          <main className="bg-white p-4 col-span-full md:col-span-10 md:row-start-2 border">
            Content
          </main>

          {/* Footer */}
          <footer className="bg-gray-300 p-4 md:pt-4 md:pb-50 col-span-full md:col-span-12 md:row-start-3">Footer</footer>
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
