// src/pages/AboutUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-200 py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-dark">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">Learn more about Foodino and our mission to deliver the best food experience.</p>
        </div>

        {/* Our Story Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://aaft.com/blog/wp-content/uploads/2024/09/pikaso_texttoimage_Steps-to-Becoming-a-Professional-Chef-in-India.jpeg"
                alt="Foodino Team"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-primary">Our Story</h2>
              <p className="mt-4 text-gray-700 text-lg">
                At Foodino, we believe that food should not only be delicious but also easy to enjoy. Our journey started with a simple idea: to create a food app that makes discovering and ordering food an effortless, delightful experience. From local eateries to your favorite fast food, we’re here to bring the best food experiences to your fingertips.
              </p>
              <p className="mt-4 text-gray-700 text-lg">
                We're a team of passionate food lovers, technologists, and designers committed to providing you with the best app for food delivery, recipes, and food discovery. Our goal is to make food ordering easy, fast, and fun!
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-neutral py-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-primary">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-700">
              Our mission is to provide everyone, everywhere with easy access to a variety of quality food that can be delivered right to their doorsteps. Whether you're looking for a quick meal or a fine dining experience, Foodino is here to help you make the best choices.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-primary">Why Choose Foodino?</h2>
            <p className="mt-4 text-lg text-gray-700 mb-8">
              Here’s why Foodino is the best food app for your daily cravings:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-dark">Variety of Options</h3>
                <p className="mt-2 text-gray-600">From local favorites to international cuisines, we offer a wide range of food options that satisfy every taste.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-dark">Fast & Reliable Delivery</h3>
                <p className="mt-2 text-gray-600">With our fast and reliable delivery network, your food will arrive hot and fresh in no time.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-dark">Easy to Use</h3>
                <p className="mt-2 text-gray-600">Our user-friendly app makes ordering food a breeze. Browse, select, and pay with just a few taps!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-dark">Join the Foodino Community!</h2>
          <p className="mt-4 text-lg text-gray-700 mb-8">
            Ready to experience the best food app? Order from Foodino today and start exploring amazing food options near you!
          </p>
          <button onClick={()=>navigate('/')} className=' bg-gray-400 py-1 px-3 rounded-2xl text-white'> Order now</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
