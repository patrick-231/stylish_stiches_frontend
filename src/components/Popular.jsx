/* import POPULAR from "../assets/popular"; */
import Item from "./Item";
import { useState, useEffect } from "react";
import axios from "axios";

const Popular = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://stylish-stiches.onrender.com/products/allproducts"
        );
        setProducts(response.data.slice(0, 4));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="max-padd-container ">
      <div className=" bg-primary py-12 xl:p-28 ">
        <div className="w-[90%] mx-auto">
          <h3 className="h3 text-secondary ml-6 text-center">
            Popular <span>Women Products</span>
          </h3>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              products.map((product) => (
                <Item
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  old_price={product.old_price}
                  description={product.description}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;

/* const Popular = () => {
  return (
    <section className="max-padd-container ">
      <div className=" bg-primary py-12 xl:p-28 ">
        <div className="w-[90%] mx-auto">
          <h3 className="h3 text-secondary ml-6 text-center">
            Popular <span>Women Products</span>
          </h3>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
            {POPULAR.map((item) => (
              <Item
                key={item.id}
                id={item.id}
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

export default Popular; */
