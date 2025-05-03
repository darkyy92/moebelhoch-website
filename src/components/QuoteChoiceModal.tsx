import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface QuoteChoiceModalProps {
  trigger: React.ReactNode;
}

const QuoteChoiceModal = ({ trigger }: QuoteChoiceModalProps) => {
  const [open, setOpen] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md sm:rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Wählen Sie Ihre kostenlose Anfrage
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 py-4">
          <h3 className="font-medium text-gray-600 text-center text-sm">Möbellift prüfen</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <a 
              href="https://calendly.com/moebelhoch/baulift-buchen" 
              target="_blank" 
              rel="noopener" 
              className="h-11 inline-flex items-center justify-center rounded-full px-5 py-2 bg-movers-light text-movers-primary font-medium hover:bg-movers-light/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              Baulift
            </a>
            <a 
              href="https://calendly.com/moebelhoch/piaggio-gross-moebellift-buchen" 
              target="_blank" 
              rel="noopener"
              className="h-11 inline-flex items-center justify-center rounded-full px-5 py-2 bg-movers-light text-movers-primary font-medium hover:bg-movers-light/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              Piaggio gross
            </a>
            <a 
              href="https://calendly.com/moebelhoch/moebelhoch-piaggo-klein" 
              target="_blank" 
              rel="noopener"
              className="h-11 inline-flex items-center justify-center rounded-full px-5 py-2 bg-movers-light text-movers-primary font-medium hover:bg-movers-light/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              Piaggio klein
            </a>
          </div>
          
          <h3 className="font-medium text-gray-600 text-center text-sm mt-2">Service-Erstgespräche</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <a 
              href="https://calendly.com/moebelhoch/umzug-planung-telefon" 
              target="_blank" 
              rel="noopener"
              className="h-11 inline-flex items-center justify-center rounded-full px-5 py-2 bg-movers-light text-movers-primary font-medium hover:bg-movers-light/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              Umzug
            </a>
            <a 
              href="https://calendly.com/moebelhoch/raeumung-entsorgung-telefon" 
              target="_blank" 
              rel="noopener"
              className="h-11 inline-flex items-center justify-center rounded-full px-5 py-2 bg-movers-light text-movers-primary font-medium hover:bg-movers-light/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              Räumung
            </a>
            <a 
              href="https://calendly.com/moebelhoch/endreinigung-telefon" 
              target="_blank" 
              rel="noopener"
              className="h-11 inline-flex items-center justify-center rounded-full px-5 py-2 bg-movers-light text-movers-primary font-medium hover:bg-movers-light/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              Endreinigung
            </a>
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-2">
          100 % unverbindlich – jederzeit stornierbar
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteChoiceModal;