import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CookieSettingsModal } from '@/components/CookieSettingsModal';
import { cn } from '@/lib/utils';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const CookieNotice = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('mh_cookie_notice_accepted');
    if (!hasAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: false, // Marketing cookies must be opt-in by Swiss law
    };
    
    localStorage.setItem('mh_cookie_notice_accepted', 'true');
    localStorage.setItem('mh_cookie_preferences', JSON.stringify(preferences));
    setShowBanner(false);
  };

  const handleOpenSettings = () => {
    setShowModal(true);
  };

  const handleCloseSettings = () => {
    setShowModal(false);
  };

  const handleSaveSettings = (preferences: CookiePreferences) => {
    localStorage.setItem('mh_cookie_notice_accepted', 'true');
    localStorage.setItem('mh_cookie_preferences', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      <div 
        className={cn(
          "fixed bottom-4 left-1/2 -translate-x-1/2 max-w-[90%] w-full md:max-w-2xl",
          "rounded-xl backdrop-blur bg-primary/95 p-4 z-50 shadow-lg",
          "flex flex-col sm:flex-row gap-4 items-center justify-between"
        )}
        role="alert"
        aria-live="polite"
      >
        <div className="text-sm md:text-base text-white">
          Diese Website verwendet Cookies, um Ihr Nutzungserlebnis zu verbessern. 
          Durch die Nutzung der Website stimmen Sie unserer{' '}
          <a 
            href="/datenschutz" 
            className="underline font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Datenschutzerklärung
          </a>{' '}
          zu.
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={handleOpenSettings}
            className="w-full sm:w-auto whitespace-nowrap"
          >
            Einstellungen
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            onClick={handleAcceptAll}
            className="w-full sm:w-auto whitespace-nowrap"
          >
            OK
          </Button>
        </div>
      </div>

      <CookieSettingsModal 
        isOpen={showModal} 
        onClose={handleCloseSettings}
        onSave={handleSaveSettings}
      />
    </>
  );
};

export default CookieNotice;