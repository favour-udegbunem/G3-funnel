# Global Giant Girls — Sales Funnel / Landing Page

This project is a long-form sales funnel inspired by the section order and conversion flow of the supplied Ads Mastery Bootcamp reference page. It is adapted for Global Giant Girls and uses G3 brand colours:
- Purple `#3A0164`
- Gold `#E9A805`
- Light purple `#BD98F7`

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite (normally `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## Components
Each funnel section is a separate component in `src/components/`. Main page order is assembled in `src/App.jsx`. Reusable copy and data are in `src/data/funnelContent.js`.

## Reference-to-G3 section mapping
1. Hero offer → G3 parent-focused promise and enquiry CTA.
2. Student reviews → G3 impact story carousel and empty testimonial video.
3. “Does this sound like you?” → Parent concerns and reasons for seeking support.
4. Transformation → Outcomes girls can work towards.
5. Curriculum highlights → Five G3 growth themes (not presented as a fixed five-day course).
6. Why in-person → Benefits of guided, practical, community-based learning.
7. What’s included → G3 programme experience.
8. Is this for you? → Suitable-fit / not-the-right-fit section.
9. Locations & fees → Programme enquiry cards and programme-format guidance; no unconfirmed fees or dates invented.
10. Corporate training → School and organisation partnerships.
11. Trainer profile → Founder Coach Precious Flourish Ifeanyichukwu.
12. Class gallery → Image placeholders.
13. Video testimonials → Empty video containers.
14. FAQ → Parent and guardian questions.
15. Final CTA → Parent enquiry prompt.
16. Registration form → Parent/guardian enquiry form.

## Media placeholders
Search for `IMAGE PLACEHOLDER`, `PHOTO`, or `VIDEO PLACEHOLDER`. They are intentionally empty and safe to preview. Replace them with approved G3 media when ready.

## Form behaviour — important
The enquiry form currently opens the visitor's email app with the form details addressed to `globalgiantgirls@gmail.com`. It does not save submissions to a database and does not confirm a place. Before using this as a live paid-registration funnel, connect a backend or form service and add the approved programme dates, venue, fee, payment flow, consent/privacy wording and confirmation page.

## Content accuracy
The site uses published G3 information: girls aged 7–19; programmes such as mentorship hubs, leadership academies, academic/career guidance, confidence and resilience, life skills/financial literacy, health and wellness, and faith/purpose conferences; founder profile information. No individual testimonial identities, made-up class schedules, event dates or prices have been added. Confirm all current details with G3 before launch.

## Brand assets to add
- G3 logo
- Hero image of girls / G3 gathering
- Real event and workshop photographs
- Coach Precious portrait
- Approved parent / participant testimonials
- Approved G3 overview video and testimonial recordings
