
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  link: string;
  linkText?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  imageUrl, 
  link,
  linkText = "Mehr erfahren" 
}: ServiceCardProps) => {
  return (
    <div className="service-card group h-full flex flex-col">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        {icon && <div className="text-movers-secondary mb-4">{icon}</div>}
        <h3 className="text-xl font-bold text-movers-primary mb-3">{title}</h3>
        <p className="text-gray-600 mb-5 flex-grow">{description}</p>
        <Link 
          to={link} 
          className="mt-auto inline-flex items-center text-movers-secondary font-medium hover:text-movers-primary transition-colors"
        >
          {linkText} <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
