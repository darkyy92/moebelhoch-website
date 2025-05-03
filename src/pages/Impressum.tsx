import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Impressum = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto py-12 md:py-16">
            <h1 className="text-4xl font-bold text-movers-primary mb-8">Impressum</h1>
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold mt-6 mb-4">Anbieter</h2>
              <p>
                MBP GmbH<br />
                Rietholzstrasse 34<br />
                8125 Zollikerberg<br />
                Schweiz
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">Vertreten durch</h2>
              <p>Urs Gretsch, Geschäftsführer</p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">Kontakt</h2>
              <p>
                Telefon: +41 79 447 83 22<br />
                E-Mail: urs.gretsch@outlook.com
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">Handelsregister</h2>
              <p>Eingetragen im Handelsregister des Kantons Zürich<br />
                Handelsregisternummer: CHE-421.664.722</p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">UID</h2>
              <p>UID CHE-421.664.722 MWST</p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">Haftungsausschluss</h2>
              <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschliesslich deren Betreiber verantwortlich.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">Urheberrecht</h2>
              <p>Die durch MBP GmbH erstellten Inhalte und Werke auf dieser Webseite unterliegen dem Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung oder öffentliche Wiedergabe ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung von MBP GmbH.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">Datenschutz</h2>
              <p>Unsere vollständige Datenschutzerklärung finden Sie unter<br />
                <a href="/datenschutz" className="text-blue-600 hover:underline">https://moebelhoch.ch/datenschutz</a></p>

              <p className="mt-8 text-sm text-gray-500">Stand: 3. Mai 2025 (Europe/Zurich)</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Impressum;