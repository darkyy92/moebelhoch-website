import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-movers-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Möbellift mieten</h3>
            <p className="mb-4 text-gray-300">
              Möbellift-Vermietung durch den Wohltätigkeitsverein EMMAUS Zürich
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Dienstleistungen</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/moebellift-mieten" className="text-gray-300 hover:text-white transition-colors">
                  Möbellift mieten
                </NavLink>
              </li>
              <li>
                <NavLink to="/umzuege" className="text-gray-300 hover:text-white transition-colors">
                  Umzüge
                </NavLink>
              </li>
              <li>
                <NavLink to="/raeumung" className="text-gray-300 hover:text-white transition-colors">
                  Räumung & Entsorgung
                </NavLink>
              </li>
              <li>
                <NavLink to="/reinigungspartner" className="text-gray-300 hover:text-white transition-colors">
                  Reinigungspartner
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">EMMAUS Zürich</h3>
            <address className="not-italic text-gray-300">
              <p className="flex items-start mb-2">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Ringwiesenstrasse 171<br />8600 Dübendorf</span>
              </p>
              <p className="flex items-center mb-2">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:er@emmaus-zh.ch" className="hover:text-white transition-colors">
                  er@emmaus-zh.ch
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MöbelLift. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Datenschutz
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Impressum
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;