import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';
const Reinigungspartner = () => {
  // Add structured data for Service and BreadcrumbList
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Endreinigung und Reinigungsservice in Zürich",
      "description": "Professionelle Endreinigung für Wohnungsübergaben mit Abnahmegarantie. In Zusammenarbeit mit zuverlässigen Reinigungspartnern für makellose Ergebnisse.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "MöbelHoch - EMMAUS Zürich",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ringwiesenstrasse 171",
          "addressLocality": "Dübendorf",
          "postalCode": "8600",
          "addressCountry": "CH"
        }
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 47.3769,
          "longitude": 8.5417
        },
        "geoRadius": "50000"
      },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "CHF"
        }
      },
      "serviceType": "Reinigungsservice",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.moebelhoch.ch/reinigungspartner",
        "servicePhone": "+41 43 422 00 91"
      }
    };
    
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.moebelhoch.ch/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Endreinigung",
          "item": "https://www.moebelhoch.ch/reinigungspartner"
        }
      ]
    };

    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);
    
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(serviceScript);
      document.head.removeChild(breadcrumbScript);
    };
  }, []);
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
      <main className="pt-0">
        <section className="py-20 md:py-28 bg-movers-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="content-fade-in-up">
                <div className="inline-block bg-white/20 text-white font-medium rounded-full py-1 px-4 mb-4">
                  Professionelle Reinigung
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Endreinigung</h1>
                <p className="text-lg text-gray-200 mb-8 max-w-[480px]">
                  Für einen reibungslosen Umzug gehört auch eine professionelle Endreinigung dazu. 
                  Mit unseren zuverlässigen Reinigungspartnern bieten wir Ihnen eine Komplettlösung aus einer Hand.
                </p>
                <a href="https://calendly.com/moebelhoch/endreinigung-telefon" target="_blank" rel="noopener" className="bg-movers-yellow text-movers-primary hover:brightness-110 font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center group">
                  Reinigungs-Beratung buchen
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="relative z-10 hero-image-container hero-image-animate animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <div className="relative p-3 bg-white rounded-2xl shadow-xl rotate-1 transform transition-transform hover:rotate-0 duration-500 hero-image-wrapper">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      alt="Professionelle Reinigung" 
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-700 hero-image" 
                      src="/lovable-uploads/0943f207-b488-43ee-9750-96b71c454525.jpg" 
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
                    Unser Service
                  </div>
                </div>
                <h2 className="section-title text-center mb-4">Unsere Reinigungs-Dienstleistungen</h2>
                <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                  Wir sorgen für eine makellose Übergabe Ihrer Wohnung mit unserer professionellen Reinigung.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-in-up">
                  <div className="p-8 flex-1 flex flex-col h-full">
                    <div className="flex-1 flex flex-col text-center">
                      <div className="w-20 h-20 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-movers-primary transition-colors duration-300">
                        <Sparkles size={32} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-movers-primary mb-4">Professionelle Endreinigung</h3>
                      <p className="text-gray-600">
                        Gründliche Reinigung aller Räume, Fenster, Küche und Badezimmer für eine einwandfreie Wohnungsübergabe.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <div className="p-8 flex-1 flex flex-col h-full">
                    <div className="flex-1 flex flex-col text-center">
                      <div className="w-20 h-20 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-movers-primary transition-colors duration-300">
                        <Sparkles size={32} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-movers-primary mb-4">Abnahmegarantie</h3>
                      <p className="text-gray-600">
                        Wir garantieren eine erfolgreiche Wohnungsabnahme oder erledigen kostenlos notwendige Nachbesserungen.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <div className="p-8 flex-1 flex flex-col h-full">
                    <div className="flex-1 flex flex-col text-center">
                      <div className="w-20 h-20 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-movers-primary transition-colors duration-300">
                        <Sparkles size={32} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-movers-primary mb-4">Umfassender Service</h3>
                      <p className="text-gray-600">
                        Von der Grundreinigung bis zur Spezialbehandlung von Oberflächen - alles aus einer Hand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-10 mb-16 animate-fade-in-up">
                <div className="inline-block bg-movers-primary/10 text-movers-primary font-medium rounded-full py-1 px-4 mb-4">
                  Unser Service
                </div>
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Unsere Reinigungsleistungen</h3>
                <p className="text-gray-700 mb-8">
                  Mit unseren zuverlässigen Reinigungspartnern bieten wir Ihnen eine professionelle Endreinigung, die höchsten Ansprüchen genügt. So können Sie sich voll und ganz auf Ihren Umzug konzentrieren, während wir uns um eine makellose Wohnungsübergabe kümmern.
                </p>
                
                <h4 className="text-xl font-semibold text-movers-primary mb-6">Unsere Vorteile:</h4>
                <ul className="space-y-5 mb-8">
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Professionelle Reinigung nach Schweizer Standard</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Abnahmegarantie bei der Wohnungsübergabe</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Umweltfreundliche Reinigungsmittel</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Koordination mit Umzug und Möbellift aus einer Hand</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                      <Check size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-700">Flexible Terminplanung nach Ihren Bedürfnissen</p>
                    </div>
                  </li>
                </ul>
                
                <a href="https://calendly.com/moebelhoch/endreinigung-telefon" target="_blank" rel="noopener" className="btn-primary inline-flex items-center group">
                  Reinigungs-Beratung buchen
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Reinigung planen</h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
                Für eine persönliche Beratung zu Ihrer Endreinigung nehmen Sie einen Termin in unserem Kalender vor.
              </p>
              
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Vereinbaren Sie ein Beratungsgespräch</h3>
                <p className="text-gray-600 mb-8">
                  Wir helfen Ihnen, Ihre Endreinigung optimal zu planen und zu organisieren.
                </p>
                <a 
                  href="https://calendly.com/moebelhoch/endreinigung-telefon" 
                  target="_blank" 
                  rel="noopener" 
                  className="btn-primary inline-flex items-center mx-auto group"
                >
                  Reinigungs-Beratung buchen
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-sm text-gray-500 mt-5">100 % unverbindlich – jederzeit stornierbar</p>
              </div>
              
              <div className="hidden">
                <ContactForm title="Reinigung planen" description="Für eine unverbindliche Offerte für Ihre Endreinigung bitten wir Sie, folgende Angaben auszufüllen." fields={formFields} submitButtonText="Reinigungsofferte anfordern" emailTo="info@moebellift.ch" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Reinigungspartner;