import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AGB = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto py-12 md:py-16">
            <h1 className="text-4xl font-bold text-movers-primary mb-8">Allgemeine Geschäftsbedingungen</h1>
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold mt-6 mb-4">Allgemeine Geschäfts- und Annullierungs­bedingungen (AGB)</h2>
              <p className="font-medium">MöbelHoch / EMMAUS Zürich – Vermietung von Möbelliften</p>
              <p className="text-sm text-gray-500 mb-8">Stand: 3. Mai 2025</p>

              <div className="border-b border-gray-200 my-6"></div>

              <h3 className="text-xl font-semibold mt-6 mb-3">1 Geltungsbereich</h3>
              <p>
                Diese Bedingungen regeln sämtliche Miet- und Einsatz­verträge zwischen MöbelHoch (betrieben durch EMMAUS Zürich) und Ihnen als Auftraggeber*in («Kunde»). Entgegen­stehende oder abweichende Bedingungen werden nicht anerkannt, es sei denn, wir stimmen ihnen schriftlich zu.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2 Vertragsschluss und Reservation</h3>
              <p>
                Eine Online-Buchung über Calendly stellt eine provisorische Reservation dar. Der Vertrag kommt erst zustande, wenn EMMAUS Zürich den Einsatz telefonisch oder schriftlich bestätigt. Wir behalten uns vor, Buchungen ohne Angabe von Gründen abzulehnen.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">3 Leistungsumfang</h3>
              <p>
                Wir stellen den gebuchten Möbellift inklusive geschultem Operateur für die vereinbarte Dauer zur Verfügung. Nicht enthalten sind:
              </p>
              <ul className="list-disc pl-5 mt-2 mb-4">
                <li>Bewilligungen (Parkplatz, Strassen­sperrung, Polizeibescheide)</li>
                <li>Helfer zum Tragen Ihrer Güter</li>
                <li>Entsorgungsgebühren oder Container (sofern nicht schriftlich vereinbart)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">4 Pflichten des Kunden</h3>
              <ul className="list-disc pl-5 mt-2 mb-4">
                <li>
                  <span className="font-medium">Zufahrt & Stellplatz:</span> Freie Zufahrt für das Fahrzeug (Länge 4–7 m) und ein ebenes Aufstell­areal von min. 3 × 5 m.
                </li>
                <li>
                  <span className="font-medium">Bewilligungen:</span> Der Kunde beschafft vorgängig alle nötigen Park- und Gemeinde­bewilligungen.
                </li>
                <li>
                  <span className="font-medium">Sicherheitszone:</span> Während des Betriebs muss der Abstell­bereich abgesperrt sein; Haftpflicht für Dritt­personen liegt beim Kunden.
                </li>
                <li>
                  <span className="font-medium">Wartezeiten:</span> Verzögerungen vor Ort, die der Kunde zu vertreten hat, werden mit CHF 80.– / h in Rechnung gestellt.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">5 Preise und Zahlungsbedingungen</h3>
              <p>
                Alle Preise verstehen sich in Schweizer Franken exkl. MwSt. (falls erhoben).
              </p>
              <ul className="list-disc pl-5 mt-2 mb-4">
                <li>Pauschal­preis deckt Anfahrt, Auf- und Abbau sowie bis 120 Min. Hub­betrieb.</li>
                <li>Mehrstunden werden pro angefangene 30 Min. nach tarif CHF 80.– in Rechnung gestellt.</li>
                <li>Zahlung sofort nach Einsatz gegen Rechnung oder Twint. Neukunden: Bar/Twint vor Ort.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">6 Annullierung oder Termin­verschiebung durch den Kunden</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 mt-2 mb-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left border border-gray-200">Frist vor Einsatz­beginn</th>
                      <th className="px-4 py-2 text-left border border-gray-200">Gebühr</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-gray-200">&gt; 72 h</td>
                      <td className="px-4 py-2 border border-gray-200">kostenlos</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-200">72 h – 24 h</td>
                      <td className="px-4 py-2 border border-gray-200">50 % des Pauschal­preises</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-200">&lt; 24 h oder Nichterscheinen</td>
                      <td className="px-4 py-2 border border-gray-200">100 % des Pauschal­preises + allfällige Bewilligungs­kosten</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Termin­verschiebungen gelten als Annullierung, falls kein neuer Termin innert 5 Arbeitstagen fixiert wird.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">7 Rücktritt oder Einsatz­abbruch durch MöbelHoch</h3>
              <p>
                Wir dürfen den Einsatz abbrechen oder verschieben, wenn
              </p>
              <ul className="list-disc pl-5 mt-2 mb-4">
                <li>Wetter- oder Sicherheits­lage den Betrieb verunmöglicht (Sturm ≥ 60 km/h, Eis, Blitzschlag),</li>
                <li>behördliche Auflagen fehlen,</li>
                <li>der Kunde seine Mitwirkungspflichten verletzt.</li>
              </ul>
              <p>
                Bereits erbrachte Leistungen werden verrechnet; weiter­gehende Schaden­ersatz­ansprüche sind ausgeschlossen.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">8 Haftung</h3>
              <p>
                Wir haften für vorsätzlich oder grob­fahrlässig verursachte Schäden am Mietgerät und an Gütern des Kunden, maximal bis zum Zeitwert. Für reine Vermögens­schäden, Verzugs­folgen oder entgangenen Gewinn wird die Haftung weg­bedungen.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">9 Versicherung</h3>
              <p>
                Der Möbellift ist haftpflicht- und voll­kasko­versichert. Schäden an transportierten Gegenständen oder Gebäuden deckt nur die Versicherung des Kunden (Hausrat / Transport­versicherung). Der Kunde trägt die Selbst­behalte seiner Police.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">10 Datenschutz</h3>
              <p>
                Personen­daten werden ausschliesslich zur Vertrags­abwicklung gespeichert und gemäss Schweizer Datenschutz­gesetz behandelt. Dritte erhalten Daten nur, soweit für die Leistung erforderlich (z. B. Behörden für Bewilligungen).
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">11 Anwendbares Recht und Gerichtsstand</h3>
              <p>
                Es gilt ausschliesslich Schweizer Recht. Erfüllungs­ort und Gerichtsstand ist Zürich-Stadt.
              </p>

              <div className="border-b border-gray-200 my-6"></div>

              <h2 className="text-2xl font-semibold mt-6 mb-4">Kontakt</h2>
              <p>
                EMMAUS Zürich<br />
                Ringwiesenstrasse 171<br />
                8600 Dübendorf<br />
                T +41 44 801 90 60<br />
                E-Mail er@emmaus-zh.ch
              </p>

              <p className="mt-8 text-sm text-gray-500">Stand: 3. Mai 2025 (Europe/Zurich)</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AGB;