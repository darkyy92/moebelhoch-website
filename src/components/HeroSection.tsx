import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  trustNote?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  imageUrl,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  trustNote
}: HeroSectionProps) => {
  return <section className="bg-movers-primary pt-32 pb-16 md:pt-40 md:pb-24">
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
            <div className="flex flex-wrap gap-4 mb-6">
              {primaryButtonText && primaryButtonLink && <Link to={primaryButtonLink} className="bg-movers-yellow text-movers-primary hover:brightness-110 font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center">
                  {primaryButtonText}
                  <ArrowRight size={18} className="ml-2" />
                </Link>}
              {secondaryButtonText && secondaryButtonLink && <Link to={secondaryButtonLink} className="bg-transparent border-2 border-white hover:bg-white/10 text-white hover:text-movers-yellow font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center">
                  <Play size={18} className="mr-2" />
                  {secondaryButtonText}
                </Link>}
            </div>
            {trustNote && (
              <Badge variant="secondary" className="text-sm py-1.5 px-4 bg-white/10 text-white hover:bg-white/20">
                {trustNote}
              </Badge>
            )}
          </div>
          <div className="relative z-10 animate-fade-in group cursor-pointer">
            {/* Price Badge */}
            <div className="absolute -right-4 top-4 z-20 bg-movers-yellow rounded-full w-24 h-24 shadow-lg flex flex-col items-center justify-center text-center">
              <p className="text-movers-primary font-bold text-sm">Ab CHF</p>
              <p className="text-movers-primary font-bold text-2xl leading-tight">380.–</p>
            </div>
            
            {/* Video Placeholder with Play Button */}
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-movers-yellow rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} className="text-movers-primary ml-1" />
                </div>
              </div>
              <img 
                alt="Video: Möbellift in Aktion" 
                className="w-full h-auto" 
                src="/lovable-uploads/9b6af9e7-6ebe-410a-a153-bd1a7e9253ea.png" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;