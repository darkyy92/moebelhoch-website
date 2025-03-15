
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  imageUrl,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: HeroSectionProps) => {
  return (
    <section className="hero-section pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 animate-fade-in-up">
            <h3 className="text-movers-yellow font-semibold mb-2">{subtitle}</h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-gray-200 text-lg mb-8 max-w-xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              {primaryButtonText && primaryButtonLink && (
                <Link to={primaryButtonLink} className="btn-secondary">
                  {primaryButtonText}
                  <ArrowRight size={18} />
                </Link>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Link to={secondaryButtonLink} className="bg-transparent border-2 border-white hover:bg-white text-white hover:text-movers-primary font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center">
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </div>
          <div className="relative z-10 animate-fade-in lg:pl-12">
            <img 
              src={imageUrl} 
              alt="Möbellift in Aktion" 
              className="w-full h-auto rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
