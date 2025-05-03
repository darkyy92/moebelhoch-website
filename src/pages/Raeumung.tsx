import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Check, Trash2, Recycle, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

const Raeumung = () => {
  return <>
      <Navbar />
      <main className="pt-0">
        <section className="py-20 md:py-28 bg-movers-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-block bg-white/20 text-white font-medium rounded-full py-1 px-4 mb-4">
                  Schnell & Effizient
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Räumung & Entsorgung</h1>
                <p className="text-lg text-gray-200 mb-8 max-w-[480px]">
                  Falls Sie eine Wohnung oder andere Räumlichkeiten räumen müssen und gleichzeitig Schweiss und Nerven sparen wollen, sind Sie bei uns an der richtigen Adresse.
                  Gemeinsam mit unseren kompetenten Partnerunternehmen und unseren Möbelliften helfen wir Ihnen die entsprechende Räumlichkeit innert wenigen Stunden komplett zu räumen.
                </p>
                <a href="https://calendly.com/moebelhoch/raeumung-entsorgung-telefon" target="_blank" rel="noopener" className="bg-movers-yellow text-movers-primary hover:brightness-110 font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center group">
                  Räumungs-Beratung buchen
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <div className="relative p-3 bg-white rounded-2xl shadow-xl rotate-1 transform transition-transform hover:rotate-0 duration-500">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      alt="Räumung und Entsorgung" 
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-700" 
                      src="/lovable-uploads/fa272a11-abd1-42ea-bce3-97c0d2a9721d.png" 
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
                    Unsere Dienstleistungen
                  </div>
                </div>
                <h2 className="section-title text-center mb-4">Unsere Räumungs- und Entsorgungsdienste</h2>
                <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                  Wir sorgen für eine schnelle und fachgerechte Räumung Ihrer Räumlichkeiten und kümmern uns um die umweltgerechte Entsorgung.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-in-up">
                  <div className="p-8 flex-1 flex flex-col h-full">
                    <div className="flex-1 flex flex-col text-center">
                      <div className="w-20 h-20 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-movers-primary transition-colors duration-300">
                        <Trash2 size={32} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-movers-primary mb-4">Komplett-Räumung</h3>
                      <p className="text-gray-600">
                        Wir räumen Ihre Wohnung oder Räumlichkeiten innerhalb weniger Stunden vollständig leer.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <div className="p-8 flex-1 flex flex-col h-full">
                    <div className="flex-1 flex flex-col text-center">
                      <div className="w-20 h-20 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-movers-primary transition-colors duration-300">
                        <Recycle size={32} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-movers-primary mb-4">Fachgerechte Entsorgung</h3>
                      <p className="text-gray-600">
                        Nicht mehr benötigte Gegenstände werden umweltgerecht und nach Vorschrift entsorgt.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <div className="p-8 flex-1 flex flex-col h-full">
                    <div className="flex-1 flex flex-col text-center">
                      <div className="w-20 h-20 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-movers-primary transition-colors duration-300">
                        <Store size={32} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-movers-primary mb-4">Weiterverwendung</h3>
                      <p className="text-gray-600">
                        Gut erhaltene Möbel und Gegenstände werden dem Brockenhaus EMMAUS Zürich zum Verkauf übergeben.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-10 mb-16 animate-fade-in-up">
                <div className="inline-block bg-movers-primary/10 text-movers-primary font-medium rounded-full py-1 px-4 mb-4">
                  Unser Service
                </div>
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Unser Räumungs-Service</h3>
                <p className="text-gray-700 mb-8">
                  Gegenstände jeglicher Art, welche Sie behalten möchten, liefern wir Ihnen unverzüglich und schadenfrei nach Hause.
                  Sie haben für gewisse Möbelstücke keine Verwendung mehr? Kein Problem, gerne können Sie diese dem gemeinnützigen Brockenhaus EMMAUS Zürich zum Verkauf abgeben oder wir entsorgen Ihnen diese gerne fachgerecht.
                </p>
                
                <h4 className="text-xl font-semibold text-movers-primary mb-6">Unsere Vorteile:</h4>
                <ul className="space-y-5 mb-8">
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Schnelle und effiziente Räumung innerhalb weniger Stunden</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Kompetentes Team mit Erfahrung in der Entrümpelung</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Umweltgerechte Entsorgung aller Materialien</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Weitergabe brauchbarer Gegenstände an das Brockenhaus</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Transport erhaltenswerter Gegenstände zu Ihnen nach Hause</p>
                    </div>
                  </li>
                </ul>
                
                <p className="text-gray-700 mb-8">
                  Gerne können Sie direkt mit unserem Partner EMMAUS Zürich Kontakt aufnehmen oder über uns eine unverbindliche Offerte anfragen.
                </p>
                
                <a href="https://calendly.com/moebelhoch/raeumung-entsorgung-telefon" target="_blank" rel="noopener" className="btn-primary inline-flex items-center group">
                  Räumungs-Beratung buchen
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="max-w-lg mx-auto animate-fade-in-up">
                <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-movers-primary">
                  <h3 className="text-xl font-bold text-movers-primary mb-4">EMMAUS Zürich</h3>
                  <p className="text-gray-600 mb-6">
                    Gemeinnütziges Brockenhaus, das Hilfsprojekte unterstützt und gebrauchte Möbel annimmt.
                  </p>
                  <a href="https://www.emmaus.ch" target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center group">
                    Webseite besuchen
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Bereit für Ihre Räumung?</h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
                Kontaktieren Sie uns für eine unverbindliche Beratung und erhalten Sie eine massgeschneiderte Offerte für Ihre individuellen Räumungsbedürfnisse.
              </p>
              
              <div className="bg-white p-10 rounded-2xl shadow-xl text-left max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-movers-primary mb-6 text-center">Unsere Räumungsdienste umfassen:</h3>
                <ul className="space-y-5 mb-8">
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Komplette Wohnungs- und Hausräumungen</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Fachgerechte Entsorgung von Sperrmüll und Sondermüll</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Transport von Möbeln zu Ihrer neuen Adresse</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Professionelle Beratung und transparente Preise</p>
                    </div>
                  </li>
                </ul>
                
                <div className="text-center">
                  <a href="https://calendly.com/moebelhoch/raeumung-entsorgung-telefon" target="_blank" rel="noopener" className="btn-primary inline-flex items-center group">
                    Räumungs-Beratung buchen
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                  <p className="text-sm text-gray-500 mt-5">100 % unverbindlich – jederzeit stornierbar</p>
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