import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechnicalData from '../components/TechnicalData';
const MoebelliftMieten = () => {
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
  const securitySteps = ["Über entsprechenden Link unverbindliche Offerte anfragen", "Verfügbarkeit und Offerte wird geprüft und danach erhalten Sie eine provisorische Bestätigung", "Per Google Maps wird geprüft, ob grundsätzlich der Einsatz eines Möbelliftes möglich ist", "Falls ja, vereinbaren wir mit Ihnen einen Besichtigungstermin, um die Lage direkt vor Ort anzuschauen (dieser Service ist im Preis inbegriffen)", "Falls ein Einsatz von einem unserer Möbellifte möglich ist, erhalten Sie von uns eine definitive Terminbestätigung inkl. Offerte", "Einsatz des Möbellifts"];
  return <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-movers-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-movers-primary mb-6">Möbellift mieten</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Wir verfügen über drei verschiedene Möbellift-Modelle, die sich je nach Art und Ort des Einsatzes anbieten. 
                  Mit unseren Möbelliften transportieren Sie Ihre Möbel schnell, sicher und ohne Treppenhaus zu belasten.
                </p>
                <Link to="/offerten-anfordern" className="btn-primary">
                  Offerte anfordern
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div>
                <img alt="Möbellift im Einsatz" className="w-full h-auto rounded-lg shadow-lg" src="/lovable-uploads/511be1c6-699d-46d8-b346-7a99a7ab8f90.png" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Technische Angaben</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-gray-600 mb-8">
                Detaillierte technische Informationen zu unseren drei Objekten finden Sie untenstehend:
              </p>
              
              <TechnicalData specs={specs} />
              
              <p className="text-gray-600 mt-6">
                Sowohl der Auf- und Abbau des Möbellifts sowie der Betrieb werden von einem unserer Operateure vor Ort sichergestellt.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-movers-light">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Unsere Möbellifte</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative pt-[56.25%] overflow-hidden">
                  <img src="/lovable-uploads/0534d30c-3b29-483f-a186-3e4d7520a6a6.png" alt="Kleiner Piaggio Möbellift" className="absolute inset-0 h-full w-full object-cover" />
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
                <div className="relative pt-[56.25%] overflow-hidden">
                  <img src="/lovable-uploads/de818e26-8c16-42cb-9e90-105064128923.png" alt="Grosser Piaggio Möbellift" className="absolute inset-0 h-full w-full object-cover" />
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
                <div className="relative pt-[56.25%] overflow-hidden">
                  <img src="/lovable-uploads/89220f2f-96ea-4cb8-9220-6524eb9e5e99.png" alt="Manueller Möbellift" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-movers-primary mb-4">Manueller Lift</h3>
                  <p className="text-gray-600 mb-6">
                    Unser manueller Lift bietet flexible Lösungen für spezielle Einsätze, besonders beim Abtransport von Bauschutt bei Umbauarbeiten. 
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

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Vorgehen und Sicherheit</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="space-y-6">
                    {securitySteps.map((step, index) => <div key={index} className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-movers-light text-movers-primary font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>)}
                    <div className="pt-4">
                      <p className="text-gray-700 font-medium">
                        Die Bedienung unserer beiden Piaggio Möbellifte erfolgt von einem unserer Operateure.<br />
                        Den mobilen Möbellift können Sie nach einer Schulung durch uns auch gerne selbst bedienen.
                      </p>
                      <p className="text-gray-700 mt-4">
                        Bedenken Sie, dass je nach Einsatzort eine (teilweise) Strassensperrung durch die lokalen Behörden notwendig ist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-movers-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, einen Möbellift zu mieten?</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
              Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihnen mit unserem Möbellift-Service helfen können.
            </p>
            <Link to="/offerten-anfordern" className="bg-white text-movers-primary hover:bg-movers-yellow font-medium py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center">
              Offerte anfordern
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default MoebelliftMieten;