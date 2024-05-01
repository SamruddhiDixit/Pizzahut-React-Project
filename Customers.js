import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

function Customers() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: <FaCircleChevronLeft />,
    nextArrow: <FaCircleChevronRight />
  };
  return (
    <div>
      <h1 style={{ fontFamily: "brush script mt" }}>What Says Our Customers</h1>
      <div className="slider-container ">
        <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>

          {/* div1 */}
          <div className='p-4'>
            <div className='bg-dark text-white p-3'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <h5>Monna Michell</h5>
              <p>Magna Alique</p>
            </div>
            <img src='./images/client1.jpg' alt='Monna'
              className='img-fluid mx-auto  h-25 w-25 d-block rounded-circle mt-3 
            border-4 border-warning border border-radious float-start'/>
          </div>

          {/* div2 */}
          <div className='p-4'>
            <div className='bg-dark text-white p-3'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <h5>Mike Hamell</h5>
              <p>Magna Alique</p>
            </div>
            <img src='./images/client2.jpg' alt='Monna'
              className='img-fluid mx-auto h-25 w-25 d-block rounded-circle mt-3 
            border-4 border-warning border float-start'/>
          </div>

          {/* div3 */}
          <div className='p-4'>
            <div className='bg-dark text-white p-3'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <h5>Monna Michell</h5>
              <p>Magna Alique</p>
            </div>
            <img src='./images/client1.jpg' alt='Monna'
              className='img-fluid mx-auto h-25 w-25 d-block rounded-circle mt-3 
            border-4 border-warning border float-start'/>
          </div>

          {/* div4 */}
          <div className='p-4'>
            <div className='bg-dark text-white p-3'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <h5>Mike Hamell</h5>
              <p>Magna Alique</p>
            </div>
            <img src='./images/client2.jpg' alt='Monna'
              className='img-fluid mx-auto h-25 w-25 d-block rounded-circle mt-3 
            border-4 border-warning border float-start'/>
          </div>
        </Slider>
        
        {/* Icons */}
        <FaCircleChevronLeft className='text-warning fs-1 me-2' onClick={previous} />
        <FaCircleChevronRight className='text-warning fs-1 ' onClick={next} />
      </div>
    </div>
  )
}

export default Customers