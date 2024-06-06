import footer from "../assets/footer.jpg";
import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/footer_links";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";
import SOCIALS from "../assets/socials";

const Footer = () => {
  return (
    <footer className="flexCenter pb-10 pt-20 mt-20 ">
      <div className="max-padd-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap[10%] md:flex-row">
          <div className="max-w-72">
            <Link to={"/"} className="mb-10 bold-20">
              <span className=" text-secondary bold-28 ">S</span>tylish Stiches
            </Link>
            <div className="mb-2">
              <p className="mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia saepe quae pariatur, expedita asperiores laboriosam
                magnam totam, quam quo ab natus nesciunt. Dolore voluptatibus
                accusamus hic. Quam eaque itaque reiciendis?
              </p>
              <img
                src="https://res.cloudinary.com/dpx184ojl/image/upload/v1717510330/app/zbsnkgs00j2pfzwqe8aj.jpg"
                className="rounded-md mt-6 w-54 shadow-md"
                alt="footer image"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1 ml-8">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="flex flex-col gap- regular-14 text-gray-20">
                  {col.links.map((links) => (
                    <Link to={"/"} key={links}>
                      {links}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    to={"/"}
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p>{link.label}:</p>{" "}
                    <p className="medium-14">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <Link to={"/"} key={link}>
                      {" "}
                      <img
                        src={link}
                        alt="social icons"
                        height={22}
                        width={22}
                      />{" "}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <hr />
        <div className="boder bg-gray-20"></div>
        <p className="text-center regular-14 text-gray-30">
          2024 Stylich Stiches | All right reserved
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
