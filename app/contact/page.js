"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Have a question or feedback? We'd love to hear from you!
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 focus:border-white outline-none text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 focus:border-white outline-none text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 focus:border-white outline-none text-white resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Thank you for contacting us!
            </h2>
            <p className="text-gray-300">
              We'll get back to you as soon as possible.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
