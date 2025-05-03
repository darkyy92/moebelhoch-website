# Site-Wide UI Update Plan

## Overview
This plan outlines the steps to apply the new UI improvements from the "Möbellift mieten" page across the entire website. These updates will improve visual consistency, user experience, and overall design quality.

## Key Improvements
1. Consistent spacing and layout structure
2. Enhanced card designs with proper vertical alignment
3. Better visual hierarchy with section badges
4. Unified button styling
5. Updated table styling
6. Improved animations and transitions
7. No whitespace between navbar and hero sections

## Implementation Plan

### Phase 1: Common Components & Utilities
- Update global CSS styles in index.css
  - Update spacing classes
  - Update card styles
  - Modernize button styles
  - Add/update animation classes
- Refine shared components
  - Update Navbar to remove bottom white line
  - Modify Footer for consistency
  - Update TechnicalData component
  - Enhance gallery components

### Phase 2: Page-by-Page Updates
- Update each main page to match new design patterns:
  1. Home page
  2. Umzüge
  3. Räumung & Entsorgung
  4. Endreinigung
  5. Über Uns
  6. Offerten Anfordern

For each page:
- Apply consistent section spacing
- Update hero sections (remove whitespace, add badges)
- Enhance card layouts with vertical alignment
- Update button styling
- Add subtle animations and hover effects
- Align typography with new guidelines

### Phase 3: Testing & Refinement
- Test all pages across different devices and screen sizes
- Verify accessibility compliance
- Check for visual consistency
- Ensure all animations respect reduced motion preferences
- Fix any layout or alignment issues

### Phase 4: Performance Optimization
- Optimize images
- Review and consolidate CSS
- Check for duplicate styles
- Ensure fast loading times across pages

## Implementation Notes
- Maintain existing functionality while updating UI
- Focus on consistent spacing and vertical rhythm
- Use CSS variables where appropriate to ensure consistency
- Apply card flexbox layout pattern across all card-based sections
- Update all buttons to follow new hover and transition styles
- Ensure tables have uniform headers with no visible column separators

## Rollout Strategy
1. Implement changes in a development environment
2. Review and approve design changes
3. Deploy to production in batches, starting with less-trafficked pages
4. Monitor user feedback and analytics
5. Make adjustments as needed based on feedback

## Time Estimate
- Phase 1: 1-2 days
- Phase 2: 3-4 days
- Phase 3: 1-2 days
- Phase 4: 1 day
- Total: 6-9 days

## Priority Pages
1. Möbellift mieten (already completed)
2. Home page (highest traffic)
3. Umzüge (high traffic)
4. Offerten Anfordern (important conversion point)
5. Remaining pages