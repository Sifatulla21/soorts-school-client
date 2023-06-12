import React from 'react';
import logo from '../../../src/assets/logo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
const Footer = () => { 
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center mb-4 w-full sm:w-auto">
            <img src={logo} alt="Toy Shop Logo" className="w-10 h-10 mr-2" />
            <h3 className="text-xl font-semibold">Sports Basic Zone</h3>
          </div>
          <div className="flex items-center mb-4 w-full sm:w-auto">
            <form className="flex">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="bg-white text-gray-800 px-4 py-2 mr-2 rounded-l focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <p>123-456-7890</p>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <p>info@sportsbasic.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarker className="mr-2" />
              <p>1234 Sports Street, Cityville</p>
            </div>
          </div>
          <div className="flex justify-center mb-4 w-full sm:w-auto">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2">
              <FaFacebook className="text-white text-2xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mr-2">
              <FaTwitter className="text-white text-2xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl" />
            </a>
          </div>
        </div>
        <div className="container mx-auto text-center text-gray-400">
          &copy; {new Date().getFullYear()} Sports Basic Zone. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;