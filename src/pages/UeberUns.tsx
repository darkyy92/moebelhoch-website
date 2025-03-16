
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Check, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
const UeberUns = () => {
  return <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-movers-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-movers-primary mb-6">Über Uns</h1>
                <p className="text-lg text-gray-600 mb-8">Hinter Möbellift mieten steht eine wertvolle Zusammenarbeit zwischen dem Wohltätigkeitsverein EMMAUS Zürich und der Basha's GmbH. Gemeinsam bieten wir Ihnen hochwertige Dienstleistungen rund um Umzug, Möbellift und Entsorgung.</p>
                <Link to="/offerten-anfordern" className="btn-primary">
                  Kontakt aufnehmen
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team von MöbelLift" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center mb-12">Unsere Geschichte</h2>
              
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Eine besondere Partnerschaft</h3>
                <p className="text-gray-700 mb-6">
                  Die Zusammenarbeit zwischen EMMAUS Zürich und Basha's GmbH entstand aus dem gemeinsamen Ziel, Menschen bei ihren Umzügen professionell zu unterstützen und gleichzeitig soziale Verantwortung zu übernehmen.
                </p>
                <p className="text-gray-700 mb-6">
                  Durch diese einzigartige Kooperation können wir nicht nur erstklassige Dienstleistungen anbieten, sondern auch gemeinnützige Projekte unterstützen. Ein Teil unserer Einnahmen fliesst in soziale Initiativen, die von EMMAUS Zürich betreut werden.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-movers-primary mb-4">EMMAUS Zürich</h3>
                  <p className="text-gray-600 mb-6">
                    EMMAUS Zürich ist ein Wohltätigkeitsverein, der sich für bedürftige Menschen einsetzt. Durch das Betreiben eines Brockenhauses werden nicht nur Möbel und Gegenstände wiederverwertet, sondern auch wichtige soziale Projekte finanziert.
                  </p>
                  <div className="h-64 overflow-hidden rounded-lg shadow-md">
                    <img alt="EMMAUS Zürich" className="w-full h-full object-cover" src="https://bin.staticlocal.ch/localplace-images/c6/c67e9985837c3ede42726ec8c2062a3ab7a00e44/Eingang.png" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-movers-primary mb-4">Basha's GmbH</h3>
                  <p className="text-gray-600 mb-6">
                    Die Basha's GmbH ist ein erfahrenes Unternehmen im Bereich Umzug und Möbeltransport. Mit modernem Equipment und einem qualifizierten Team sorgt Basha's für reibungslose Abläufe und zufriedene Kunden.
                  </p>
                  <div className="h-64 overflow-hidden rounded-lg shadow-md">
                    <img alt="Basha's GmbH" className="w-full h-full object-cover" src="https://www.lokalesgewerbe.ch/media/com_jbusinessdirectory/pictures/companies/44393/bashas7.jpg" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Unsere Werte</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Heart size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Soziale Verantwortung</span>
                      </li>
                      <li className="flex items-start">
                        <Heart size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Nachhaltigkeit</span>
                      </li>
                      <li className="flex items-start">
                        <Heart size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Transparenz</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Heart size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Professionalität</span>
                      </li>
                      <li className="flex items-start">
                        <Heart size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Kundenorientierung</span>
                      </li>
                      <li className="flex items-start">
                        <Heart size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Zuverlässigkeit</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-movers-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Möchten Sie mehr erfahren?</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
              Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihnen mit unseren Dienstleistungen helfen können.
            </p>
            <Link to="/offerten-anfordern" className="bg-white text-movers-primary hover:bg-movers-yellow font-medium py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center">
              Kontakt aufnehmen
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default UeberUns;
