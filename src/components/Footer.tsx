import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import CookieSettings from './CookieSettings';
const Footer = () => {
  return <footer className="bg-movers-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MöbelHoch - Ihr Umzugspartner</h3>
            <p className="mb-4 text-gray-300">
              Professionelle Möbellift-Vermietung in Zürich und Umgebung. Seit Jahren vertrauen Kunden auf unseren zuverlässigen Service für stressfreie Umzüge, Räumungen und Entsorgungen in der ganzen Schweiz.
            </p>
            <p className="mb-4 text-gray-300">
              Ein Projekt des Wohltätigkeitsvereins EMMAUS Zürich – wir verbinden soziales Engagement mit hochwertigem Service.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Unsere Dienstleistungen</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/moebellift-mieten" className="text-gray-300 hover:text-white transition-colors">
                  Möbellift mieten in Zürich
                </NavLink>
              </li>
              <li>
                <NavLink to="/umzuege" className="text-gray-300 hover:text-white transition-colors">
                  Professionelle Umzüge schweizweit
                </NavLink>
              </li>
              <li>
                <NavLink to="/raeumung" className="text-gray-300 hover:text-white transition-colors">
                  Räumung & fachgerechte Entsorgung
                </NavLink>
              </li>
              <li>
                <NavLink to="/reinigungspartner" className="text-gray-300 hover:text-white transition-colors">
                  Endreinigung mit Abnahmegarantie
                </NavLink>
              </li>
              <li>
                <NavLink to="/offerten-anfordern" className="text-white font-semibold hover:text-movers-yellow transition-colors">
                  Kostenlose Offerte anfordern
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt & Standort</h3>
            <address className="not-italic text-gray-300">
              <p className="flex items-start mb-2">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Ringwiesenstrasse 171<br />8600 Dübendorf</span>
              </p>
              <p className="flex items-center mb-2">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+41448019060" className="hover:text-white transition-colors">
                  +41 44 801 90 60
                </a>
              </p>
              <p className="flex items-center mb-2">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:er@emmaus-zh.ch" className="hover:text-white transition-colors">
                  er@emmaus-zh.ch
                </a>
              </p>
              <p className="mt-4 text-sm">
                Wir sind für Sie da: Mo-Fr 8:00-18:00 Uhr
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8">
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3 text-white">Service-Regionen</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-gray-300">
              <li><span className="text-sm font-semibold">Möbellift Zürich</span></li>
              <li><span className="text-sm"><strong>Zürich City</strong> (Kreis 1-12)</span></li>
              <li><span className="text-sm"><strong>Glattal</strong> (Dübendorf, Wallisellen, Opfikon, Kloten)</span></li>
              <li><span className="text-sm"><strong>Limmattal</strong> (Dietikon, Schlieren)</span></li>
              <li><span className="text-sm"><strong>Zürcher Oberland</strong> (Uster, Wetzikon, Volketswil)</span></li>
              <li><span className="text-sm"><strong>Zürcher Unterland</strong> (Bülach, Regensdorf)</span></li>
              <li><span className="text-sm"><strong>Zürichsee Region</strong> (Adliswil)</span></li>
              <li><span className="text-sm"><strong>Winterthur</strong> und Umgebung</span></li>
            </ul>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} MöbelHoch - Ihr Partner für Umzüge und Möbellift-Vermietung in Zürich und der ganzen Schweiz
              </p>
              <p className="text-gray-300 text-xs mt-1">
                Qualität, Zuverlässigkeit und Kundenzufriedenheit seit 2020
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <NavLink to="/datenschutz" className="bg-transparent border-2 border-white hover:bg-white/10 text-white hover:text-movers-yellow font-medium py-2 px-4 rounded-md transition-all duration-300">
                Datenschutz
              </NavLink>
              <NavLink to="/agb" className="bg-transparent border-2 border-white hover:bg-white/10 text-white hover:text-movers-yellow font-medium py-2 px-4 rounded-md transition-all duration-300">
                AGB
              </NavLink>
              <NavLink to="/impressum" className="bg-transparent border-2 border-white hover:bg-white/10 text-white hover:text-movers-yellow font-medium py-2 px-4 rounded-md transition-all duration-300">
                Impressum
              </NavLink>
              <div className="flex items-center mt-4 md:mt-0 pt-2 md:pt-0">
                <CookieSettings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;