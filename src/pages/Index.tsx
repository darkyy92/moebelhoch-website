import { Link } from 'react-router-dom';
import { ArrowRight, TruckIcon, PackageIcon, BrushIcon, ArrowUpRight, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
const Index = () => {
  const services = [{
    title: "Möbellift mieten",
    description: "Wir verfügen über drei verschiedene Möbellift-Modelle, die je nach Art und Ort des Einsatzes optimal sind.",
    icon: <TruckIcon size={32} />,
    link: "/moebellift-mieten"
  }, {
    title: "Umzüge organisieren",
    description: "Überlassen Sie Ihren Umzug nicht dem Zufall - unsere Experten unterstützen Sie mit Fachwissen und den richtigen Werkzeugen.",
    icon: <PackageIcon size={32} />,
    link: "/umzuege"
  }, {
    title: "Räumung & Entsorgung",
    description: "Wir helfen Ihnen, Wohnungen und Räumlichkeiten schnell und professionell zu räumen und fachgerecht zu entsorgen.",
    icon: <ArrowUpRight size={32} />,
    link: "/raeumung"
  }, {
    title: "Endreinigung",
    description: "Nach dem Umzug: Lassen Sie Ihre alte oder neue Wohnung professionell reinigen durch unseren Partner ALL Perfekt GmbH.",
    icon: <BrushIcon size={32} />,
    link: "/reinigungspartner"
  }];
  return <>
      <Navbar />
      <main>
        <HeroSection 
          title="Möbellift mieten – schnell, sicher & günstig umziehen" 
          subtitle="Vom sozialen Brockenhaus EMMAUS Zürich – zuverlässig & fair seit 1956" 
          description="Ihr Möbellift-Service in Zürich – schneller, sauberer Umzug ohne Treppenhaus-Schäden" 
          imageUrl="/lovable-uploads/9b6af9e7-6ebe-410a-a153-bd1a7e9253ea.png" 
          primaryButtonText="Jetzt Offerte einholen" 
          primaryButtonLink="/offerten-anfordern" 
          secondaryButtonText="So funktioniert's" 
          secondaryButtonLink="/moebellift-mieten"
          trustNote="Hunderte erfolgreiche Umzüge in Zürich – auch kurzfristig verfügbar"
        />

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Unsere Dienstleistungen</h2>
              <p className="text-gray-600 text-lg">
                Entdecken Sie unsere vielfältigen Dienstleistungen rund um Umzug, Transport und Entsorgung. 
                Wir kümmern uns um alles, damit Ihr Umzug reibungslos verläuft.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} />)}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Wer wir sind</h2>
                <p className="text-gray-600 mb-6">
                  Das 1956 von Abbé Pierre gegründete Brockenhaus EMMAUS Zürich mit Sitz in Dübendorf unterstützt seit Anbeginn Hilfsprojekte im In- und Ausland.
                </p>
                <p className="text-gray-600 mb-6">
                  Ob der Verkauf von wunderbaren Antiquitäten und anderen schönen Gegenständen im Ladenlokal an der Ringwiesenstrasse 171, 8600 Dübendorf oder die Unterstützung durch den Aussendienst bei Räumungen, Entsorgungen oder Umzügen – wir packen an, wo Hilfe gebraucht wird.
                </p>
                <p className="text-gray-600 mb-8">
                  Für eine noch effizientere Durchführung von Räumungen und Umzügen setzen wir auf drei eigene Möbellifte: den Piaggio klein für enge Zufahrten, den Piaggio gross für grössere Einsätze sowie einen Baulift für schwer zugängliche Orte. Diese stehen auch zur Vermietung bereit – als flexible Umzugshelfer, ganz nach Bedarf.
                </p>
                <Link to="/ueber-uns" className="btn-primary">
                  Mehr über uns
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="relative">
                <img alt="EMMAUS Brockenhaus" className="w-full h-auto rounded-lg shadow-lg" src="/lovable-uploads/fbecb47f-92e6-4c15-8700-732308c2617b.png" />
                <div className="absolute -bottom-6 -left-6 bg-movers-primary text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <p className="font-semibold text-lg mb-1">Soziales Engagement</p>
                  <p className="text-sm">Der erwirtschaftete Erlös unterstützt jedes Jahr lokale, nationale und internationale Projekte.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-movers-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Unsere Möbellifte</h2>
              <p className="text-gray-600 text-lg">
                Wir verfügen über drei verschiedene Möbellift-Modelle, die sich je nach Art und Ort des Einsatzes anbieten.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img alt="Kleiner Piaggio Möbellift" className="w-full h-full object-cover" src="https://www.autosprint.ch/wp-content/uploads/2024/11/03_Piaggio_Porter_NPE-scaled.jpg" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-movers-primary mb-2">Piaggio klein</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-movers-secondary mr-2">✓</span>
                      Hubhöhe: 21 Meter (5. Stock)
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-secondary mr-2">✓</span>
                      Maximale Nutzlast: 210kg
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-secondary mr-2">✓</span>
                      Ideal für kleinere Strassen und Platzverhältnisse
                    </li>
                  </ul>
                  <Link to="/moebellift-mieten" className="inline-flex items-center text-movers-secondary font-medium hover:text-movers-primary transition-colors">
                    Mehr erfahren <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img alt="Grosser Piaggio Möbellift" className="w-full h-full object-cover" src="https://www.cng-mobility.ch/wp-content/uploads/2021/01/Porter_Header_1200x400pxl.jpg" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-movers-primary mb-2">Piaggio gross</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-movers-secondary mr-2">✓</span>
                      Hubhöhe: 30 Meter (9. Stock)
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-secondary mr-2">✓</span>
                      Maximale Nutzlast: 400kg
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-secondary mr-2">✓</span>
                      Ideal für breitere Strassen oder Stockwerke ab 6. Stock
                    </li>
                  </ul>
                  <Link to="/moebellift-mieten" className="inline-flex items-center text-movers-secondary font-medium hover:text-movers-primary transition-colors">
                    Mehr erfahren <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img alt="Baulift" className="w-full h-full object-cover" src="https://tc-equipment.de/wp-content/uploads/TC-MA1-Moebelaufzug-Moebellift-Bauaufzuege-1.jpg" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-movers-primary mb-2">Baulift</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-movers-secondary mr-2">✓</span>
                      Hubhöhe: 12 Meter (3./4. Stock)
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-secondary mr-2">✓</span>
                      Speziell für Abtransport von Bauschutt bei Umbauarbeiten
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-secondary mr-2">✓</span>
                      Flexibler Einsatz mit minimalen Platzbedarf
                    </li>
                  </ul>
                  <Link to="/moebellift-mieten" className="inline-flex items-center text-movers-secondary font-medium hover:text-movers-primary transition-colors">
                    Mehr erfahren <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img alt="Möbelliftservice" className="w-full h-auto rounded-lg shadow-lg" src="/lovable-uploads/2c339d7f-c50e-4886-95c1-515c8d0c4b62.png" />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="section-title">Warum unseren Möbellift-Service wählen?</h2>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-movers-light rounded-full flex items-center justify-center mr-3 mt-1">
                        <Star size={18} className="text-movers-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-movers-primary">Professionelle Bedienung</p>
                        <p className="text-gray-600">Unsere geschulten Operateure garantieren einen sicheren und effizienten Einsatz.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-movers-light rounded-full flex items-center justify-center mr-3 mt-1">
                        <Star size={18} className="text-movers-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-movers-primary">Transparente Preisstruktur</p>
                        <p className="text-gray-600">Faire Pauschalpreise ohne versteckte Kosten für unsere Möbellift-Modelle.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-movers-light rounded-full flex items-center justify-center mr-3 mt-1">
                        <Star size={18} className="text-movers-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-movers-primary">Soziales Engagement</p>
                        <p className="text-gray-600">Ihr Auftrag unterstützt gleichzeitig wohltätige Projekte von EMMAUS Zürich.</p>
                      </div>
                    </li>
                  </ul>
                  <Link to="/offerten-anfordern" className="btn-primary">
                    Jetzt Offerte anfordern
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-movers-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für Ihren stressfreien Umzug?</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
              Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihnen mit unserem Möbellift-Service und weiteren Dienstleistungen helfen können.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/offerten-anfordern" className="bg-white text-movers-primary hover:bg-movers-yellow font-medium py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center">
                Offerte anfordern
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/moebellift-mieten" className="bg-transparent border-2 border-white hover:bg-white text-white hover:text-movers-primary font-medium py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center">
                Mehr über unsere Möbellifte
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Index;