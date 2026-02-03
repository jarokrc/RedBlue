# features/legal

Shared legal UI module used by multiple pages.

Currently used by:
- `src/pages/cookies/CookiesPage.tsx`
- `src/pages/privacy/PrivacyPage.tsx`

Contains:
- `sections/LegalHeroSection.tsx` - page title + intro
- `sections/LegalPolicySections.tsx` - sections/paragraphs/lists (+ optional links)
- `sections/LegalContactSection.tsx` - contact block with `ProtectedEmail`

If you add another legal page (for example Terms), reuse this feature first.
