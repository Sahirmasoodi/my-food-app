// src/pages/ContactUs.js
import React, { useState } from 'react';


const ContactUs = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for form submission status
  const [status, setStatus] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic (e.g., sending data to an API or email)
    // For now, we'll just log the form data
    setStatus('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-dark">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">We’d love to hear from you! Feel free to reach out for inquiries, feedback, or any questions.</p>
        </div>

        {/* Contact Information Section */}
        <section className="mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-primary">Our Contact Information</h2>
            <p className="mt-4 text-lg text-gray-700">You can reach us by email, phone, or via social media. We are happy to assist you with anything!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-dark">Email</h3>
              <p className="mt-4 text-gray-700">For general inquiries or support, reach us at:</p>
              <a href="mailto:support@foodino.com" className="text-primary hover:underline mt-4 block">support@foodino.com</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-dark">Phone</h3>
              <p className="mt-4 text-gray-700">You can call us for immediate assistance at:</p>
              <p className="text-primary font-semibold mt-4">+1 (800) 123-4567</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-primary">Send Us a Message</h2>
            <p className="mt-4 text-lg text-gray-700">Fill out the form below and we’ll get back to you as soon as possible.</p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-dark">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-dark">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-dark">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your message here"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button className='bg-gray-400 px-2 py-1 rounded-md'>Send Message</button>
            </div>

            {/* Status Message */}
            {status && (
              <div className="mt-4 text-center text-green-500 font-semibold">
                {status}
              </div>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
