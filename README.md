# LUXORA — Private Retreats

A cinematic, editorial-style luxury resort website built with React, Vite, Three.js and React Three Fiber.

## Features
- Immersive hero with an interactive 3D sculpture
- Responsive navigation and editorial storytelling sections
- Resort residence, wellness, culinary and nature experience showcases
- Enquiry form that opens the visitor's email client with stay details
- Motion transitions and responsive layouts
- Reduced-motion accessibility support

## Getting started
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deployment
Import this repository into Vercel. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

## Before launch
1. Replace the sample photography with licensed resort photography and actual 360° panorama assets.
2. Update the resort contact email in `src/App.jsx`.
3. Replace the illustrative location coordinates and all sample editorial copy with verified property details.
4. Connect the enquiry action to a booking engine or secure server endpoint if you need real reservations.
5. Add a hosted 360° tour provider or a Three.js panorama viewer for real guest-controlled virtual tours.

The current booking action is an email enquiry only; it does not process payments or confirm reservations.