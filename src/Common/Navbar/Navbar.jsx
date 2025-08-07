import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/our-work" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 md:py-4 lg:py-2 ${scrolled
        ? "bg-blue-950/90 backdrop-blur-lg shadow-md h-[55px] md:h-20"
        : "bg-black/30 backdrop-blur-sm h-[55px] md:h-20"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src="/DigitalCrafted_Logo_HR_Dark.png"
              alt="Logo"
              className="h-10 sm:h-12 lg:h-16"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-lg font-sansation tracking-wide pb-1 transition-all duration-300 
                ${isActive ? "text-primary font-bold" : "text-white hover:text-primary"} 
                before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
                before:bg-primary before:transition-all before:duration-300 hover:before:w-full ${isActive ? "before:w-full" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        ref={drawerRef}
      >
        <div className="px-6 py-6 flex flex-col space-y-4 bg-black/80 backdrop-blur-sm h-screen">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-sansation font-medium pb-2 ${isActive ? "text-primary" : "text-gray-100"
                } hover:text-primary transition duration-150`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;