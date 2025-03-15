
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, FileText, MessageSquare, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const OffertenAnfordern = () => {
  const formFields = [
    { id: "name", label: "Name / Vorname", type: "text", placeholder: "Ihr vollständiger Name", required: true },
    { id: "address", label: "Adresse", type: "text", placeholder: "Ihre aktuelle Strasse und Hausnummer", required: true },
    { id: "plz", label: "PLZ / Ort", type: "text", placeholder: "Postleitzahl und Ort", required: true },
    { id: "phone", label: "Telefon", type: "tel", placeholder: "Ihre Telefonnummer für Rückfragen", required: true },
    { id: "email", label: "E-Mail", type: "email", placeholder: "Ihre E-Mail-Adresse", required: true },
    { id: "service", label: "Gewünschte Dienstleistung", type: "select", options: [
      { value: "moebellift", label: "Möbellift mieten" },
      { value: "umzug", label: "Umzug" },
      { value: "raeumung", label: "Räumung & Entsorgung" },
      { value: "reinigung", label: "Reinigung" },
      { value: "komplett", label: "Komplettservice" },
    ], required: true },
    { id: "date", label: "Gewünschtes Datum", type: "date", placeholder: "", required: true },
    { id: "message", label: "Mitteilung", type: "textarea", placeholder: "Beschreiben Sie bitte Ihr Anliegen", rows: 5, required: true },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-movers-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-movers-primary mb-6">Offerte anfordern</h1>
              <p className="text-lg text-gray-600 mb-8">
                Nutzen Sie eines der folgenden Kontaktmöglichkeiten, um eine unverbindliche Offerte anzufordern oder Ihre Fragen zu stellen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={28} className="text-movers-secondary" />
                </div>
                <h3 className="text-xl font-bold text-movers-primary mb-3">Telefon</h3>
                <p className="text-gray-600 mb-4">
                  Rufen Sie uns direkt an für eine persönliche Beratung.
                </p>
                <a href="tel:+41445555555" className="font-semibold text-movers-primary block">
                  +41 44 555 55 55
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={28} className="text-movers-secondary" />
                </div>
                <h3 className="text-xl font-bold text-movers-primary mb-3">E-Mail</h3>
                <p className="text-gray-600 mb-4">
                  Schreiben Sie uns eine E-Mail mit Ihren Anforderungen.
                </p>
                <a href="mailto:info@moebellift.ch" className="font-semibold text-movers-primary block">
                  info@moebellift.ch
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText size={28} className="text-movers-secondary" />
                </div>
                <h3 className="text-xl font-bold text-movers-primary mb-3">Formular</h3>
                <p className="text-gray-600 mb-4">
                  Nutzen Sie unser Online-Formular für eine schnelle Anfrage.
                </p>
                <a href="#kontaktformular" className="font-semibold text-movers-primary block">
                  Zum Formular scrollen
                </a>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto" id="kontaktformular">
              <ContactForm 
                title="Kontaktformular" 
                description="Für eine unverbindliche Offerte bitten wir Sie, folgende Angaben auszufüllen. Wir werden uns schnellstmöglich bei Ihnen melden."
                fields={formFields}
                submitButtonText="Offerte anfordern"
                emailTo="info@moebellift.ch"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OffertenAnfordern;
