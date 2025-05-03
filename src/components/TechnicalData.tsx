
import { useIsMobile } from "../hooks/use-mobile";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "./ui/table";
import { Check, ArrowUp } from "lucide-react";

interface TechnicalSpec {
  name: string;
  kleinPiaggio: string | number;
  grossPiaggio: string | number;
  mobilerLift: string | number;
}

interface TechnicalDataProps {
  specs: TechnicalSpec[];
}

const TechnicalData = ({ specs }: TechnicalDataProps) => {
  const isMobile = useIsMobile();

  // Helper function to format pricing display
  const formatPricing = (pricingText: string | number) => {
    if (typeof pricingText !== 'string' || !pricingText.includes('CHF')) {
      return pricingText;
    }

    const lines = pricingText.split('\n');
    return (
      <div className="space-y-2">
        {lines.map((line, i) => {
          if (line.includes('CHF')) {
            const [label, price] = line.split(': ');
            return (
              <div key={i} className="flex justify-between items-center">
                <span className="text-gray-600">{label}:</span>
                <span className="font-bold text-movers-primary">{price}</span>
              </div>
            );
          }
          return <div key={i}>{line}</div>;
        })}
      </div>
    );
  };

  // Is this row specifically about pricing?
  const isPricingRow = (name: string) => name.toLowerCase().includes('kosten');

  if (isMobile) {
    return (
      <div className="space-y-8">
        {/* Kleiner Piaggio */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:shadow-lg">
          <div className="bg-movers-primary text-white p-4 font-semibold text-center">
            <h3 className="text-xl">Kleiner Piaggio</h3>
            <div className="flex justify-center mt-2">
              <ArrowUp className="mr-1" size={16} />
              <span className="text-sm font-normal">Bis 21m (5. Stock)</span>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {specs.map((spec, index) => (
              <div key={index} className={`p-4 ${isPricingRow(spec.name) ? 'bg-amber-50' : ''}`}>
                <h4 className="font-medium text-movers-primary mb-2">{spec.name}</h4>
                {isPricingRow(spec.name) ? (
                  formatPricing(spec.kleinPiaggio)
                ) : (
                  <p className="text-gray-700 whitespace-pre-line">{spec.kleinPiaggio}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Grosser Piaggio */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:shadow-lg">
          <div className="bg-movers-primary text-white p-4 font-semibold text-center">
            <h3 className="text-xl">Grosser Piaggio</h3>
            <div className="flex justify-center mt-2">
              <ArrowUp className="mr-1" size={16} />
              <span className="text-sm font-normal">Bis 30m (9. Stock)</span>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {specs.map((spec, index) => (
              <div key={index} className={`p-4 ${isPricingRow(spec.name) ? 'bg-amber-50' : ''}`}>
                <h4 className="font-medium text-movers-primary mb-2">{spec.name}</h4>
                {isPricingRow(spec.name) ? (
                  formatPricing(spec.grossPiaggio)
                ) : (
                  <p className="text-gray-700 whitespace-pre-line">{spec.grossPiaggio}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobiler Lift */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:shadow-lg">
          <div className="bg-movers-primary text-white p-4 font-semibold text-center">
            <h3 className="text-xl">Mobiler Lift</h3>
            <div className="flex justify-center mt-2">
              <ArrowUp className="mr-1" size={16} />
              <span className="text-sm font-normal">Bis 12m (3./4. Stock)</span>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {specs.map((spec, index) => (
              <div key={index} className={`p-4 ${isPricingRow(spec.name) ? 'bg-amber-50' : ''}`}>
                <h4 className="font-medium text-movers-primary mb-2">{spec.name}</h4>
                {isPricingRow(spec.name) ? (
                  formatPricing(spec.mobilerLift)
                ) : (
                  <p className="text-gray-700 whitespace-pre-line">{spec.mobilerLift}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="rounded-xl overflow-hidden shadow-md border border-gray-100">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-none">
              <TableHead className="bg-movers-primary text-white rounded-tl-xl"></TableHead>
              <TableHead className="bg-movers-primary text-white text-center">
                <div>Kleiner Piaggio</div>
                <div className="flex justify-center mt-1 text-xs font-normal">
                  <ArrowUp className="mr-1" size={14} />
                  <span>Bis 21m (5. Stock)</span>
                </div>
              </TableHead>
              <TableHead className="bg-movers-primary text-white text-center">
                <div>Grosser Piaggio</div>
                <div className="flex justify-center mt-1 text-xs font-normal">
                  <ArrowUp className="mr-1" size={14} />
                  <span>Bis 30m (9. Stock)</span>
                </div>
              </TableHead>
              <TableHead className="bg-movers-primary text-white text-center rounded-tr-xl">
                <div>Mobiler Lift</div>
                <div className="flex justify-center mt-1 text-xs font-normal">
                  <ArrowUp className="mr-1" size={14} />
                  <span>Bis 12m (3./4. Stock)</span>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {specs.map((spec, index) => {
              const isLast = index === specs.length - 1;
              return (
                <TableRow 
                  key={index} 
                  className={`
                    ${isPricingRow(spec.name) ? 'bg-amber-50 hover:bg-amber-100' : ''}
                    ${isLast ? 'last-row' : ''}
                  `}
                >
                  <TableCell className={`font-medium bg-gray-50 ${isLast ? 'rounded-bl-xl' : ''}`}>
                    {spec.name}
                  </TableCell>
                  <TableCell className="p-4">
                    {isPricingRow(spec.name) ? (
                      formatPricing(spec.kleinPiaggio)
                    ) : (
                      <div className="whitespace-pre-line">{spec.kleinPiaggio}</div>
                    )}
                  </TableCell>
                  <TableCell className="p-4">
                    {isPricingRow(spec.name) ? (
                      formatPricing(spec.grossPiaggio)
                    ) : (
                      <div className="whitespace-pre-line">{spec.grossPiaggio}</div>
                    )}
                  </TableCell>
                  <TableCell className={`p-4 ${isLast ? 'rounded-br-xl' : ''}`}>
                    {isPricingRow(spec.name) ? (
                      formatPricing(spec.mobilerLift)
                    ) : (
                      <div className="whitespace-pre-line">{spec.mobilerLift}</div>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      
      <style jsx>{`
        /* Add CSS to ensure rounded corners work properly */
        .rounded-tl-xl {
          border-top-left-radius: 0.75rem;
        }
        .rounded-tr-xl {
          border-top-right-radius: 0.75rem;
        }
        .rounded-bl-xl {
          border-bottom-left-radius: 0.75rem;
        }
        .rounded-br-xl {
          border-bottom-right-radius: 0.75rem;
        }
        /* Remove double borders */
        .border-none {
          border: none;
        }
      `}</style>
    </div>
  );
};

export default TechnicalData;
