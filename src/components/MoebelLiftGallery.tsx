import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ResponsiveImage from "./ResponsiveImage";

interface MoebelLiftGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

const MoebelLiftGallery = ({ images, className }: MoebelLiftGalleryProps) => {
  return (
    <div className="relative group">
      <Carousel
        className={className}
        opts={{
          align: "start",
          loop: true,
        }}
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
      </Carousel>
    </div>
  );
};

export default MoebelLiftGallery;