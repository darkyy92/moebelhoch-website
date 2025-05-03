import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Check, Package, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Umzuege = () => {
  const formFields = [{
    id: "name",
    label: "Name / Vorname",
    type: "text",
    placeholder: "Ihr vollständiger Name",
    required: true
  }, {
    id: "address",
    label: "Adresse",
    type: "text",
    placeholder: "Ihre aktuelle Strasse und Hausnummer",
    required: true
  }, {
    id: "plz",
    label: "PLZ / Ort",
    type: "text",
    placeholder: "Postleitzahl und Ort",
    required: true
  }, {
    id: "phone",
    label: "Telefon",
    type: "tel",
    placeholder: "Ihre Telefonnummer für Rückfragen",
    required: true
  }, {
    id: "email",
    label: "E-Mail",
    type: "email",
    placeholder: "Ihre E-Mail-Adresse",
    required: true
  }, {
    id: "fromAddress",
    label: "Adresse von wo gezügelt werden muss",
    type: "text",
    placeholder: "Auszugsadresse",
    required: true
  }, {
    id: "fromRooms",
    label: "Anzahl Zimmer",
    type: "text",
    placeholder: "z.B. 3.5",
    required: true
  }, {
    id: "fromFloor",
    label: "Stockwerk",
    type: "text",
    placeholder: "z.B. 2. OG",
    required: true
  }, {
    id: "date",
    label: "Datum",
    type: "date",
    placeholder: "",
    required: true
  }, {
    id: "toAddress",
    label: "Adresse wohin gezügelt werden muss",
    type: "text",
    placeholder: "Einzugsadresse",
    required: true
  }, {
    id: "toRooms",
    label: "Anzahl Zimmer",
    type: "text",
    placeholder: "z.B. 4.5",
    required: true
  }, {
    id: "toFloor",
    label: "Stockwerk",
    type: "text",
    placeholder: "z.B. 3. OG",
    required: true
  }, {
    id: "lift",
    label: "Möbellift mieten?",
    type: "radio",
    required: true,
    defaultValue: "ja",
    options: [
      { value: "ja", label: "Ja" },
      { value: "nein", label: "Nein" }
    ]
  }, {
    id: "furniture",
    label: "Beschreibung der zu transportierenden Möbelstücke",
    type: "textarea",
    placeholder: "Beschreiben Sie kurz die Art und ungefähre Anzahl der Möbelstücke",
    required: true,
    rows: 3
  }];
  return <>
      <Navbar />
      <main className="pt-0">
        <section className="py-20 md:py-28 bg-movers-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-block bg-white/20 text-white font-medium rounded-full py-1 px-4 mb-4">
                  Professionelle Unterstützung
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Umzüge</h1>
                <p className="text-lg text-gray-200 mb-8 max-w-[480px]">
                  Sie wollen bei Ihrem Umzug nichts dem Zufall überlassen? 
                  Dann haben wir mit EMMAUS Zürich einen erfahrenen Partner an der Hand, der Ihnen gerne fachmännisch zur Hand geht.
                </p>
                <a href="https://calendly.com/moebelhoch/umzug-planung-telefon" target="_blank" rel="noopener" className="bg-movers-yellow text-movers-primary hover:brightness-110 font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center group">
                  Umzug-Beratung buchen
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <div className="relative p-3 bg-white rounded-2xl shadow-xl rotate-1 transform transition-transform hover:rotate-0 duration-500">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      alt="Umzugsservice Teamarbeit" 
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-700" 
                      src="https://plus.unsplash.com/premium_photo-1681825046030-e3a13ba21f74?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center animate-fade-in-up">
                <div className="flex justify-center mb-4">
                  <div className="inline-block bg-movers-primary/10 text-movers-primary font-medium rounded-full py-1 px-4">
                    Für Ihren Umzug
                  </div>
                </div>
                <h2 className="section-title text-center mb-4">Unsere Umzugs-Dienstleistungen</h2>
                <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                  Wir bieten Ihnen einen umfassenden Service für einen stressfreien Umzug.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-in-up">
                  <div className="p-8 flex-1 flex flex-col h-full">
                    <div className="flex-1 flex flex-col text-center">
                      <div className="w-20 h-20 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-movers-primary transition-colors duration-300">
                        <Package size={32} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-movers-primary mb-4">Sorgfältiges Einpacken</h3>
                      <p className="text-gray-600">
                        Wir räumen Ihr gesamtes Hab und Gut sorgfältig in Umzugskisten und sichern alles für den Transport.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <div className="p-8 flex-1 flex flex-col h-full">
                    <div className="flex-1 flex flex-col text-center">
                      <div className="w-20 h-20 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-movers-primary transition-colors duration-300">
                        <Truck size={32} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-movers-primary mb-4">Professioneller Transport</h3>
                      <p className="text-gray-600">
                        Mit unseren Möbelliften und Transportfahrzeugen bringen wir Ihre Möbel sicher an den Zielort.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <div className="p-8 flex-1 flex flex-col h-full">
                    <div className="flex-1 flex flex-col text-center">
                      <div className="w-20 h-20 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-movers-primary transition-colors duration-300">
                        <Users size={32} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-movers-primary mb-4">Fachmännische Beratung</h3>
                      <p className="text-gray-600">
                        Unsere Experten von EMMAUS Zürich unterstützen Sie mit ihrer langjährigen Erfahrung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-10 mb-16 animate-fade-in-up">
                <div className="inline-block bg-movers-primary/10 text-movers-primary font-medium rounded-full py-1 px-4 mb-4">
                  Unser Service
                </div>
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Was wir für Sie tun</h3>
                <p className="text-gray-700 mb-8">Wir räumen Ihren gesamten Hausrat sorgfältig in Umzugskisten und helfen Ihnen beim Abbau Ihrer Möbel. Möbel, die Sie nach dem Umzug nicht mehr benötigen, werden dem Brockenhaus EMMAUS Zürich zur Verfügung gestellt oder fachgerecht entsorgt.</p>
                
                <h4 className="text-xl font-semibold text-movers-primary mb-6">Unsere Vorteile:</h4>
                <ul className="space-y-5 mb-8">
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Professionelles Team mit langjähriger Erfahrung</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Möbellifte für alle Stockwerke und Gebäudetypen</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Entsorgung nicht mehr benötigter Möbel</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Unterstützung wohltätiger Projekte durch EMMAUS Zürich</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Transparente Preisgestaltung ohne versteckte Kosten</p>
                    </div>
                  </li>
                </ul>
                
                <p className="text-gray-700 mb-8">
                  Wir haben Ihr Interesse geweckt? Dann zögern Sie nicht, sich mit EMMAUS Zürich in Verbindung zu setzen oder direkt hier eine unverbindliche Offerte einzuholen.
                </p>
                
                <a href="https://calendly.com/moebelhoch/umzug-planung-telefon" target="_blank" rel="noopener" className="btn-primary inline-flex items-center group">
                  Umzug-Beratung buchen
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="max-w-lg mx-auto animate-fade-in-up">
                <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-movers-primary">
                  <h3 className="text-xl font-bold text-movers-primary mb-4">EMMAUS Zürich</h3>
                  <p className="text-gray-600 mb-6">
                    Gemeinnütziger Umzugshelfer, der lokale und internationale Hilfsprojekte unterstützt.
                  </p>
                  <a href="https://calendly.com/moebelhoch/umzug-planung-telefon" target="_blank" rel="noopener" className="btn-outline w-full justify-center group">
                    Umzug-Beratung buchen
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-movers-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <div className="inline-block bg-white/20 text-white font-medium rounded-full py-1 px-4 mb-6">
                Jetzt starten
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Umzug planen</h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
                Für eine persönliche Beratung zu Ihrem Umzug nehmen Sie einen Termin in unserem Kalender vor.
              </p>
              
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Vereinbaren Sie ein Beratungsgespräch</h3>
                <p className="text-gray-600 mb-8">
                  Wir helfen Ihnen, Ihren Umzug optimal zu planen und zu organisieren.
                </p>
                <a 
                  href="https://calendly.com/moebelhoch/umzug-planung-telefon" 
                  target="_blank" 
                  rel="noopener" 
                  className="btn-primary inline-flex items-center mx-auto group"
                >
                  Umzug-Beratung buchen
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-sm text-gray-500 mt-5">100 % unverbindlich – jederzeit stornierbar</p>
              </div>
              
              <div className="hidden">
                <ContactForm title="Umzug planen" description="Für eine unverbindliche Offerte für Ihren Umzug bitten wir Sie, folgende Angaben auszufüllen." fields={formFields} submitButtonText="Umzugsofferte anfordern" emailTo="info@moebellift.ch" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Umzuege;