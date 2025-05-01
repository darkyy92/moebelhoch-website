import React, { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { AspectRatio } from "./ui/aspect-ratio";
import ResponsiveImage from "./ResponsiveImage";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface MoebelLiftGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

interface SwipeOverlayProps {
  totalSlides: number;
  currentSlide: number;
  onInteraction: () => void;
}

const SwipeOverlay = ({ totalSlides, currentSlide, onInteraction }: SwipeOverlayProps) => {
  return (
    <div 
      className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center"
      onClick={onInteraction}
    >
      <div className="flex items-center gap-2 text-white animate-pulse-fade">
        <ArrowLeft size={20} className="animate-slide-x" />
        <span className="text-sm font-medium">Swipe</span>
        <ArrowRight size={20} className="animate-slide-x" />
      </div>
      {totalSlides > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                i === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const MoebelLiftGallery = ({ images, className }: MoebelLiftGalleryProps) => {
  const isMobile = useIsMobile();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>(null);

  const handleSelect = useCallback(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    handleSelect();
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api, handleSelect]);

  return (
    <div className="relative group">
      <Carousel
        className={className}
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <ResponsiveImage
                  src={image.src}
                  alt={image.alt}
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
          <CarouselPrevious 
            className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 hover:bg-white text-movers-primary hover:text-movers-primary border-none shadow-lg pointer-events-auto" 
            variant="outline"
            size="icon"
          />
          <CarouselNext 
            className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 hover:bg-white text-movers-primary hover:text-movers-primary border-none shadow-lg pointer-events-auto"
            variant="outline"
            size="icon"
          />
        </div>
        {isMobile && !hasInteracted && api && (
          <SwipeOverlay 
            totalSlides={images.length} 
            currentSlide={currentSlide}
            onInteraction={() => setHasInteracted(true)}
          />
        )}
      </Carousel>
    </div>
  );
};

export default MoebelLiftGallery;