import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="px-[70px] max-w-[140rem] mx-auto">
        <div className="flex flex-row mb-20">
          {/* Left Column */}
          <div className="w-[55%]">
            <h2 className="text-3xl tracking-wide font-bold mb-12 max-w-[600px]">
              We love crafting unforgettable digital experiences, brands and
              websites with people like you.
            </h2>

            <div className="space-y-4">
              <h3 className="text-lg">Get in touch</h3>
              <p className="text-xl font-bold">+44 207 112 82 85</p>
              <p className="text-xl font-bold">contact@artistsweb.com</p>
              <p className="text-xl font-bold">
                Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[45%] flex flex-col items-start md:items-end justify-between">
            <div className="flex items-center gap-24 bg-black text-white px-12 py-4 rounded-2xl">
              <p className="text-2xl">Follow us</p>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <FontAwesomeIcon icon={faCoffee} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <img
                    src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/facebook.svg"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <img
                    src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/twitter.svg"
                    alt="Twitter"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <img
                    src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/globe.svg"
                    alt="Website"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-2xl p-12 w-full max-w-md mt-8 flex flex-col items-center justify-center">
              <h3 className="text-black text-4xl font-bold mb-4">
                Let's get started
              </h3>
              <p className="text-lg font-normal mb-8">
                We'd love to hear about your project.
              </p>
              <button className="bg-[#4F46E5] text-white py-4 px-8 rounded-full w-full hover:bg-opacity-90 transition-colors">
                Get in touch
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-gray-400">
            © 2025 Artistweb Ltd · All rights reserved.
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
