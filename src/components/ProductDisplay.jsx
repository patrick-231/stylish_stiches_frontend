import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import procut_rt_0 from "../assets/procut_rt_0.jpg";
import procut_rt_1 from "../assets/procut_rt_1.jpg";
import procut_rt_2 from "../assets/procut_rt_2.jpg";
import procut_rt_3 from "../assets/procut_rt_3.jpg";
import procut_rt_4 from "../assets/procut_rt_4.jpg";

const ProductDisplay = (props) => {
  const { product } = props;
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const {addToCart} = useContext(ShopContext)

  const images = [
    procut_rt_0,
    procut_rt_1,
    procut_rt_2,
    procut_rt_3,
    procut_rt_4,
  ];

  return (
    <section className="flex flex-col gap-8 xl:flex-row">
      {/* left-side */}
      <div className="flex gap-x-2 xl:flex-1">
        <div className="flex flex-col gap-[7px] flex-wrap xl:ml-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`product thumbnail ${index}`}
              className="max-h-[90px] cursor-pointer focus:border focus:border-red-600"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <div>
          <img
            src={selectedImage}
            alt="selected product"
            className="w-full h-[450px] object-contain"
          />
        </div>
      </div>
      {/* right-side */}
      <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl mr-6">
        <div>
          <h3 className="h3 sm:line-clamp-2">{product.name}</h3>
          <div className="flex items-end gap-x-2 medium-20">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(150)</p>
          </div>
          <div className="flex items-baseline bold-28 sm:bold-32 mt-4">
            <div>${product.old_price}.00</div>
          </div>
          <div>
            {/* products colors and icon */}
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-6">
              <div>
                <h4 className="bold-16">Select Color:</h4>
                <div className="flex gap-3 my-3">
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryRed"></div>
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryBlue"></div>
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-black"></div>
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-gray-600"></div>
                </div>
              </div>
              <div>
                <h4 className="bold-16">Select Size:</h4>
                <div className="flex gap-3 my-3">
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md ">S</div>
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">M</div>
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">L</div>
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">XL</div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mb-8 max-w-[555px]">
              <button onClick={() => {addToCart(product.id)}} className="btn-dark rounded-md">Add to cart</button>
              <button className="btn-dark-outline rounded-md">Buy now</button>
            </div>
            <p><span className="medium-16 text-tertiary">Category: </span> Men | Jeans Jacket | New Collection</p>
            <p><span  className="medium-16 text-tertiary">Tags: </span> Modern | Trend | Latest |Popular</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
