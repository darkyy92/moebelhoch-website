
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
    <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </div>
      )}
      <div className="p-8 flex-1 flex flex-col h-full">
        <div className="flex-1 flex flex-col justify-between h-full">
          <div>
            {icon && <div className="text-movers-secondary mb-4">{icon}</div>}
            <h3 className="text-xl font-bold text-movers-primary mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="pt-6">
            <Link 
              to={link} 
              className="inline-flex items-center text-movers-secondary font-medium hover:text-movers-primary transition-colors"
            >
              {linkText} <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
