import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Check, Trash2, Recycle, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

const Raeumung = () => {
  return <>
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
                <img alt="Räumung und Entsorgung" className="w-full h-auto rounded-lg shadow-lg" src="/lovable-uploads/fa272a11-abd1-42ea-bce3-97c0d2a9721d.png" />
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
                  Gerne können Sie direkt mit unserem Partner EMMAUS Zürich Kontakt aufnehmen oder über uns eine unverbindliche Offerte anfragen.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-movers-primary mb-4">EMMAUS Zürich</h3>
                  <p className="text-gray-600 mb-6">
                    Gemeinnütziges Brockenhaus, das Hilfsprojekte unterstützt und gebrauchte Möbel annimmt.
                  </p>
                  <a href="https://www.emmaus.ch" target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
                    Webseite besuchen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-movers-primary mb-4">Bereit für Ihre Räumung?</h2>
                  <p className="text-gray-600 mb-6">
                    Kontaktieren Sie uns für eine unverbindliche Beratung und erhalten Sie eine massgeschneiderte Offerte für Ihre individuellen Räumungsbedürfnisse.
                  </p>
                  <Link to="/offerten-anfordern" className="btn-primary inline-flex items-center">
                    Gratis Offerte anfordern
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-movers-primary mb-4">Unsere Räumungsdienste umfassen:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Komplette Wohnungs- und Hausräumungen</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Fachgerechte Entsorgung von Sperrmüll und Sondermüll</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Transport von Möbeln zu Ihrer neuen Adresse</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Professionelle Beratung und transparente Preise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Raeumung;