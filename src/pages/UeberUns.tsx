
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PartnerList from '@/components/PartnerList';
import { partners } from '@/data/partners';

const UeberUns = () => {
  return <>
      <Navbar />
      <main className="pt-0">
        <section className="py-20 md:py-28 bg-movers-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="content-fade-in-up">
                <div className="inline-block bg-white/20 text-white font-medium rounded-full py-1 px-4 mb-4">
                  Unser Team
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Über Uns</h1>
                <p className="text-lg text-gray-200 mb-8 max-w-[480px]">
                  Hinter MöbelHoch steht eine wertvolle Zusammenarbeit zwischen dem Wohltätigkeitsverein EMMAUS Zürich und verschiedenen Experten für Umzug und Logistik. Gemeinsam bieten wir Ihnen hochwertige Dienstleistungen rund um Umzug, Möbellift und Entsorgung.
                </p>
                <Link to="/offerten-anfordern" className="bg-movers-yellow text-movers-primary hover:brightness-110 font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center group">
                  Kontakt aufnehmen
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative z-10 hero-image-container hero-image-animate animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <div className="relative p-3 bg-white rounded-2xl shadow-xl rotate-1 transform transition-transform hover:rotate-0 duration-500 hero-image-wrapper">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Team von MöbelHoch" 
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-700 hero-image" 
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
                    Unser Netzwerk
                  </div>
                </div>
                <h2 className="section-title text-center mb-8">Unsere Partner & Dienstleistungen</h2>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <PartnerList partners={partners} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center animate-fade-in-up">
                <div className="flex justify-center mb-4">
                  <div className="inline-block bg-movers-primary/10 text-movers-primary font-medium rounded-full py-1 px-4">
                    Unsere Historie
                  </div>
                </div>
                <h2 className="section-title text-center mb-8">Unsere Geschichte</h2>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-10 mb-16 animate-fade-in-up">
                <div className="inline-block bg-movers-primary/10 text-movers-primary font-medium rounded-full py-1 px-4 mb-4">
                  Kooperation
                </div>
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Eine besondere Partnerschaft</h3>
                <p className="text-gray-700 mb-6">
                  Die Zusammenarbeit zwischen EMMAUS Zürich und unseren Logistikpartnern entstand aus dem gemeinsamen Ziel, Menschen bei ihren Umzügen professionell zu unterstützen und gleichzeitig soziale Verantwortung zu übernehmen.
                </p>
                <p className="text-gray-700 mb-8">
                  Durch diese einzigartige Kooperation können wir nicht nur erstklassige Dienstleistungen anbieten, sondern auch gemeinnützige Projekte unterstützen. Ein Teil unserer Einnahmen fliesst in soziale Initiativen, die von EMMAUS Zürich betreut werden.
                </p>
                
                <Link to="/offerten-anfordern" className="btn-primary inline-flex items-center group">
                  Kontakt aufnehmen
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 p-4">
                    <div className="overflow-hidden rounded-xl shadow-lg">
                      <img alt="EMMAUS Zürich Brockenhaus" className="w-full h-auto transform hover:scale-105 transition-transform duration-700" src="https://bin.staticlocal.ch/localplace-images/c6/c67e9985837c3ede42726ec8c2062a3ab7a00e44/Eingang.png" />
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 p-8 md:p-10">
                    <div className="inline-block bg-movers-primary/10 text-movers-primary font-medium rounded-full py-1 px-4 mb-4">
                      Partner
                    </div>
                    <h3 className="text-2xl font-bold text-movers-primary mb-4">EMMAUS Zürich</h3>
                    <p className="text-gray-600 mb-4">
                      EMMAUS Zürich ist ein Wohltätigkeitsverein, der sich für bedürftige Menschen einsetzt. Durch das Betreiben eines Brockenhauses werden nicht nur Möbel und Gegenstände wiederverwertet, sondern auch wichtige soziale Projekte finanziert.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Als unser wichtigster Partner unterstützt EMMAUS unser Engagement für nachhaltige Umzugslösungen und soziale Verantwortung in der Gemeinschaft.
                    </p>
                    
                    <a href="https://www.emmaus.ch" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center group">
                      Website besuchen
                      <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-10 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <div className="inline-block bg-movers-primary/10 text-movers-primary font-medium rounded-full py-1 px-4 mb-4">
                  Philosophie
                </div>
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Unsere Werte</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-5">
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                          <Heart size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold">Soziale Verantwortung</p>
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                          <Heart size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold">Nachhaltigkeit</p>
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                          <Heart size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold">Transparenz</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-5">
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                          <Heart size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold">Professionalität</p>
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                          <Heart size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold">Kundenorientierung</p>
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 bg-movers-light rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-movers-primary group-hover:text-white transition-colors duration-300">
                          <Heart size={20} className="text-movers-secondary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold">Zuverlässigkeit</p>
                        </div>
                      </li>
                    </ul>
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
                Kontakt
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Möchten Sie mehr erfahren?</h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
                Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihnen mit unseren Dienstleistungen helfen können.
              </p>
              <Link to="/offerten-anfordern" className="bg-white text-movers-primary hover:bg-movers-yellow hover:text-white font-medium py-3.5 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group">
                Kontakt aufnehmen
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default UeberUns;
