
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Möbellift mieten', path: '/moebellift-mieten' },
    { name: 'Umzüge', path: '/umzuege' },
    { name: 'Räumung & Entsorgung', path: '/raeumung' },
    { name: 'Reinigungspartner', path: '/reinigungspartner' },
    { name: 'Über Uns', path: '/ueber-uns' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-movers-primary font-bold text-2xl">MöbelLift</span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-movers-secondary' : 'text-movers-primary hover:text-movers-secondary'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink 
            to="/offerten-anfordern" 
            className="btn-primary"
          >
            Offerte anfordern
          </NavLink>
        </div>

        <button onClick={toggleMenu} className="lg:hidden text-movers-primary">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out bg-white`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `py-2 text-base font-medium ${isActive ? 'text-movers-secondary' : 'text-movers-primary'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink 
            to="/offerten-anfordern" 
            onClick={() => setIsOpen(false)}
            className="btn-primary text-center mt-4"
          >
            Offerte anfordern
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
