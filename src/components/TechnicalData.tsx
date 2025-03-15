
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
  return (
    <div className="overflow-x-auto">
      <table className="technical-specs">
        <thead>
          <tr>
            <th className="rounded-tl-md"></th>
            <th>Kleiner Piaggio</th>
            <th>Grosser Piaggio</th>
            <th className="rounded-tr-md">Mobiler Lift</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr key={index}>
              <td className="font-medium bg-gray-50">{spec.name}</td>
              <td>{spec.kleinPiaggio}</td>
              <td>{spec.grossPiaggio}</td>
              <td>{spec.mobilerLift}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechnicalData;
