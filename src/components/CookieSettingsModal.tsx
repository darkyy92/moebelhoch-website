import { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from '@/components/ui/toggle-group';
import { Label } from '@/components/ui/label';
import { CookiePreferences } from './CookieNotice';

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
}

export const CookieSettingsModal = ({ 
  isOpen, 
  onClose, 
  onSave 
}: CookieSettingsModalProps) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always on (required)
    analytics: true, // Default on (allowed with notice)
    marketing: false, // Default off (explicit opt-in required by Swiss law)
  });

  useEffect(() => {
    // Load existing preferences if available
    const savedPrefs = localStorage.getItem('mh_cookie_preferences');
    if (savedPrefs) {
      try {
        const parsedPrefs = JSON.parse(savedPrefs) as CookiePreferences;
        setPreferences({
          ...parsedPrefs,
          essential: true, // Essential is always true
        });
      } catch (e) {
        // If parsing fails, use defaults
        console.error('Error parsing saved cookie preferences');
      }
    }
  }, [isOpen]);

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'essential') return; // Cannot toggle essential
    
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    onSave(preferences);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cookie-Einstellungen</DialogTitle>
          <DialogDescription>
            Wählen Sie, welche Cookies Sie zulassen möchten.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-6 py-4">
          {/* Essential Cookies */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Label className="font-medium text-base">Essenziell</Label>
              <ToggleGroup type="single" value="on" disabled>
                <ToggleGroupItem value="on" aria-label="Essenzielle Cookies aktiviert" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                  An
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <p className="text-sm text-muted-foreground">
              Notwendige Cookies ermöglichen Kernfunktionen der Website. Die Website kann ohne diese Cookies nicht richtig funktionieren und kann nur deaktiviert werden, indem Sie Ihre Browsereinstellungen ändern.
            </p>
          </div>
          
          {/* Analytics Cookies */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Label className="font-medium text-base">Analyse</Label>
              <ToggleGroup type="single" value={preferences.analytics ? "on" : "off"}>
                <ToggleGroupItem 
                  value="on" 
                  aria-label="Analyse-Cookies aktivieren" 
                  onClick={() => handleToggle('analytics')}
                  className={preferences.analytics ? "bg-primary text-primary-foreground" : ""}
                >
                  An
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="off" 
                  aria-label="Analyse-Cookies deaktivieren" 
                  onClick={() => handleToggle('analytics')}
                  className={!preferences.analytics ? "bg-destructive text-destructive-foreground" : ""}
                >
                  Aus
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <p className="text-sm text-muted-foreground">
              Analyse-Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen anonym sammeln und melden.
            </p>
          </div>
          
          {/* Marketing Cookies */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Label className="font-medium text-base">Marketing</Label>
              <ToggleGroup type="single" value={preferences.marketing ? "on" : "off"}>
                <ToggleGroupItem 
                  value="on" 
                  aria-label="Marketing-Cookies aktivieren" 
                  onClick={() => handleToggle('marketing')}
                  className={preferences.marketing ? "bg-primary text-primary-foreground" : ""}
                >
                  An
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="off" 
                  aria-label="Marketing-Cookies deaktivieren" 
                  onClick={() => handleToggle('marketing')}
                  className={!preferences.marketing ? "bg-destructive text-destructive-foreground" : ""}
                >
                  Aus
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <p className="text-sm text-muted-foreground">
              Marketing-Cookies werden verwendet, um Besucher auf Websites zu verfolgen. Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind.
            </p>
          </div>
        </div>

        <DialogFooter className="sm:justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Abbrechen
          </Button>
          <Button
            type="button"
            onClick={handleSave}
          >
            Einstellungen speichern
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettingsModal;