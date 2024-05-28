import React from "react";
import { Link } from "react-router-dom";

//react-icon
import { BiSolidOffer } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="max-padd-container mx-5">
      <div className="max-padd-container bg-hero bg-center bg-no-repeat bg-cover h-screen w-full rounded-3xl">
        <div className="relative lg:ml-16 top-32 xs:top-52  font-bold">
          <h2
            className="sm:pt-40 xs:text-4xl xs:pt-40 lg:text-6xl capitalize max-w-[40rem] text-tertiary sm:mt-16 md:mt-20 lg:mt-24 @media (max-width: 639px) and (max-height: 1184px) {
  mt-32
}"
          >
            Elevate Your Style, Elevate Your Life
          </h2>

          <p className="font-bold text-xl text-white hidden sm:block my-10 max-w-[33rem]">
            Welcome to Stylish Stitches, your one-stop destination for exquisite
            and fashionable apparel. Immerse yourself in a world of timeless
            elegance, where every stitch tells a story.{" "}
          </p>
          <div className="max-xs:flex-col   flex gap-5 xs:mt-12">
            <Link to={"/"} className="btn-dark rounded-full flexCenter hover:scale-105 hover: ">
              Shop Now{" "}
            </Link>
            <Link
              to={"/"}
              className="text-tertiary bg-white pl-6 rounded-full flexCenter gap-x-8 medium-16 group hover:scale-105"
            >
              Offers
              <BiSolidOffer className="text-xl bg-secondary text-primary rounded-full h-12 w-12 p-3 rotate-90 border border-dashed border-white group-hover:rotate-180 transition-all duration-500" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
