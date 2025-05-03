
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
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-movers-primary transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="bg-gradient-to-r from-movers-primary to-movers-secondary text-white p-5 font-semibold text-center">
            <h3 className="text-xl">Kleiner Piaggio</h3>
            <div className="flex justify-center items-center mt-2 bg-white/20 rounded-full px-3 py-1 w-max mx-auto">
              <ArrowUp className="mr-1" size={14} />
              <span className="text-sm font-normal">Bis 21m (5. Stock)</span>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {specs.map((spec, index) => (
              <div key={index} className={`p-5 ${isPricingRow(spec.name) ? 'bg-gradient-to-r from-amber-50 to-amber-100/50' : ''}`}>
                <h4 className="font-semibold text-movers-primary mb-3">{spec.name}</h4>
                {isPricingRow(spec.name) ? (
                  <div className="bg-white p-3 rounded-lg shadow-inner">
                    {formatPricing(spec.kleinPiaggio)}
                  </div>
                ) : (
                  <p className="text-gray-700 whitespace-pre-line">{spec.kleinPiaggio}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Grosser Piaggio */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-movers-primary transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="bg-gradient-to-r from-movers-primary to-movers-secondary text-white p-5 font-semibold text-center">
            <h3 className="text-xl">Grosser Piaggio</h3>
            <div className="flex justify-center items-center mt-2 bg-white/20 rounded-full px-3 py-1 w-max mx-auto">
              <ArrowUp className="mr-1" size={14} />
              <span className="text-sm font-normal">Bis 30m (9. Stock)</span>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {specs.map((spec, index) => (
              <div key={index} className={`p-5 ${isPricingRow(spec.name) ? 'bg-gradient-to-r from-amber-50 to-amber-100/50' : ''}`}>
                <h4 className="font-semibold text-movers-primary mb-3">{spec.name}</h4>
                {isPricingRow(spec.name) ? (
                  <div className="bg-white p-3 rounded-lg shadow-inner">
                    {formatPricing(spec.grossPiaggio)}
                  </div>
                ) : (
                  <p className="text-gray-700 whitespace-pre-line">{spec.grossPiaggio}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobiler Lift */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-movers-primary transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="bg-gradient-to-r from-movers-primary to-movers-secondary text-white p-5 font-semibold text-center">
            <h3 className="text-xl">Mobiler Lift</h3>
            <div className="flex justify-center items-center mt-2 bg-white/20 rounded-full px-3 py-1 w-max mx-auto">
              <ArrowUp className="mr-1" size={14} />
              <span className="text-sm font-normal">Bis 12m (3./4. Stock)</span>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {specs.map((spec, index) => (
              <div key={index} className={`p-5 ${isPricingRow(spec.name) ? 'bg-gradient-to-r from-amber-50 to-amber-100/50' : ''}`}>
                <h4 className="font-semibold text-movers-primary mb-3">{spec.name}</h4>
                {isPricingRow(spec.name) ? (
                  <div className="bg-white p-3 rounded-lg shadow-inner">
                    {formatPricing(spec.mobilerLift)}
                  </div>
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
      <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-none relative">
              <TableHead colSpan={4} className="p-0 rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 bg-movers-primary w-full h-full"></div>
                <div className="relative z-10 grid grid-cols-4 w-full">
                  <div className="py-5"></div>
                  <div className="py-5 text-white text-center">
                    <div className="text-lg font-semibold">Kleiner Piaggio</div>
                    <div className="flex justify-center mt-2 items-center bg-white/20 rounded-full px-3 py-1 w-max mx-auto">
                      <ArrowUp className="mr-1" size={14} />
                      <span className="text-xs font-normal">Bis 21m (5. Stock)</span>
                    </div>
                  </div>
                  <div className="py-5 text-white text-center">
                    <div className="text-lg font-semibold">Grosser Piaggio</div>
                    <div className="flex justify-center mt-2 items-center bg-white/20 rounded-full px-3 py-1 w-max mx-auto">
                      <ArrowUp className="mr-1" size={14} />
                      <span className="text-xs font-normal">Bis 30m (9. Stock)</span>
                    </div>
                  </div>
                  <div className="py-5 text-white text-center">
                    <div className="text-lg font-semibold">Mobiler Lift</div>
                    <div className="flex justify-center mt-2 items-center bg-white/20 rounded-full px-3 py-1 w-max mx-auto">
                      <ArrowUp className="mr-1" size={14} />
                      <span className="text-xs font-normal">Bis 12m (3./4. Stock)</span>
                    </div>
                  </div>
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
                    ${isPricingRow(spec.name) ? 'bg-gradient-to-r from-amber-50 to-amber-100/50 hover:from-amber-100 hover:to-amber-200/50' : 'hover:bg-gray-50'}
                    ${isLast ? 'last-row' : ''}
                    transition-colors duration-200
                  `}
                >
                  <TableCell className={`font-semibold bg-gray-100 text-movers-primary px-6 py-5 ${isLast ? 'rounded-bl-xl' : ''}`}>
                    {spec.name}
                  </TableCell>
                  <TableCell className="px-6 py-5">
                    {isPricingRow(spec.name) ? (
                      <div className="bg-white p-3 rounded-lg shadow-inner">
                        {formatPricing(spec.kleinPiaggio)}
                      </div>
                    ) : (
                      <div className="whitespace-pre-line">{spec.kleinPiaggio}</div>
                    )}
                  </TableCell>
                  <TableCell className="px-6 py-5">
                    {isPricingRow(spec.name) ? (
                      <div className="bg-white p-3 rounded-lg shadow-inner">
                        {formatPricing(spec.grossPiaggio)}
                      </div>
                    ) : (
                      <div className="whitespace-pre-line">{spec.grossPiaggio}</div>
                    )}
                  </TableCell>
                  <TableCell className={`px-6 py-5 ${isLast ? 'rounded-br-xl' : ''}`}>
                    {isPricingRow(spec.name) ? (
                      <div className="bg-white p-3 rounded-lg shadow-inner">
                        {formatPricing(spec.mobilerLift)}
                      </div>
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
