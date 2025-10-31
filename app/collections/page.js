export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <section className="text-center py-16 bg-black text-white">
        <h1 className="text-5xl font-bold mb-4">Customer Details</h1>
        <p className="text-lg text-gray-300">We’d love to know you better for proper collections Thank's.</p>
      </section>

      
      <section className="flex justify-center items-center py-16 px-6">
        <form className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-lg space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Enter Your Personal Details
          </h2>

          <div>
            <label className="block text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+234 "
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Address</label>
            <textarea
              placeholder="Enter your address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              rows="3"
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
            >
              Submit Details
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
