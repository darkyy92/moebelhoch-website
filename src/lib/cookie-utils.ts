import { CookiePreferences } from '@/components/CookieNotice';

// Default cookie preferences
export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  essential: true, // Always true (required)
  analytics: true, // Default on (allowed with notice)
  marketing: false, // Default off (explicit opt-in required by Swiss law)
};

// Check if cookie notice has been accepted
export const hasCookieConsent = (): boolean => {
  return localStorage.getItem('mh_cookie_notice_accepted') === 'true';
};

// Get current cookie preferences
export const getCookiePreferences = (): CookiePreferences => {
  try {
    const preferences = localStorage.getItem('mh_cookie_preferences');
    if (preferences) {
      const parsed = JSON.parse(preferences) as CookiePreferences;
      return {
        ...parsed,
        essential: true, // Essential cookies are always enabled
      };
    }
  } catch (error) {
    console.error('Error parsing cookie preferences', error);
  }
  
  return DEFAULT_COOKIE_PREFERENCES;
};

// Save cookie preferences
export const saveCookiePreferences = (preferences: CookiePreferences): void => {
  localStorage.setItem('mh_cookie_notice_accepted', 'true');
  localStorage.setItem('mh_cookie_preferences', JSON.stringify({
    ...preferences,
    essential: true, // Ensure essential is always true
  }));
};

// Reset cookie preferences (for testing)
export const resetCookiePreferences = (): void => {
  localStorage.removeItem('mh_cookie_notice_accepted');
  localStorage.removeItem('mh_cookie_preferences');
};

// Check if a specific cookie category is allowed
export const isCookieCategoryAllowed = (category: keyof CookiePreferences): boolean => {
  if (category === 'essential') return true; // Essential cookies are always allowed
  
  const hasConsent = hasCookieConsent();
  if (!hasConsent) {
    return false; // If no consent has been given, only essential cookies are allowed
  }
  
  const preferences = getCookiePreferences();
  return preferences[category] === true;
};