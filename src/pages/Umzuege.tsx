import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Check, Package, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
const Umzuege = () => {
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
    id: "fromAddress",
    label: "Adresse von wo gezügelt werden muss",
    type: "text",
    placeholder: "Auszugsadresse",
    required: true
  }, {
    id: "fromRooms",
    label: "Anzahl Zimmer",
    type: "text",
    placeholder: "z.B. 3.5",
    required: true
  }, {
    id: "fromFloor",
    label: "Stockwerk",
    type: "text",
    placeholder: "z.B. 2. OG",
    required: true
  }, {
    id: "date",
    label: "Datum",
    type: "date",
    placeholder: "",
    required: true
  }, {
    id: "toAddress",
    label: "Adresse wohin gezügelt werden muss",
    type: "text",
    placeholder: "Einzugsadresse",
    required: true
  }, {
    id: "toRooms",
    label: "Anzahl Zimmer",
    type: "text",
    placeholder: "z.B. 4.5",
    required: true
  }, {
    id: "toFloor",
    label: "Stockwerk",
    type: "text",
    placeholder: "z.B. 3. OG",
    required: true
  }, {
    id: "lift",
    label: "Einsatz Möbellift",
    type: "select",
    placeholder: "ja / nein",
    required: true
  }, {
    id: "furniture",
    label: "Ungefähre Anzahl an grösseren Möbelstücken inkl. Fotos",
    type: "textarea",
    placeholder: "Beschreiben Sie kurz die zu transportierenden Möbelstücke",
    rows: 4,
    required: true
  }];
  return <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-movers-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-movers-primary mb-6">Umzüge</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Sie wollen bei Ihrem Umzug nichts dem Zufall überlassen? 
                  Dann haben wir neben unserem fahrenden Umzugshelfer mit EMMAUS Zürich und der Basha's GmbH auch zwei Experten an der Hand, welche Ihnen gerne fachmännisch zur Hand gehen.
                </p>
                <Link to="/offerten-anfordern" className="btn-primary">
                  Offerte anfordern
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div>
                <img alt="Umzugsservice Teamarbeit" className="w-full h-auto rounded-lg shadow-lg" src="https://plus.unsplash.com/premium_photo-1681825046030-e3a13ba21f74?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center mb-8">Unsere Umzugs-Dienstleistungen</h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Wir bieten Ihnen einen umfassenden Service für einen stressfreien Umzug.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package size={28} className="text-movers-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-movers-primary mb-3">Sorgfältiges Einpacken</h3>
                  <p className="text-gray-600">
                    Wir räumen Ihr gesamtes Hab und Gut sorgfältig in Umzugskisten und sichern alles für den Transport.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck size={28} className="text-movers-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-movers-primary mb-3">Professioneller Transport</h3>
                  <p className="text-gray-600">
                    Mit unseren Möbelliften und Transportfahrzeugen bringen wir Ihre Möbel sicher an den Zielort.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-movers-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={28} className="text-movers-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-movers-primary mb-3">Fachmännische Beratung</h3>
                  <p className="text-gray-600">
                    Unsere Experten von EMMAUS Zürich und Basha's GmbH unterstützen Sie mit ihrer Erfahrung.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-movers-primary mb-6">Was wir für Sie tun</h3>
                <p className="text-gray-700 mb-6">
                  Sie räumen Ihr gesamtes Haab und Gut sorgfältig in Umzugskisten, helfen Ihnen beim Abbau Ihrer bestehenden Möbel und Möbelstücke, welche Sie nach Ihrem Umzug nicht mehr benötigen, werden entweder dem gemeinnützigen Brockenhaus EMMAUS Zürich zur Verfügung gestellt oder dann gleich fachmännisch für Sie entsorgt.
                </p>
                
                <h4 className="text-xl font-semibold text-movers-primary mb-4">Unsere Vorteile:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Professionelles Team mit langjähriger Erfahrung</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Möbellifte für alle Stockwerke und Gebäudetypen</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Entsorgung nicht mehr benötigter Möbel</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Unterstützung wohltätiger Projekte durch EMMAUS Zürich</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-movers-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Transparente Preisgestaltung ohne versteckte Kosten</span>
                  </li>
                </ul>
                
                <p className="text-gray-700">
                  Wir haben Ihr Interesse geweckt? Dann zögern Sie nicht, sich mit einem unseren beiden Partner in Verbindung zu setzen oder direkt hier eine unverbindliche Offerte einzuholen.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-movers-primary mb-4">Basha's GmbH</h3>
                  <p className="text-gray-600 mb-6">
                    Professioneller Umzugsservice mit langjähriger Erfahrung und modernem Equipment.
                  </p>
                  <Link to="/offerten-anfordern" className="btn-outline w-full justify-center">
                    Kontakt aufnehmen
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-movers-primary mb-4">EMMAUS Zürich</h3>
                  <p className="text-gray-600 mb-6">
                    Gemeinnütziger Umzugshelfer, der lokale und internationale Hilfsprojekte unterstützt.
                  </p>
                  <Link to="/offerten-anfordern" className="btn-outline w-full justify-center">
                    Kontakt aufnehmen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center mb-12">Offerte anfordern</h2>
              
              <ContactForm title="Umzug planen" description="Für eine unverbindliche Offerte für Ihren Umzug bitten wir Sie, folgende Angaben auszufüllen." fields={formFields} submitButtonText="Umzugsofferte anfordern" emailTo="info@moebellift.ch" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Umzuege;