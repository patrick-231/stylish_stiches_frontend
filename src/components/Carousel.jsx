import { useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Carousel = ({
  children: SLIDES,
  autoslide = false,
  autoslideInterval = 3000,
}) => {
  const [current, setCurrent] = useState(0);

  const previous = () =>
    setCurrent((current) => (current === 0 ? SLIDES.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === SLIDES.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!autoslide) return;
    const slideInterval = setInterval(next, autoslideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="max-padd-container  py-14 xl:py-24">
      <h2 className="h3 text-center text-secondary">Popular Brands</h2>
      <div className="w-[90%] mx-auto flex justify-center items-center">
        <div className="overflow-hidden relative max-w-lg ">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {SLIDES}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={previous}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-secondary"
            >
              <GoChevronLeft size={40} />
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-secondary"
            >
              <GoChevronRight size={40} />
            </button>
            <div className="absolute bottom-4 right-0 left-0">
              <div className="flex items-center justify-center gap-2">
                {SLIDES.map((_, i) => (
                  <div
                    className={`transition-all w-3 h-3 bg-white rounded-full ${
                      current == i ? "p-" : "bg-opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
