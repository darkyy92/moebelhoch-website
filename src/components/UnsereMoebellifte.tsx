import { Link } from 'react-router-dom';
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
    <section className="py-16 md:py-24 bg-movers-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Unsere Möbellifte</h2>
          <p className="text-gray-600 text-lg">
            Wir verfügen über drei verschiedene Möbellift-Modelle, die sich je nach Art und Ort des Einsatzes anbieten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <MoebelLiftGallery images={piaggioKleinImages} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-movers-primary mb-4">Piaggio klein</h3>
              <p className="text-gray-600 mb-6">
                Unser kleiner Piaggio-Möbellift eignet sich perfekt für Einsätze in engeren Strassen und bei begrenzten Platzverhältnissen. 
                Mit einer Hubhöhe von 21 Metern erreicht er problemlos bis zum 5. Stockwerk.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-movers-primary mb-2">Einsatzbereich:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Möbeltransport bis 5. Stock</li>
                  <li>• Enge Strassen und begrenzte Platzverhältnisse</li>
                  <li>• Maximale Nutzlast von 210kg</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <MoebelLiftGallery images={piaggioGrossImages} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-movers-primary mb-4">Piaggio gross</h3>
              <p className="text-gray-600 mb-6">
                Unser grosser Piaggio-Möbellift ist ideal für höhere Stockwerke und schwerere Lasten. 
                Mit seiner beeindruckenden Hubhöhe von 30 Metern erreicht er sogar das 9. Stockwerk.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-movers-primary mb-2">Einsatzbereich:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Möbeltransport bis 9. Stock</li>
                  <li>• Breitere Strassen oder höhere Gebäude</li>
                  <li>• Schwerere Lasten bis 400kg</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <MoebelLiftGallery images={bauliftImages} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-movers-primary mb-4">Baulift</h3>
              <p className="text-gray-600 mb-6">
                Unser Baulift bietet flexible Lösungen für spezielle Einsätze, besonders beim Abtransport von Bauschutt bei Umbauarbeiten. 
                Mit einer Hubhöhe von 12 Metern bedient er bis zum 3./4. Stockwerk.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-movers-primary mb-2">Einsatzbereich:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Bauschuttabtransport</li>
                  <li>• Renovierungs- und Umbauarbeiten</li>
                  <li>• Flexible Anwendungsmöglichkeiten</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/offerten-anfordern" className="btn-primary">
            Möbellift anfragen
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UnsereMoebellifte;