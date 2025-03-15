
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Check, Trash2, Recycle, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Raeumung = () => {
  const formFields = [
    { id: "name", label: "Name / Vorname", type: "text", placeholder: "Ihr vollständiger Name", required: true },
    { id: "address", label: "Adresse", type: "text", placeholder: "Ihre aktuelle Strasse und Hausnummer", required: true },
    { id: "plz", label: "PLZ / Ort", type: "text", placeholder: "Postleitzahl und Ort", required: true },
    { id: "phone", label: "Telefon", type: "tel", placeholder: "Ihre Telefonnummer für Rückfragen", required: true },
    { id: "email", label: "E-Mail", type: "email", placeholder: "Ihre E-Mail-Adresse", required: true },
    { id: "clearingAddress", label: "Adresse der zu räumenden Räumlichkeit", type: "text", placeholder: "Adresse", required: true },
    { id: "rooms", label: "Anzahl Zimmer", type: "text", placeholder: "z.B. 3.5", required: true },
    { id: "floor", label: "Stockwerk", type: "text", placeholder: "z.B. 2. OG", required: true },
    { id: "date", label: "Gewünschtes Datum", type: "date", placeholder: "", required: true },
    { id: "items", label: "Zu entsorgende Gegenstände (mit Fotos falls möglich)", type: "textarea", placeholder: "Beschreiben Sie kurz, welche Gegenstände entsorgt werden sollen", rows: 4, required: true },
    { id: "notes", label: "Wichtige Bemerkungen", type: "textarea", placeholder: "Weitere wichtige Informationen", rows: 3 },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-movers-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-movers-primary mb-6">Räumung & Entsorgung</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Falls Sie eine Wohnung oder andere Räumlichkeiten räumen müssen und gleichzeitig Schweiss und Nerven sparen wollen, sind Sie bei uns an der richtigen Adresse.
                  Gemeinsam mit unseren kompetenten Partnerunternehmen und unseren Möbelliften helfen wir Ihnen die entsprechende Räumlichkeit innert wenigen Stunden komplett zu räumen.
                </p>
                <Link to="/offerten-anfordern" className="btn-primary">
                  Offerte anfordern
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/b9f7c74a-070b-44b1-aec6-d591f126d497.png" 
                  alt="Räumung und Entsorgung" 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center mb-8">Unsere Räumungs- und Entsorgungsdienste</h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Wir sorgen für eine schnelle und fachgerechte Räumung Ihrer Räumlichkeiten und kümmern uns um die umweltgerechte Entsorgung.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trash2 size={28} className="text-movers-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-movers-primary mb-3">Komplett-Räumung</h3>
                  <p className="text-gray-600">
                    Wir räumen Ihre Wohnung oder Räumlichkeiten innerhalb weniger Stunden vollständig leer.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Recycle size={28} className="text-movers-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-movers-primary mb-3">Fachgerechte Entsorgung</h3>
                  <p className="text-gray-600">
                    Nicht mehr benötigte Gegenstände werden umweltgerecht und nach Vorschrift entsorgt.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Store size={28} className="text-movers-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-movers-primary mb-3">Weiterverwendung</h3>
                  <p className="text-gray-600">
                    Gut erhaltene Möbel und Gegenstände werden dem Brockenhaus EMMAUS Zürich zum Verkauf übergeben.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Unser Räumungs-Service</h3>
                <p className="text-gray-700 mb-6">
                  Gegenstände jeglicher Art, welche Sie behalten möchten, liefern wir Ihnen unverzüglich und schadenfrei nach Hause.
                  Sie haben für gewisse Möbelstücke keine Verwendung mehr? Kein Problem, gerne können Sie diese dem gemeinnützigen Brockenhaus EMMAUS Zürich zum Verkauf abgeben oder wir entsorgen Ihnen diese gerne fachgerecht.
                </p>
                
                <h4 className="text-xl font-semibold text-movers-primary mb-4">Unsere Vorteile:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Schnelle und effiziente Räumung innerhalb weniger Stunden</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Kompetentes Team mit Erfahrung in der Entrümpelung</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Umweltgerechte Entsorgung aller Materialien</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Weitergabe brauchbarer Gegenstände an das Brockenhaus</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Transport erhaltenswerter Gegenstände zu Ihnen nach Hause</span>
                  </li>
                </ul>
                
                <p className="text-gray-700">
                  Gerne können Sie entweder direkt mit unseren beiden Partnern EMMAUS Zürich oder Basha's GmbH Kontakt aufnehmen oder Sie fragen unverzüglich direkt hier nach einer unverbindlichen Offerte.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-movers-primary mb-4">EMMAUS Zürich</h3>
                  <p className="text-gray-600 mb-6">
                    Gemeinnütziges Brockenhaus, das Hilfsprojekte unterstützt und gebrauchte Möbel annimmt.
                  </p>
                  <Link to="/offerten-anfordern" className="btn-outline w-full justify-center">
                    Kontakt aufnehmen
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-movers-primary mb-4">Basha's GmbH</h3>
                  <p className="text-gray-600 mb-6">
                    Professioneller Räumungs- und Entsorgungsdienst mit modernem Equipment.
                  </p>
                  <Link to="/offerten-anfordern" className="btn-outline w-full justify-center">
                    Kontakt aufnehmen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center mb-12">Räumungsofferte anfordern</h2>
              
              <ContactForm 
                title="Räumung planen" 
                description="Für eine unverbindliche Offerte für Ihre Räumung bitten wir Sie, folgende Angaben auszufüllen."
                fields={formFields}
                submitButtonText="Räumungsofferte anfordern"
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

export default Raeumung;
