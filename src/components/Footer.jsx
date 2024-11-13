import React from "react";
import { LOGO_URL } from "../services/services";

const Footer = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="flex flex-col items-center ">
        <img className="size-28 mt-1" src={LOGO_URL} />
        <p>@ 2024 Foodino</p>
      </div>
      <div className="flex justify-evenly flex-wrap">
        <div className="m-5">
          <p className="font-bold">Company</p>
          <ul>
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Foodino Corporate</li>
            <li>Foodino Dineout</li>
          </ul>
        </div>
        <div className="m-5">
          <p className="font-bold">Legal</p>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="m-5">
          <p className="font-bold">Contact Us</p>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div className="m-5">
          <p className="font-bold">Available in:</p>
          <ul>
            <li>Srinagar</li>
            <li>Shopian</li>
            <li>Baramulla</li>
            <li>Pulwama</li>
            <li>Sopore</li>
            <li>Ganderbal</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-700 w-screen text-white text-center"> Copyright @ 2024, Foodino. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
