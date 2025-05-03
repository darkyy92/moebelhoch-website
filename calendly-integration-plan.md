# MöbelHoch CTA Integration Plan

## Calendly Link Mapping

### Möbellift Links
- **Baulift Link**: https://calendly.com/moebelhoch/baulift-buchen
- **Piaggio Gross Link**: https://calendly.com/moebelhoch/piaggio-gross-moebellift-buchen
- **Piaggio Klein Link**: https://calendly.com/moebelhoch/moebelhoch-piaggo-klein

### Service Links
- **Umzug Erstgespräch**: https://calendly.com/moebelhoch/umzug-planung-telefon
- **Räumung Erstgespräch**: https://calendly.com/moebelhoch/raeumung-entsorgung-telefon
- **Endreinigung Erstgespräch**: https://calendly.com/moebelhoch/endreinigung-telefon

## Fallback Logic
1. If a specific Möbellift is requested, direct to its specific Calendly link
2. If on a service page (Umzüge, Räumung, Endreinigung), use the corresponding service link
3. If user clicks "Gratis Offerte" in navbar or generic button, show QuoteChoiceModal with all options
4. All links open in a new tab (`target="_blank" rel="noopener"`)

## Implementation Checklist
- [x] Create QuoteChoiceModal component
- [ ] Update Navbar "Gratis Offerte" button to launch modal
- [ ] Update all Möbellift card CTAs with direct links
- [ ] Update service page hero CTAs with appropriate service links
- [ ] Hide all existing ContactForm components
- [ ] Update sitemap.xml
- [ ] Test all links and ensure proper functionality

## QA Checklist
- [ ] Verify all links open correctly in new tabs
- [ ] Test modal on mobile devices (iPhone SE, Galaxy S23)
- [ ] Test modal on desktop (Safari)
- [ ] Verify text wrapping and layout across devices
- [ ] Test keyboard navigation and focus trap in modal
- [ ] Confirm ESC key closes modal
- [ ] Verify all buttons have minimum height of 44px for accessibility 
- [ ] Test screen reader compatibility
- [ ] Verify all focus states are visible