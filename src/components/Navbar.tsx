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
    {
      name: 'Möbellift mieten',
      path: '/moebellift-mieten'
    },
    {
      name: 'Umzüge',
      path: '/umzuege'
    },
    {
      name: 'Räumung & Entsorgung',
      path: '/raeumung'
    },
    {
      name: 'Reinigungspartner',
      path: '/reinigungspartner'
    },
    {
      name: 'Über Uns',
      path: '/ueber-uns'
    }
  ];

  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-movers-primary py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/8b10ece2-1d07-4504-b2a2-0d1da6a24d6f.png" 
            alt="Möbellift Logo" 
            className={`w-10 h-10 object-contain ${!isScrolled ? 'invert brightness-0 invert' : ''}`}
          />
          <span className={`font-bold text-2xl ${isScrolled ? 'text-movers-primary' : 'text-white'}`}>Möbellift mieten</span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => <NavLink key={link.path} to={link.path} className={({
          isActive
        }) => `text-sm font-medium transition-colors ${isScrolled ? isActive ? 'text-movers-secondary' : 'text-movers-primary hover:text-movers-secondary' : isActive ? 'text-movers-yellow' : 'text-white hover:text-movers-yellow'}`}>
              {link.name}
            </NavLink>)}
          
          <NavLink to="/offerten-anfordern" className={`${isScrolled ? 'bg-movers-secondary text-white' : 'bg-movers-yellow text-movers-primary'} hover:brightness-110 font-medium py-2 px-5 rounded-md transition-all duration-300`}>
            Offerte anfordern
          </NavLink>
        </div>

        <button onClick={toggleMenu} className={`lg:hidden ${isScrolled ? 'text-movers-primary' : 'text-white'}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out bg-white`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map(link => <NavLink key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={({
          isActive
        }) => `py-2 text-base font-medium ${isActive ? 'text-movers-secondary' : 'text-movers-primary'}`}>
              {link.name}
            </NavLink>)}
          
          <NavLink to="/offerten-anfordern" onClick={() => setIsOpen(false)} className="bg-movers-secondary text-white font-medium py-2 px-5 rounded-md text-center mt-4 hover:brightness-110 transition-all duration-300">
            Offerte anfordern
          </NavLink>
        </div>
      </div>
    </nav>;
};

export default Navbar;
