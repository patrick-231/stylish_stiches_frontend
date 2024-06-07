import { Link } from "react-router-dom";
// react-icons
import { MdOutlinePriceCheck } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { GiPriceTag } from "react-icons/gi";

const TopBrand = () => {
  return (
    <section className="max-padd-container py-14 xl:py-24 mt-8">
      <div className="flex justify-between">
        <div>
          <h3 className="h3 text-secondary">
            Top Brands bargains reduced by up to 75%
          </h3>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-14">
        <div className="">
          <div className="ring-1 ring-slate-900/5 rounded-3xl text-white">
            <img
              src="https://img01.ztat.net/zl-campaign-banners-albums/albums/cb1e2875-b5f5-4ece-9f9c-2cae3f0e5366/d7032e7c-991c-460b-aff4-38dfbbd49fb2.jpeg?imwidth=640"
              className="rounded-3xl"
              alt="male image"
            />
          </div>
          <div>
            <h4 className="medium-18 mt-4">Weekday Styles</h4>
            <p className="my-2">
              Check out our top Weekday for the coolest fashion!{" "}
            </p>
          </div>
        </div>
        <div className="">
          <div className="ring-1 ring-slate-900/5 rounded-3xl text-white">
            <img
              src="https://img01.ztat.net/zl-campaign-banners-albums/albums/75c2aea8-c335-4f42-9b5f-85508a59c16d/eea00167-1d94-4caf-b785-c0b75c3043e1.jpeg?imwidth=640"
              className="rounded-3xl"
              alt="male image"
            />
          </div>
          <div>
            <h4 className="medium-18 mt-4">CAMEL ACTIVE</h4>
            <p className="my-2">Till 75% OFF </p>
          </div>
          <div className="mt-10  ml-20">
            <Link to={"/login"}></Link>
          </div>
        </div>
        <div className="">
          <div className="ring-1 ring-slate-900/5 rounded-3xl text-white">
            <img
              src="https://img01.ztat.net/zl-campaign-banners-albums/albums/ba339074-9a2a-4ede-b0d9-af099cfc8b49/7c2341bf-1460-478d-b60a-c35d7f10f58d.jpeg?imwidth=640"
              className="rounded-3xl"
              alt="male image"
            />
          </div>
          <div>
            <h4 className="medium-18 mt-4">RAINS</h4>
            <p className="my-2">Till 75% OFF </p>
          </div>
        </div>
        <div className="">
          <div className="ring-1 ring-slate-900/5 rounded-3xl text-white">
            <img
              src="https://img01.ztat.net/zl-campaign-banners-albums/albums/7ca3eae5-707a-4164-b438-56d5033ffdb7/10d28362-5591-4662-b5c8-4a6aaeb3af87.jpeg?imwidth=640"
              className="rounded-3xl"
              alt="male image"
            />
          </div>
          <div>
            <h4 className="medium-18 mt-4">BUFFALO</h4>
            <p className="my-2">Till 80% OFF</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to={"/men"}>
          <button className="btn-dark rounded-full  hover:scale-105 hover:">
            View more
          </button>
        </Link>
      </div>
      <div className="h3  pt-14 ">
        What you get as a member of{" "}
        <span className="text-secondary">Stylish Stiches</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <div className="">
          <MdOutlinePriceCheck size={70} />

          <p className="my-2">
            <span className="font-bold text-xl">Reduced price till 75%</span>{" "}
            <br />
            You won't want to miss this incredible opportunity to save big on a
            fantastic product. For a limited time, we're offering a breathtaking
            discount of up to 75% off the regular price.
          </p>
        </div>
        <div className="">
          <TbTruckReturn size={70} />

          <p className="my-2">
            <span className="font-bold text-xl">Free return</span> <br />
            Shop with complete confidence thanks to our unbeatable free return
            policy. When you take advantage of our incredible 75% off sale, you
            can rest assured that you're not only getting an amazing deal, but
            also the freedom to return the item if it doesn't perfectly suit
            your needs.
          </p>
        </div>
        <div className="">
          <GiPriceTag size={70} />

          <p className="my-2">
            <span className="font-bold text-xl">Daily new sales</span> <br />
            Get ready for an exciting shopping experience with our daily new
            sales! Each and every day, we're adding fresh, hot deals to our
            inventory, so there's always something new and irresistible waiting
            for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopBrand;
