import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const ProductDisplay = (props) => {
  const { product } = props;
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart-page");
  };

  const { addToCart } = useContext(ShopContext);

  return (
    <section className="flex flex-col gap-8 xl:flex-row">
      {/* left-side */}
      <div className="flex gap-x-2 xl:flex-1">
        <div>
          <img
            src={selectedImage}
            alt="selected product"
            className="w-full h-[450px] object-contain ml-4"
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
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md ">
                    S
                  </div>
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">
                    M
                  </div>
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">
                    L
                  </div>
                  <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">
                    XL
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mb-8 max-w-[555px]">
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
                className="btn-dark rounded-md"
              >
                Add to cart
              </button>
              <button
                className="btn-dark-outline rounded-md"
                onClick={handleCartClick}
              >
                Buy now
              </button>
            </div>
            <p>
              <span className="medium-16 text-tertiary">Category: </span> Men |
              Jeans Jacket | New Collection
            </p>
            <p>
              <span className="medium-16 text-tertiary">Tags: </span> Modern |
              Trend | Latest |Popular
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
