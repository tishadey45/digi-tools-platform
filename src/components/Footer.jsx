import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <footer className="px-4 py-10 text-white bg-gray-900 divide-y">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="justify-center pb-2 space-x-3 lg:justify-start"
            >
              <span className="self-center text-4xl font-semibold">
                DigiTools
              </span>
              <p className="text-gray-300">
                Premium digital tools for creators,
                <br /> professionals, and businesses. Work smarter <br /> with
                our suite of powerful tools.
              </p>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="font-semibold tracking-wide text-gray-100 uppercase">
                Product
              </h3>
              <ul className="space-y-1 text-gray-300 ">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Templates
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold tracking-wide text-gray-100 uppercase ">
                Company
              </h3>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-100 uppercase ">
                Resources
              </h3>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Help Center
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Community
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-semibold text-gray-100 uppercase ">
                Social Links
              </div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram"
                  className="flex items-center justify-center w-10 h-10 text-white transition rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:scale-110"
                >
                  <LuInstagram size={18} />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center w-10 h-10 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  <ImFacebook2 size={18} />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="TwitterX"
                  className="flex items-center justify-center w-10 h-10 text-black transition rounded-full bg-base-300 hover:bg-black hover:text-white"
                >
                  <BsTwitterX size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-24 pt-10 text-gray-300">
          © 2026 DigiTools. All rights reserved.
          <div className="flex gap-4">
            <ul>
              <li>privacy policy</li>
            </ul>
            <ul>
              <li>Terms of service</li>
            </ul>
            <ul>
              <li>cookies</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
