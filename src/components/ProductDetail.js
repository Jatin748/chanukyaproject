// This is the component for the product details
// Just run a map function through this for multiple product details 
// use props for multiple items data just replace the values in the tags with your props
// Change the font family as it can have default family that might look different
// run (npm i) in the project directory before seeing the website
// everything is responsive in this
import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import StarRatings from "react-star-ratings";
import Carouseldetail from "./Carouseldetail";
import { FaHeart, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
const ProductDetail = () => {
  const [increment, setincrement] = useState(1);
  const [wishlist, setWishlist] = useState(true);
  const [rating, setrating] = useState(0);
  const [information, setreview] = useState(true);
  const setDecrement = () => {
    if (increment > 1) {
      setincrement(increment - 1);
    }
  };
  const setIncrement = () => {
    setincrement(increment + 1);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    //any numbers above this are considered to be a NAN so I put a limit to the amount
    if (value < 100000) {
      setincrement(Number(value));
    }
  };
  const setWishList = () => {
    setWishlist(!wishlist);
  };
  const ratings = (newrating) => {
    setrating(newrating);
  };
  const handlereview = () => {
    // this is used to navigate between information and review parts
    setreview(true);
  };
  const handleinfo = () => {
    // this is used to navigate between information and review parts
    setreview(false);
  };
  const zoomIn = () => {
    // write the code for zoom in and out I could not find anything for it
  };
  const zoomOut = () => {};
  return (
    // this is the parent div for the product details
    // adjust the padding and margin for the parent div according to you
    <div className="md:flex justify-center items-center flex-col md:pt-0 md:p-20 md:m-20 p-2 m-2">
      {/* First Part - Product price and detail - Start */}
      <div className="md:flex md:items-center md:justify-evenly w-full">
        {/* First part left side - start */}
        <div className="md:w-1/2 relative">
          {/* Image */}
          <img
            src="download.jpg"
            alt="mainproductimage"
            className="w-full h-auto cursor-pointer"
            id="zoomImage"
          />

          {/* Wishlist Button */}
          <button className="absolute bottom-2 left-2 bg-transparent hover:bg-[#cf2e2e] text-white px-3 py-3 rounded-full">
            <FaHeart /> {/* React Icons heart icon */}
          </button>

          {/* Zoom Buttons */}
          <div className="absolute bottom-2 right-2 flex space-x-2">
            <button
              className="bg-transparent hover:bg-[#cba753] text-[#c0c0c0] px-3 py-3 rounded-full"
              onClick={zoomIn}
            >
              <FaSearchPlus /> {/* React Icons zoom-in icon */}
            </button>
            <button
              className="bg-transparent hover:bg-[#cba753] text-[#c0c0c0] px-3 py-3 rounded-full"
              onClick={zoomOut}
            >
              <FaSearchMinus /> {/* React Icons zoom-out icon */}
            </button>
          </div>
        </div>
        {/* First part left side - end */}

        {/* First part right side - start */}
        {/* Parent div for the right side */}
        <div className="flex flex-col p-6 space-y-3 mt-4">
          {/* You can also use react router if this link will land on the same website page */}
          <a href="/" className="text-sm text-[#666666b3] hover:text-[#000000]">
            C. DAKSHINAMOORTHY
          </a>
          <h1 className="text-[#555555] text-3xl font-bold">Torso 005</h1>
          <hr className="bg-gray-200 border border-gray-200 w-8 py-0.5 rounded-full" />
          <span className=" flex text-2xl tracking-wide font-semibold">
            <span className="text-lg">&#8377;</span>438,880
          </span>
          <span className="text-base text-[#555555]">2016</span>
          <span className="text-base text-[#555555]">Granite Stone</span>
          <span className="text-base text-[#555555]">90 x 32 x 18 cm</span>
          {/* Div for buttons- start */}
          <div className=" relative flex space-x-3 items-center">
            <div className="w-max">
              <button
                className="bg-gray-200 p-2 border border-gray-300 hover:bg-gray-400 transition duration-200"
                onClick={setDecrement}
              >
                -
              </button>
              <input
                type="tel"
                value={increment}
                onChange={handleChange}
                min={0}
                className="w-10 p-2 border-t border-b border-gray-300 text-center appearance-none"
              ></input>
              <button
                className="bg-gray-200 p-2 border border-gray-300 hover:bg-gray-400 transition duration-200"
                onClick={setIncrement}
              >
                +
              </button>
            </div>
            {/* add an onclick function for this */}
            <button className="uppercase bg-[#cba753] text-white py-2 px-6 font-semibold hover:bg-[#a28543] transition duration-200">
              add to cart
            </button>
          </div>
          {wishlist ? (
            <div
              className="flex items-center gap-1 text-gray-600 hover:text-black cursor-pointer"
              onClick={setWishList}
            >
              <AiOutlineHeart size={20} />
              <span className="text-base">Add to Wishlist</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-[#777777]">
              <AiFillHeart size={20} />
              <span className="text-base ">
                Product added!{" "}
                <a href="/" className="text-[#334862] hover:text-black">
                  Browse wishlist
                </a>
              </span>
            </div>
          )}
          <hr />
          {/* Div for buttons- end */}
          <span className="text-[#777777] text-sm">
            Category:{" "}
            <a href="/" className="text-[#334862] hover:text-black">
              C. DAKSHINAMOORTHY
            </a>
          </span>
          <div className="flex space-x-2">
            <a href="/">
              <AiFillFacebook size={30} />
            </a>
            <a href="/">
              <AiFillTwitterCircle size={30} />
            </a>
            <a href="/">
              <AiOutlineMail size={30} />
            </a>
            <a href="/">
              <BsPinterest size={30} />
            </a>
            <a href="/">
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>
        {/* First part right side - end */}
      </div>
      {/* First Part - Product price and detail - End */}

      {/* Second Part - Additional info and review - start */}
      <div className="flex md:p-10 mt-4 w-full ">
        <div className=" border-t w-full">
          <ul className="flex space-x-10 uppercase text-xs font-semibold tracking-wide">
            <li
              className="border-t-2 hover:border-[#cba753] cursor-pointer select-none"
              onClick={handlereview}
            >
              Additional Information
            </li>
            <li
              className="border-t-2 hover:border-[#cba753] cursor-pointer select-none"
              onClick={handleinfo}
            >
              Reviews (0)
            </li>
          </ul>
          {information ? (
            <div>
              <table className="w-full text-sm text-[#777777] text-left uppercase tracking-wide mt-5">
                <tbody className="space-y-7">
                  <tr className="table-row border-b-2">
                    <th className="p-3">Dimensions</th>
                    <td>32 x 23 cm</td>
                  </tr>
                  <tr className="border-b-2 p-4">
                    <th className="p-3">Artists</th>
                    <td>C. DAKSHINAMOORTHY</td>
                  </tr>
                  <tr className="border-b-2 p-4">
                    <th className="p-3">Year</th>
                    <td>1998</td>
                  </tr>
                  <tr className="border-b-2 p-4">
                    <th className="p-3">Medium</th>
                    <td>ARCYLIC</td>
                  </tr>
                  <tr className="border-b-2 p-4">
                    <th className="p-3">Sizes</th>
                    <td>small</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-5">
              <div className="mb-10 space-y-4">
                <h3 className="text-xl font-semibold text-[#555]">Reviews</h3>
                <span className="text-base">There are no reviews yet.</span>
              </div>
              <form
                className="border-2 border-[#cba753] p-5 space-y-7"
                // method="post"
                // action="/submit"
              >
                <h3 className="text-lg font-semibold text-[#555]">
                  Be the first to review "Untitled II"
                </h3>
                <div className="flex flex-col space-y-2">
                  <label
                    className=" text-sm text-[#222222] font-bold tracking-wide"
                    htmlFor="rating"
                  >
                    Your rating *
                  </label>
                  <StarRatings
                    name="rating"
                    starDimension="20px"
                    starRatedColor="#d26e4b"
                    starHoverColor="#d26e4b"
                    numberOfStars={5}
                    rating={rating}
                    changeRating={ratings}
                  />
                </div>
                <div className="space-y-4">
                  <label
                    className="text-sm text-[#222222] font-bold tracking-wide"
                    htmlFor="textarea"
                  >
                    Your review *
                  </label>
                  <textarea
                    className="w-full border shadow-sm h-28 focus:outline-none focus:shadow-md p-3"
                    name="textarea"
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-16 ">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-sm font-bold tracking-wide text-[#222222]"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      className="border shadow-sm focus:outline-none focus:shadow-md p-1.5"
                      name="name"
                      autoComplete="off"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className=" text-sm font-bold tracking-wide text-[#222222]"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      className="border shadow-sm focus:outline-none focus:shadow-md p-1.5"
                      name="email"
                      autoComplete="off"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="flex space-x-3 p-1 text-sm font-bold text-[#222222] tracking-wide">
                    <input type="checkbox" name="checkbox"></input>
                    <label htmlFor="checkbox">
                      Save my name,email and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="uppercase bg-[#cba753] hover:bg-[#a28543] text-white tracking-wide font-bold w-28 h-10"
                    >
                      submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      {/* Second Part - Additional info and review - end */}

      {/* Third part - related products - start */}
      <div className="w-full">
        <hr className="mb-6" />
        <h3 className=" text-xl font-semibold tracking-wider mb-4 uppercase text-[#555555]">
          Related Products
        </h3>
        <Carouseldetail />
      </div>
      {/* Third part - related products - end */}
    </div>
  );
};

export default ProductDetail;
