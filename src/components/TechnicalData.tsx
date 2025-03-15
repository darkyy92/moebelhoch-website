
import { useIsMobile } from "../hooks/use-mobile";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "./ui/table";

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

  if (isMobile) {
    return (
      <div className="space-y-8">
        {/* Kleiner Piaggio */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="bg-movers-primary text-white p-4 font-semibold text-center">
            Kleiner Piaggio
          </div>
          <div className="divide-y divide-gray-200">
            {specs.map((spec, index) => (
              <div key={index} className="p-4">
                <h4 className="font-medium text-movers-primary mb-1">{spec.name}</h4>
                <p className="text-gray-700 whitespace-pre-line">{spec.kleinPiaggio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grosser Piaggio */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="bg-movers-primary text-white p-4 font-semibold text-center">
            Grosser Piaggio
          </div>
          <div className="divide-y divide-gray-200">
            {specs.map((spec, index) => (
              <div key={index} className="p-4">
                <h4 className="font-medium text-movers-primary mb-1">{spec.name}</h4>
                <p className="text-gray-700 whitespace-pre-line">{spec.grossPiaggio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobiler Lift */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="bg-movers-primary text-white p-4 font-semibold text-center">
            Mobiler Lift
          </div>
          <div className="divide-y divide-gray-200">
            {specs.map((spec, index) => (
              <div key={index} className="p-4">
                <h4 className="font-medium text-movers-primary mb-1">{spec.name}</h4>
                <p className="text-gray-700 whitespace-pre-line">{spec.mobilerLift}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="bg-movers-primary text-white"></TableHead>
            <TableHead className="bg-movers-primary text-white">Kleiner Piaggio</TableHead>
            <TableHead className="bg-movers-primary text-white">Grosser Piaggio</TableHead>
            <TableHead className="bg-movers-primary text-white">Mobiler Lift</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {specs.map((spec, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium bg-gray-50">{spec.name}</TableCell>
              <TableCell className="whitespace-pre-line">{spec.kleinPiaggio}</TableCell>
              <TableCell className="whitespace-pre-line">{spec.grossPiaggio}</TableCell>
              <TableCell className="whitespace-pre-line">{spec.mobilerLift}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TechnicalData;
