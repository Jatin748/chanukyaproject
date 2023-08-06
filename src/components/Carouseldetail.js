import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carouseldetail = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive} infinite={true}>
        {/* i have only added one picture here use the map function and loop for multiple items */}
        <div className="flex flex-col space-y-2 m-4">
          <img src="download.jpg" alt="source"></img>
          <span className="uppercase text-xs font-normal text-[#777777] tracking-wider">
            c. dakshinamoorthy
          </span>
          <a
            href="/"
            className="capitalize text-sm text-[#334862] tracking-wider"
          >
            head series 030
          </a>
          <span className=" text-sm font-bold text-[#111111] tracking-wide">
            &#8377;37,304.80
          </span>
          <button className="uppercase text-[#cba753] hover:text-white hover:bg-[#cba753] border-2 border-[#cba753] w-2/6 text-xs font-semibold p-2 text-center tracking-wider transition duration-200">
            add to cart
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default Carouseldetail;
