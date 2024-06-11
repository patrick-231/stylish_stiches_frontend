import { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";

const NewMenFashion = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://stylish-stiches.onrender.com/products/allproducts"
        );
        // Shuffle the products array
        const shuffledProducts = shuffleArray(response.data);
        // Take the first 8 products
        setProducts(shuffledProducts.slice(0, 8));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
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
            {loading ? (
              <div className="flexCenter min-h-[140px] w-full ">
                <svg
                  className="w-16 h-16 animate-spin text-gray-900/50"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-900"
                  ></path>
                </svg>
              </div>
            ) : error ? (
              <div className="flex justify-center">
                <p>Error: {error}</p>
              </div>
            ) : (
              products.map((item) => (
                <Item
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  old_price={item.old_price}
                  description={item.description}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewMenFashion;
