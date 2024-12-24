import { Link } from "@remix-run/react";

const Footer = () => {
    return (
      <footer className="bg-[#190E04] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Get in Touch Section */}
            <div>
              <h2 className="text-[#FCCC56] text-xl font-bold mb-4">
                GET IN TOUCH
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/locations"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    Our Locations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information Section */}
            <div>
              <h2 className="text-[#FCCC56] text-xl font-bold mb-4">
                INFORMATION
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/branches/la"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    LA Branches
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h2 className="text-[#FCCC56] text-xl font-bold mb-4">
                QUICK LINKS
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/appointments"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features Section */}
            <div>
              <h2 className="text-[#FCCC56] text-xl font-bold mb-4">
                FEATURES
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/online-booking"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    Online Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/virtual-consultation"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    Virtual Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/membership"
                    className="hover:text-[#FCCC56] transition-colors"
                  >
                    Membership Benefits
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;