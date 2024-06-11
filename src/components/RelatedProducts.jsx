import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import related_product_1 from "../assets/related_product_1.jpg";
import related_product_2 from "../assets/related_product_2.jpg";
import related_product_3 from "../assets/related_product_3.jpg";
import related_product_4 from "../assets/related_product_4.jpg";
import related_product_5 from "../assets/related_product_5.jpg";

const relatedProducts = [
  {
    id: 1,
    name: "Jorts super baggy",
    category: "men",
    image: related_product_1,
    old_price: 29,
  },
  {
    id: 2,
    name: "Sneaker",
    category: "men",
    image: related_product_2,
    old_price: 29,
  },
  {
    id: 3,
    name: "Basic-T-Shirt",
    category: "men",
    image: related_product_3,
    old_price: 29,
  },
  {
    id: 4,
    name: "3-Pack Long Basic-Socks",
    category: "men",
    image: related_product_4,
    old_price: 29,
  },
  {
    id: 5,
    name: "Jeans Jacket Blue",
    category: "men",
    image: related_product_5,
    old_price: 29,
  },
];

const RelatedProducts = () => {
  return (
    <section className=" max-padd-container py-14 xl:py-24 bg-primary p-2 xl:ml-16 xl:mr-16 ">
      <div className="py-12 mx-auto ">
        <h3 className="h3 text-secondary font-bold mb-4">Related Products</h3>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 ">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className=" p-4 rounded-3xl shadow-md items-baseline bold-28 sm:bold-32 "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-30 object-cover mb-2 rounded-3xl hover:scale-95"
              />
              <h4 className="text-lg font-bold">{product.name}</h4>
              <p className="bold-16 text-tertiary">${product.old_price}.00</p>

              <FaArrowRightLong className="bg-secondary text-white rounded-full h-10 w-10 p-3 group-hover:-rotate-45 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
