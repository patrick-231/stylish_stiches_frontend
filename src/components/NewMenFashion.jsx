import { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";

const NewMenFashion = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://stylish-stiches.onrender.com/products/allproducts"
        );
        // Shuffle the products array
        const shuffledProducts = shuffleArray(response.data);
        // Take the first 16 products
        setProducts(shuffledProducts.slice(0, 8));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <section className="max-padd-container ">
      <div className=" bg-white  py-12 xl:p-28 ">
        <div className="w-[90%] mx-auto">
          <h3 className="h3 text-secondary ml-6 text-center">
            New <span>Collection</span>
          </h3>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
            {products.map((item) => (
              <Item
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewMenFashion;
