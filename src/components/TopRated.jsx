import { Link } from "react-router-dom";

const TopRated = () => {
  return (
    <section className="max-padd-container py-14 ">
      <h2 className="h3 text-secondary ml-6 text-center pb-4">Stylish Trend</h2>
      <div className="grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-14">
        <div className="">
          <div className="ring-1 ring-slate-900/5 rounded-3xl text-white">
            <img
              src="https://res.cloudinary.com/dpx184ojl/image/upload/v1717510807/app/abceoiqopq9gaf5xuzrq.jpg"
              className="rounded-3xl"
              alt="male image"
            />
          </div>
          <div>
            <h4 className="medium-18 mt-4">Trendy Styles for Stylish Girls</h4>
            <p className="my-2">
              Check out our top picks for the coolest girls' fashion! This
              collection is packed with cute and comfy clothes that will have
              you looking absolutely adorable. From sparkly dresses to cozy
              sweaters, we've got all the latest looks to help you express your
              unique style.{" "}
            </p>
            <Link to={"/kids"} className="bold-25 text-secondary">
              View more
            </Link>
          </div>
        </div>
        <div className="">
          <div className="ring-1 ring-slate-900/5 rounded-3xl text-white">
            <img
              src="https://i.pinimg.com/736x/74/1e/e9/741ee9c63ab85069e7c227da05ff86ec.jpg"
              className="rounded-3xl"
              alt="male image"
            />
          </div>
          <div>
            <h4 className="medium-18 mt-4">Top Rated Men Collection</h4>
            <p className="my-2">
              Discover our top-rated men's collection, carefully curated to
              provide the ultimate in style and quality. From timeless
              essentials to the latest trends, this selection features premium
              fabrics and impeccable tailoring.{" "}
            </p>
            <Link to={"/men"} className="bold-25 text-secondary">
              View more
            </Link>
          </div>
        </div>
        <div className="">
          <div className="ring-1 ring-slate-900/5 rounded-3xl text-white">
            <img
              src="https://res.cloudinary.com/dpx184ojl/image/upload/v1717887591/women_rwckvv.jpg"
              className="rounded-3xl"
              alt="female image"
            />
          </div>
          <div>
            <h4 className="medium-18 mt-4">
              Elevated Style for the Modern Woman
            </h4>
            <p className="my-2">
              Explore our top-rated women's collection, designed to elevate your
              wardrobe with effortless sophistication. Featuring premium
              fabrics, flattering silhouettes, and timeless designs.{" "}
            </p>
            <Link to={"/women"} className="bold-25 text-secondary">
              View more
            </Link>
          </div>
        </div>
        <div className="">
          <div className="ring-1 ring-slate-900/5 rounded-3xl text-white">
            <img
              src="https://res.cloudinary.com/dpx184ojl/image/upload/v1717510802/app/dx7t1eetg77rm8y1hnxh.jpg"
              className="rounded-3xl"
              alt="male image"
            />
          </div>
          <div>
            <h4 className="medium-18 mt-4">Awesome Styles for Cool Kids</h4>
            <p className="my-2">
              Check out our top-picked kids' collection! This line is full of
              stylish, comfy, and fun pieces that will have your little one
              looking and feeling their best. From playful prints to classic
              staples, we've got all the latest trends to keep your kiddo ahead
              of the fashion curve.{" "}
            </p>
            <Link to={"/kids"} className="bold-25 text-secondary">
              View more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
