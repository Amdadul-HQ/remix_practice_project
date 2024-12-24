import { NavLink } from "@remix-run/react";

const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/menu",
    label: "Menu",
  },
  {
    path: "/aboutus",
    label: "About Us",
  },
  {
    path: "/offers",
    label: "Offers",
  },
  {
    path: "/contactuse",
    label: "Contact Us",
  },
];

const Navbar = () => {
    return (
      <header>
        <nav>
          <div>
            <img alt="Logo" src="/assets/burger_logo.png" />
          </div>
          <div>
            <ul>
              {links.map((link,index) => (
                <NavLink key={index+1} to={link.path}>{link.label}</NavLink>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
};

export default Navbar;