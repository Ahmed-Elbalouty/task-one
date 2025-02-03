import React from 'react';
import DropDown from "../assets/DropDown.png";
import imageOne from "../assets/imageOne.png";
function HeroSection() {
  return (
    <div className='container px-3 py-7 mx-auto lg:px-7 mb-5'>
      <div className='md:grid md:grid-cols-[1fr_3fr] gap-5'>
        {/* aside section  */}
        <div className="aside pr-4 lg:pr-7 hidden md:block">
          <ul className="flex flex-col gap-3 font-semibold">
            <li className="flex items-center justify-between">
              <a href="#" className="text-black">Woman Fashion</a>
              <img src={DropDown} alt="DropDown Icon" className="cursor-pointer" />
            </li>
            <li className="flex items-center justify-between">
              <a href="#" className="text-black">Electronics</a>
              <img src={DropDown} alt="DropDown Icon" className="cursor-pointer" />
            </li>
            <li>
              <a href="#" className="text-black">Home & Lifestyle</a>
            </li>
            <li>
              <a href="#" className="text-black">Medicine</a>
            </li>
            <li>
              <a href="#" className="text-black">Sports & Outdoor</a>
            </li>
            <li>
              <a href="#" className="text-black">Babys & Toys</a>
            </li>
            <li>
              <a href="#" className="text-black">Groceries & Pets</a>
            </li>
            <li>
              <a href="#" className="text-black">Health & Beauty</a>
            </li>
          </ul>
        </div>

        {/* image section  */}
        <div className="hero-image">
          <img src={imageOne} className='min-h-[270px]' />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
