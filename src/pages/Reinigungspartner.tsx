import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
const Reinigungspartner = () => {
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
    id: "cleaningAddress",
    label: "Adresse der zu reinigenden Wohnung",
    type: "text",
    placeholder: "Adresse",
    required: true
  }, {
    id: "rooms",
    label: "Anzahl Zimmer",
    type: "text",
    placeholder: "z.B. 3.5",
    required: true
  }, {
    id: "floor",
    label: "Stockwerk",
    type: "text",
    placeholder: "z.B. 2. OG",
    required: true
  }, {
    id: "date",
    label: "Gewünschtes Datum",
    type: "date",
    placeholder: "",
    required: true
  }, {
    id: "notes",
    label: "Wichtige Bemerkungen",
    type: "textarea",
    placeholder: "Weitere wichtige Informationen",
    rows: 3
  }];
  return <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-movers-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-movers-primary mb-6">Reinigungspartner</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Für einen reibungslosen Umzug gehört auch eine professionelle Endreinigung dazu. 
                  Mit unseren zuverlässigen Reinigungspartnern bieten wir Ihnen eine Komplettlösung aus einer Hand.
                </p>
                <Link to="/offerten-anfordern" className="btn-primary">
                  Reinigung anfragen
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div>
                <img alt="Professionelle Reinigung" className="w-full h-auto rounded-lg shadow-lg" src="/lovable-uploads/0943f207-b488-43ee-9750-96b71c454525.jpg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center mb-8">Unsere Reinigungs-Dienstleistungen</h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Wir sorgen für eine makellose Übergabe Ihrer Wohnung mit unserer professionellen Reinigung.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={28} className="text-movers-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-movers-primary mb-3">Professionelle Endreinigung</h3>
                  <p className="text-gray-600">
                    Gründliche Reinigung aller Räume, Fenster, Küche und Badezimmer für eine einwandfreie Wohnungsübergabe.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={28} className="text-movers-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-movers-primary mb-3">Abnahmegarantie</h3>
                  <p className="text-gray-600">
                    Wir garantieren eine erfolgreiche Wohnungsabnahme oder erledigen kostenlos notwendige Nachbesserungen.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={28} className="text-movers-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-movers-primary mb-3">Umfassender Service</h3>
                  <p className="text-gray-600">
                    Von der Grundreinigung bis zur Spezialbehandlung von Oberflächen - alles aus einer Hand.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Unsere Reinigungsleistungen</h3>
                <p className="text-gray-700 mb-6">
                  Mit unseren zuverlässigen Reinigungspartnern bieten wir Ihnen eine professionelle Endreinigung, die höchsten Ansprüchen genügt. So können Sie sich voll und ganz auf Ihren Umzug konzentrieren, während wir uns um eine makellose Wohnungsübergabe kümmern.
                </p>
                
                <h4 className="text-xl font-semibold text-movers-primary mb-4">Unsere Vorteile:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Professionelle Reinigung nach Schweizer Standard</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Abnahmegarantie bei der Wohnungsübergabe</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Umweltfreundliche Reinigungsmittel</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Koordination mit Umzug und Möbellift aus einer Hand</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Flexible Terminplanung nach Ihren Bedürfnissen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center mb-12">Reinigungsofferte anfordern</h2>
              
              <ContactForm title="Reinigung planen" description="Für eine unverbindliche Offerte für Ihre Endreinigung bitten wir Sie, folgende Angaben auszufüllen." fields={formFields} submitButtonText="Reinigungsofferte anfordern" emailTo="info@moebellift.ch" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Reinigungspartner;