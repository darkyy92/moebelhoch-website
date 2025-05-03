import { ArrowRight } from 'lucide-react';
import MoebelLiftGallery from './MoebelLiftGallery';

const UnsereMoebellifte = () => {
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

  return (
    <section className="py-20 md:py-28 bg-gray-100 relative">
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-movers-light text-movers-primary mb-4">
            <span className="text-sm font-medium">Unsere Flotte</span>
          </div>
          <h2 className="text-4xl font-bold text-movers-primary mb-6">Unsere Möbellifte</h2>
          <p className="text-lg text-gray-600">
            Wir verfügen über drei verschiedene Möbellift-Modelle, die sich je nach Art und Ort des Einsatzes anbieten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            <div className="relative">
              <div className="absolute top-0 right-0 bg-movers-primary text-white px-3 py-1 text-sm font-medium rounded-bl-lg z-10">21m</div>
              <MoebelLiftGallery images={piaggioKleinImages} />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between h-full">
              <div className="flex flex-col justify-center flex-1">
                <h3 className="text-2xl font-bold text-movers-primary mb-4">Piaggio klein</h3>
                <p className="text-gray-600 mb-6">
                  Unser kleiner Piaggio-Möbellift eignet sich perfekt für Einsätze in engeren Strassen und bei begrenzten Platzverhältnissen. 
                  Mit einer Hubhöhe von 21 Metern erreicht er problemlos bis zum 5. Stockwerk.
                </p>
                <div className="py-5 border-t border-dashed border-gray-200">
                  <p className="font-bold text-movers-primary mb-3">Einsatzbereich:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-movers-primary mr-2">•</span>
                      <span>Möbeltransport bis 5. Stock</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-primary mr-2">•</span>
                      <span>Enge Strassen und begrenzte Platzverhältnisse</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-primary mr-2">•</span>
                      <span>Maximale Nutzlast von 210kg</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="https://calendly.com/moebelhoch/moebelhoch-piaggo-klein" 
                  target="_blank" 
                  rel="noopener"
                  className="w-full bg-movers-primary hover:bg-movers-secondary text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
                >
                  Piaggio klein anfragen
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            <div className="relative">
              <div className="absolute top-0 right-0 bg-movers-primary text-white px-3 py-1 text-sm font-medium rounded-bl-lg z-10">30m</div>
              <MoebelLiftGallery images={piaggioGrossImages} />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between h-full">
              <div className="flex flex-col justify-center flex-1">
                <h3 className="text-2xl font-bold text-movers-primary mb-4">Piaggio gross</h3>
                <p className="text-gray-600 mb-6">
                  Unser grosser Piaggio-Möbellift ist ideal für höhere Stockwerke und schwerere Lasten. 
                  Mit seiner beeindruckenden Hubhöhe von 30 Metern erreicht er sogar das 9. Stockwerk.
                </p>
                <div className="py-5 border-t border-dashed border-gray-200">
                  <p className="font-bold text-movers-primary mb-3">Einsatzbereich:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-movers-primary mr-2">•</span>
                      <span>Möbeltransport bis 9. Stock</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-primary mr-2">•</span>
                      <span>Breitere Strassen oder höhere Gebäude</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-primary mr-2">•</span>
                      <span>Schwerere Lasten bis 400kg</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="https://calendly.com/moebelhoch/piaggio-gross-moebellift-buchen" 
                  target="_blank" 
                  rel="noopener"
                  className="w-full bg-movers-primary hover:bg-movers-secondary text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
                >
                  Piaggio gross anfragen
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            <div className="relative">
              <div className="absolute top-0 right-0 bg-movers-primary text-white px-3 py-1 text-sm font-medium rounded-bl-lg z-10">12m</div>
              <MoebelLiftGallery images={bauliftImages} />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between h-full">
              <div className="flex flex-col justify-center flex-1">
                <h3 className="text-2xl font-bold text-movers-primary mb-4">Baulift</h3>
                <p className="text-gray-600 mb-6">
                  Unser Baulift bietet flexible Lösungen für spezielle Einsätze, besonders beim Abtransport von Bauschutt bei Umbauarbeiten. 
                  Mit einer Hubhöhe von 12 Metern bedient er bis zum 3./4. Stockwerk.
                </p>
                <div className="py-5 border-t border-dashed border-gray-200">
                  <p className="font-bold text-movers-primary mb-3">Einsatzbereich:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-movers-primary mr-2">•</span>
                      <span>Bauschuttabtransport</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-primary mr-2">•</span>
                      <span>Renovierungs- und Umbauarbeiten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-movers-primary mr-2">•</span>
                      <span>Flexible Anwendungsmöglichkeiten</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="https://calendly.com/moebelhoch/baulift-buchen" 
                  target="_blank" 
                  rel="noopener"
                  className="w-full bg-movers-primary hover:bg-movers-secondary text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
                >
                  Baulift anfragen
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default UnsereMoebellifte;