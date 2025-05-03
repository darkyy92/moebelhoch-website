# Cookie Notice Implementation Plan

## 1. Legal Basis
- Compliance with Swiss nDSG (neues Datenschutzgesetz)
- EDÖB guidelines from February 2025
- Required cookie categories: Essenziell, Analyse, Marketing
- Opt-in for Marketing cookies (explicit consent required)
- Analytical cookies allowed with clear notice
- Essential cookies always enabled
- Transparent information about cookie usage

## 2. UX Specifications
- Initial notice: Fixed bottom banner with backdrop blur
- Clear, concise language explaining cookie usage
- Two-button approach: Accept All vs. Configure Settings
- Settings modal with toggle groups for each cookie category
- Persistent storage of user preferences in localStorage
- Only show notice to new visitors (check localStorage flag)
- Responsive design for all screen sizes

## 3. Technical Implementation
- React components: `<CookieNotice>`, `<CookieSettingsModal>`
- localStorage keys:
  - `mh_cookie_notice_accepted`: Boolean flag for notice visibility
  - `mh_cookie_preferences`: JSON object with category preferences
- Inject via main layout wrapper for site-wide presence
- Focus trap and keyboard navigation in modal
- ARIA attributes for accessibility

## 4. Test Checklist
- [ ] Banner appears on first visit
- [ ] Banner does not appear after accepting cookies
- [ ] Settings modal opens and closes correctly
- [ ] Toggle states save correctly
- [ ] Essenziell category cannot be disabled
- [ ] Responsive layout on mobile devices (especially <360px)
- [ ] Keyboard navigation works correctly
- [ ] Screen readers can interpret components properly
- [ ] localStorage values persist across sessions
- [ ] Privacy policy link directs to correct page