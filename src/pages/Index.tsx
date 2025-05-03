import { Link } from 'react-router-dom';
import { ArrowRight, TruckIcon, PackageIcon, BrushIcon, ArrowUpRight, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import UnsereMoebellifte from '../components/UnsereMoebellifte';
import { useEffect } from 'react';

const Index = () => {
  // Inject schema.org structured data
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "MöbelHoch - EMMAUS Zürich",
      "description": "Möbellift-Vermietung und Umzugsservice in Zürich - vom sozialen Brockenhaus EMMAUS Zürich",
      "url": "https://www.moebelhoch.ch/",
      "telephone": "+41 43 422 00 91",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ringwiesenstrasse 171",
        "addressLocality": "Dübendorf",
        "postalCode": "8600",
        "addressCountry": "CH"
      },
      "image": "https://www.moebelhoch.ch/lovable-uploads/9b6af9e7-6ebe-410a-a153-bd1a7e9253ea.png",
      "priceRange": "CHF",
      "openingHours": "Mo-Fr 09:00-18:00",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Möbellift-Service",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Kleiner Piaggio Möbellift",
            "description": "Für enge Zufahrten, Hubhöhe bis 21 Meter",
            "price": "380.00",
            "priceCurrency": "CHF"
          },
          {
            "@type": "Offer",
            "name": "Grosser Piaggio Möbellift",
            "description": "Für größere Einsätze, Hubhöhe bis 30 Meter",
            "price": "450.00",
            "priceCurrency": "CHF"
          },
          {
            "@type": "Offer",
            "name": "Baulift",
            "description": "Für schwer zugängliche Orte",
            "price": "700.00",
            "priceCurrency": "CHF"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
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
      <main className="pt-0">
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

        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <div className="inline-block bg-movers-primary/10 text-movers-primary font-medium rounded-full py-1 px-4">
                  Umfassender Service
                </div>
              </div>
              <h2 className="section-title">Unsere Dienstleistungen</h2>
              <p className="text-gray-600 text-lg">
                Entdecken Sie unsere vielfältigen Dienstleistungen rund um Umzug, Transport und Entsorgung. 
                Wir kümmern uns um alles, damit Ihr Umzug reibungslos verläuft.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <ServiceCard 
                    title={service.title} 
                    description={service.description} 
                    icon={service.icon} 
                    link={service.link} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-block bg-movers-primary/10 text-movers-primary font-medium rounded-full py-1 px-4 mb-4">
                  Über EMMAUS Zürich
                </div>
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
                <Link to="/ueber-uns" className="btn-primary inline-flex items-center group">
                  Mehr über uns
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <img alt="EMMAUS Brockenhaus" className="w-full h-auto rounded-2xl shadow-xl" src="/lovable-uploads/fbecb47f-92e6-4c15-8700-732308c2617b.png" />
                <div className="absolute -bottom-6 -left-6 bg-movers-primary text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block transform transition-transform hover:scale-105 duration-300">
                  <p className="font-semibold text-lg mb-1">Soziales Engagement</p>
                  <p className="text-sm">Der erwirtschaftete Erlös unterstützt jedes Jahr lokale, nationale und internationale Projekte.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <UnsereMoebellifte />

        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 animate-fade-in-up">
                  <img alt="Möbelliftservice" className="w-full h-auto rounded-2xl shadow-xl" src="/lovable-uploads/2c339d7f-c50e-4886-95c1-515c8d0c4b62.png" />
                </div>
                <div className="order-1 md:order-2 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                  <div className="inline-block bg-movers-primary/10 text-movers-primary font-medium rounded-full py-1 px-4 mb-4">
                    Ihre Vorteile
                  </div>
                  <h2 className="section-title">Warum unseren Möbellift-Service wählen?</h2>
                  <ul className="space-y-6 mb-8">
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                        <Star size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-movers-primary mb-1">Professionelle Bedienung</p>
                        <p className="text-gray-600">Unsere geschulten Operateure garantieren einen sicheren und effizienten Einsatz.</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                        <Star size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-movers-primary mb-1">Transparente Preisstruktur</p>
                        <p className="text-gray-600">Faire Pauschalpreise ohne versteckte Kosten für unsere Möbellift-Modelle.</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                        <Star size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-movers-primary mb-1">Soziales Engagement</p>
                        <p className="text-gray-600">Ihr Auftrag unterstützt gleichzeitig wohltätige Projekte von EMMAUS Zürich.</p>
                      </div>
                    </li>
                  </ul>
                  <Link to="/offerten-anfordern" className="btn-primary inline-flex items-center group">
                    Jetzt Offerte anfordern
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-movers-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-in-up max-w-4xl mx-auto">
              <div className="inline-block bg-white/20 text-white font-medium rounded-full py-1 px-4 mb-6">
                Jetzt loslegen
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Bereit für Ihren stressfreien Umzug?</h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
                Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihnen mit unserem Möbellift-Service und weiteren Dienstleistungen helfen können.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/offerten-anfordern" className="bg-white text-movers-primary hover:bg-movers-yellow font-medium py-3.5 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group">
                  Offerte anfordern
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/moebellift-mieten" className="bg-transparent border-2 border-white hover:bg-white/10 text-white hover:text-movers-yellow font-medium py-3.5 px-8 rounded-md transition-all duration-300 inline-flex items-center">
                  Mehr über unsere Möbellifte
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Index;