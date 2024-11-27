import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../services/services";
import { useSelector } from "react-redux";
import image from '../menu_icon.svg'


function Header() {
  const [nav, setNav] = useState(false);
  let cartItem = useSelector((state)=>state.cart.items)

  
  return (
    <header>
      <nav className="bg-gray-300 border-gray-400 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
          <Link to="/" className="flex items-center">
          <img src={LOGO_URL} className="size-14"/>
          </Link>
      <div
            className={`flex-col md:flex md:flex-row items-center w-full md:w-auto md:order-2 transition-all duration-300 ${
              nav
                ? "absolute top-14 left-0 w-full h-1/3 z-50 transition-all duration-500 bg-gray-300 shadow-md p-4 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none"
                : "hidden md:flex gap-6"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:gap-8 gap-0">
              <li>
                <Link to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white"
                  aria-current="page"> Home </Link>
              </li>
              <li>
                <Link to="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >About Us</Link>
              </li>
              <li>
                <Link to="/contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                > Contact Us </Link>
              </li>
              <li>
                <Link href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                   >Sign In </Link>
              </li>
              <li>
                <Link to={'/cart'}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                   >
                   <div className="flex">
                   <img className="size-6" src="https://cdn-icons-png.flaticon.com/512/73/73966.png"/><span>({cartItem.length})</span>
                   </div>
                   </Link>
              </li>
            
            </ul>
            
          </div>

          <div className="md:hidden  flex items-center lg:order-1">
            <button onClick={() => setNav(!nav)}>
              <img src={image}/>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;