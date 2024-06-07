import NEWCOLLECTION from "../assets/newmen";
import Item from "./Item";

const NewMenFashion = () => {
  return (
    <section className="max-padd-container ">
      <div className=" bg-white  py-12 xl:p-28 ">
        <div className="w-[90%] mx-auto">
          <h3 className="h3 text-secondary ml-6 text-center">
            New <span>Collection</span>
          </h3>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
            {NEWCOLLECTION.map((item) => (
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

export default NewMenFashion;
