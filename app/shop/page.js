export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      
      <section className="text-center py-16 bg-black text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Deellas Shop</h1>
        <p className="text-lg">Explore our latest fashion collections</p>
      </section>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <img src="/col1.jpg" alt="Product 1" className="object-cover w-full h-64" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Classic Black Dress</h2>
            <p className="text-gray-600 mb-3">Elegant and timeless — perfect for every occasion.</p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <img src="/col2.jpg" alt="Product 2" className="object-cover w-full h-64" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Summer Floral Dress</h2>
            <p className="text-gray-600 mb-3">Light and breezy — perfect for summer days.</p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <img src="/col3.jpg" alt="Product 3" className="object-cover w-full h-64" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Elegant Evening Dress</h2>
            <p className="text-gray-600 mb-3">Perfect for parties and special events.</p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <img src="/col4.jpg" alt="Product 4" className="object-cover w-full h-64" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Casual Streetwear</h2>
            <p className="text-gray-600 mb-3">Trendy and comfortable everyday style.</p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all">
              Buy Now
            </button>
          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <img src="/col5.jpg" alt="Product 5" className="object-cover w-full h-64" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Luxury Gown</h2>
            <p className="text-gray-600 mb-3">Premium design for unforgettable occasions.</p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all">
              Buy Now
            </button>
          </div>
        </div>

      
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <img src="/col6.jpg" alt="Product 6" className="object-cover w-full h-64" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Modern Party Dress</h2>
            <p className="text-gray-600 mb-3">Bold and chic — make a statement.</p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
