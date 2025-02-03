import React from 'react';
import SectionLogo from './SectionLogo';
import SectionTitle from './SectionTitle';
import imgOne from "../assets/arrival-one.png";
import imgTwo from "../assets/arrival-two.png";
import imgThree from "../assets/arrival-three.png";
import imgFour from "../assets/arrival-four.png";

function NewArrivals() {
  return (
    <div className="container px-3 pb-5 pt-10 mx-auto lg:px-7">
      <SectionLogo title="Featured" />
      <SectionTitle title="New Arrival" />
      <div className="my-5 flex flex-col md:flex md:flex-row gap-3">
        <div className="left-side">
          <img src={imgOne} alt="Arrival Image" className='h-full w-full' />
        </div>
        <div className="right-side flex flex-col gap-3">
          <img src={imgTwo} alt="Arrival Image" className='h-full w-full' />
          <div className="bottom flex gap-3">
            <img src={imgThree} alt="Arrival Image" className='h-full w-full' />
            <img src={imgFour} alt="Arrival Image" className='h-full w-full' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
