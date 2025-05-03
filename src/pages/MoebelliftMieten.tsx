import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechnicalData from '../components/TechnicalData';
import UnsereMoebellifte from '../components/UnsereMoebellifte';
import { useEffect } from 'react';

const MoebelliftMieten = () => {
  // Add structured data for breadcrumbs and product
  useEffect(() => {
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
          "name": "Möbellift mieten",
          "item": "https://www.moebelhoch.ch/moebellift-mieten"
        }
      ]
    };
    
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Möbellift Vermietung",
      "description": "Drei verschiedene Möbellift-Modelle für schnellen, sicheren Transport ohne Schäden am Treppenhaus.",
      "brand": {
        "@type": "Brand",
        "name": "MöbelHoch - EMMAUS Zürich"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "380",
        "highPrice": "700",
        "priceCurrency": "CHF",
        "offerCount": 3,
        "offers": [
          {
            "@type": "Offer",
            "name": "Kleiner Piaggio Möbellift",
            "price": "380",
            "priceCurrency": "CHF",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Grosser Piaggio Möbellift",
            "price": "450",
            "priceCurrency": "CHF",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Baulift",
            "price": "700",
            "priceCurrency": "CHF",
            "availability": "https://schema.org/InStock"
          }
        ]
      },
      "image": "https://www.moebelhoch.ch/images/moebellifte/piaggo-gross/piaggo-gross1.webp"
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);
    
    const productScript = document.createElement('script');
    productScript.type = 'application/ld+json';
    productScript.textContent = JSON.stringify(productSchema);
    document.head.appendChild(productScript);

    return () => {
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(productScript);
    };
  }, []);
  const specs = [{
    name: "Hubhöhe",
    kleinPiaggio: "21 Meter (5. Stock)",
    grossPiaggio: "30 Meter (9. Stock)",
    mobilerLift: "12 Meter (3./4. Stock)"
  }, {
    name: "Maximale Nutzlast",
    kleinPiaggio: "210kg",
    grossPiaggio: "400kg",
    mobilerLift: "Variabel"
  }, {
    name: "Kosten",
    kleinPiaggio: "Pauschal: CHF 380.00\nPro Person / Stunde: CHF 80.00",
    grossPiaggio: "Pauschal: CHF 450.00\nPro Person / Stunde: CHF 80.00",
    mobilerLift: "Auf- & Abbau: CHF 700.00\nPro Tag: CHF 150.00"
  }, {
    name: "Einsatzbereich",
    kleinPiaggio: "Vorteilhaft bei kleineren Strassen und kleinen Platzverhältnissen",
    grossPiaggio: "Vorteilhaft bei breiteren Strassen oder Stockwerken ab 6. Stockwerk",
    mobilerLift: "Abtransport von Bauschutt z.B. bei Umbauarbeiten"
  }];
  const securitySteps = ["Über entsprechenden Link unverbindliche Offerte anfragen", "Verfügbarkeit und Offerte wird geprüft und danach erhalten Sie eine provisorische Bestätigung", "Per Google Maps wird geprüft, ob grundsätzlich der Einsatz eines Möbelliftes möglich ist", "Falls ja, vereinbaren wir mit Ihnen einen Besichtigungstermin, um die Lage direkt vor Ort anzuschauen (dieser Service ist im Preis inbegriffen)", "Falls ein Einsatz von einem unserer Möbelliften möglich ist, erhalten Sie von uns eine definitive Terminbestätigung inkl. Offerte", "Einsatz des Möbellifts"];
  const piaggioKleinImages = [
    {
      src: "/images/moebellifte/piaggo-klein/piaggo-klein1.webp",
      alt: "Kleiner Piaggio Möbellift von vorne"
    },
    {
      src: "/images/moebellifte/piaggo-klein/piaggo-klein2.webp",
      alt: "Kleiner Piaggio Möbellift von der Seite"
    }
  ];

  const piaggioGrossImages = [
    {
      src: "/images/moebellifte/piaggo-gross/piaggo-gross1.webp",
      alt: "Grosser Piaggio Möbellift von vorne"
    },
    {
      src: "/images/moebellifte/piaggo-gross/piaggo-gross2.webp",
      alt: "Grosser Piaggio Möbellift von der Seite"
    },
    {
      src: "/images/moebellifte/piaggo-gross/piaggo-gross3.webp",
      alt: "Grosser Piaggio Möbellift im Einsatz"
    }
  ];

  const bauliftImages = [
    {
      src: "/images/moebellifte/baulift/baulift1.webp",
      alt: "Baulift von vorne"
    },
    {
      src: "/images/moebellifte/baulift/baulift2.webp",
      alt: "Baulift von der Seite"
    },
    {
      src: "/images/moebellifte/baulift/baulift3.webp",
      alt: "Baulift im Einsatz"
    }
  ];

  return <>
      <Navbar />
      <main className="pt-0">
        <section className="py-20 md:py-28 bg-movers-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-white content-fade-in-up">
                <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <span className="text-sm font-medium">Professioneller Service</span>
                </div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">Möbellift mieten</h1>
                <p className="text-xl mb-8 text-gray-100">
                  Wir verfügen über drei verschiedene Möbellift-Modelle, die sich je nach Art und Ort des Einsatzes anbieten. 
                  Mit unseren Möbelliften transportieren Sie Ihre Möbel schnell, sicher und ohne Schäden am Treppenhaus zu riskieren.
                </p>
                <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); document.querySelector('#moebellift-section').scrollIntoView({behavior: 'smooth'}); }} className="bg-white text-movers-primary hover:bg-movers-yellow hover:text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center shadow-lg group">
                  Möbellift auswählen
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="relative z-10 hero-image-container hero-image-animate animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <div className="relative p-3 bg-white rounded-2xl shadow-xl rotate-1 transform transition-transform hover:rotate-0 duration-500 hero-image-wrapper">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      alt="Grosser Piaggio Möbellift für einfachen und sicheren Möbeltransport" 
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-700 hero-image" 
                      src="/images/moebellifte/piaggo-gross/piaggo-gross1.webp"
                      width={640}
                      height={480}
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center mb-16 animate-fade-in-up">
              <div className="inline-block px-4 py-1 rounded-full bg-movers-light text-movers-primary mb-4">
                <span className="text-sm font-medium">Technische Details</span>
              </div>
              <h2 className="text-4xl font-bold text-movers-primary mb-6">Technische Angaben</h2>
              <p className="text-lg text-gray-600">
                Detaillierte technische Informationen zu unseren drei Objekten finden Sie untenstehend:
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <TechnicalData specs={specs} />
              
              <div className="bg-movers-light rounded-lg p-6 mt-10 shadow-inner">
                <p className="text-gray-700 italic text-center">
                  Sowohl der Auf- und Abbau des Möbellifts sowie der Betrieb werden von einem unserer Operateure vor Ort sichergestellt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div id="moebellift-section">
          <UnsereMoebellifte />
        </div>

        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center mb-16 animate-fade-in-up">
              <div className="inline-block px-4 py-1 rounded-full bg-movers-light text-movers-primary mb-4">
                <span className="text-sm font-medium">Prozess</span>
              </div>
              <h2 className="text-4xl font-bold text-movers-primary mb-6">Vorgehen und Sicherheit</h2>
              <p className="text-lg text-gray-600">
                Ein strukturierter Prozess sorgt für optimale Sicherheit und Effizienz:
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 transform transition-all hover:shadow-2xl duration-300">
                <div className="p-8 md:p-10">
                  <div className="space-y-8">
                    {securitySteps.map((step, index) => (
                      <div key={index} className="flex group">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-movers-primary text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                            {index + 1}
                          </div>
                        </div>
                        <div className="ml-6">
                          <p className="text-gray-700 text-lg">{step}</p>
                        </div>
                      </div>
                    ))}
                    <div className="pt-6 mt-6 border-t border-dashed border-gray-200">
                      <div className="p-6 bg-movers-light rounded-lg">
                        <p className="text-gray-700 font-medium">
                          Die Bedienung unserer beiden Piaggio Möbellifte erfolgt von einem unserer Operateure.<br />
                          Den Baulift können Sie nach einer Schulung durch uns auch gerne selbst bedienen.
                        </p>
                        <p className="text-gray-700 mt-4 font-medium">
                          Bedenken Sie, dass je nach Einsatzort eine (teilweise) Strassensperrung durch die lokalen Behörden notwendig ist.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-movers-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <div className="inline-block bg-white/20 text-white font-medium rounded-full py-1 px-4 mb-6">
                Jetzt starten
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Bereit, einen Möbellift zu mieten?</h2>
              <p className="text-xl text-gray-100 mb-10">
                Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihnen mit unserem Möbellift-Service helfen können.
              </p>
              <a 
                href="javascript:void(0)" 
                onClick={(e) => { e.preventDefault(); document.querySelector('#moebellift-section').scrollIntoView({behavior: 'smooth'}); }} 
                className="bg-white text-movers-primary hover:bg-movers-yellow hover:text-white font-medium py-4 px-10 rounded-md transition-all duration-300 inline-flex items-center shadow-lg text-lg group"
              >
                Möbellift auswählen
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default MoebelliftMieten;