import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Datenschutz = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto py-12 md:py-16">
            <h1 className="text-4xl font-bold text-movers-primary mb-4">Datenschutzerklärung</h1>
            <p className="text-lg text-gray-600 mb-8">Version 1.1, Stand 3. Mai 2025</p>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-8">In dieser Datenschutzerklärung erläutern wir, wie die MBP GmbH (Rietholzstrasse 34, 8125 Zollikerberg) Ihre Personendaten im Sinne des revidierten Schweizer Datenschutzgesetzes (revDSG) verarbeitet.</p>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <h2 className="text-2xl font-semibold mt-6 mb-4">1. Verantwortliche Stelle</h2>
              <p>
                MBP GmbH<br />
                Rietholzstrasse 34<br />
                8125 Zollikerberg<br />
                E-Mail: urs.gretsch@outlook.com
              </p>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <h2 className="text-2xl font-semibold mt-6 mb-4">2. Erhobene Daten</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Direktangaben: Name, E-Mail, Telefonnummer – z. B. über Kontaktformulare oder Terminbuchung via Calendly.</li>
                <li>Nutzungsdaten: IP-Adresse, Browsertyp, Gerätedaten, Datum/Uhrzeit, Referrer.</li>
                <li>Technische Daten: Cookies, Session-IDs.</li>
              </ul>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <h2 className="text-2xl font-semibold mt-6 mb-4">3. Verarbeitungszwecke und Rechtsgrundlagen</h2>
              <ol className="list-decimal pl-6 mb-4">
                <li>Vertrags- und Anfragenbearbeitung (Art. 6 Abs. 1 lit. b revDSG): Beantwortung von Kontaktanfragen und Terminbuchungen.</li>
                <li>Betrieb und Sicherheit der Website (Art. 6 Abs. 1 lit. f revDSG): Schutz vor Missbrauch und Optimierung der Webfunktionalität.</li>
                <li>Analyse und Verbesserung (berechtigtes Interesse): Anonyme Web-Analyse zur Usability-Optimierung.</li>
                <li>Gesetzliche Pflichten (Art. 6 Abs. 1 lit. c revDSG).</li>
              </ol>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <h2 className="text-2xl font-semibold mt-6 mb-4">4. Cookies und Tracking</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Session-Cookies: Für Grundfunktionen der Website notwendig.</li>
                <li>Analytische Cookies: Anonymisiert; kein personenbezogenes Tracking.</li>
              </ul>
              <p>Sie können Cookies in Ihrem Browser deaktivieren; einige Funktionen könnten dann eingeschränkt sein.</p>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <h2 className="text-2xl font-semibold mt-6 mb-4">5. Calendly-Integration</h2>
              <p>Wenn Sie über Calendly einen Termin buchen, werden Ihre Eingaben (Name, E-Mail, Datum/Uhrzeit etc.) direkt an Calendly LLC in den USA übermittelt und dort gemäss deren Datenschutzbestimmungen verarbeitet.</p>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <h2 className="text-2xl font-semibold mt-6 mb-4">6. Datenweitergabe</h2>
              <p>Ihre Daten geben wir nur weiter, wenn</p>
              <ul className="list-disc pl-6 mb-4">
                <li>dies für die Vertragserfüllung erforderlich ist (z. B. an Umzugsfirmen),</li>
                <li>Sie eingewilligt haben (z. B. Newsletter),</li>
                <li>oder eine gesetzliche Pflicht besteht.</li>
              </ul>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <h2 className="text-2xl font-semibold mt-6 mb-4">7. Speicherdauer</h2>
              <p>Wir speichern Ihre Daten nur so lange, wie es für die genannten Zwecke nötig oder gesetzlich vorgeschrieben ist. Danach werden sie gelöscht oder anonymisiert.</p>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <h2 className="text-2xl font-semibold mt-6 mb-4">8. Datensicherheit</h2>
              <p>Wir setzen angemessene technische und organisatorische Massnahmen ein (Zutritts- und Zugriffskontrollen, Verschlüsselung, interne Richtlinien), um Ihre Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen.</p>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <h2 className="text-2xl font-semibold mt-6 mb-4">9. Rechte der Betroffenen</h2>
              <p>Sie haben das Recht auf</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Auskunft über Ihre gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung oder Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerspruch gegen Verarbeitung für Direktmarketing</li>
              </ul>
              <p>Richten Sie Ihre Anfragen bitte an urs.gretsch@outlook.com.</p>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <h2 className="text-2xl font-semibold mt-6 mb-4">10. Änderungen dieser Erklärung</h2>
              <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Massgeblich ist jeweils die auf unserer Website veröffentlichte Version.</p>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <p className="mt-4 text-sm text-gray-500">Stand: 3. Mai 2025 (Europe/Zurich)</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Datenschutz;