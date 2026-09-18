# FlyRankAI Signal Orb

An interactive 3D browser experience for FE-AA2. The overview route stages a procedural low-poly signal orb in React Three Fiber. Drag the scene to orbit, move the pointer to nudge the object, switch its material surface, and pause or resume its rotation.

## Performance note

The scene creates its geometry in code, so it ships with no model download or texture payload (`0 kb` external model data). The WebGL canvas is lazy-loaded on the client, caps device pixel ratio at `1.5`, uses a small procedural scene, and falls back to a static CSS preview for reduced-motion and low-memory devices. The scene targets a steady 60 FPS on desktop and avoids heavy post-processing on mobile.

## What I would add next

I would connect the orb surfaces to live campaign metrics, add a compressed GLB detail layer for product-specific storytelling, and capture a real-device frame-time profile across the mobile breakpoints.

## Getting Started

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For local HTTPS, run:

```bash
npm run dev:https
```

Then open [https://localhost:3000](https://localhost:3000). Next.js generates a local self-signed certificate, so your browser will show a certificate warning that you can accept for development. To use another port, run `npm run dev:https -- -p 3443` and open `https://localhost:3443`.

To access the development server from another device on the same network, use the computer's local IPv4 address, such as `https://192.168.1.25:3000`. Allow Node.js through Windows Firewall if the device cannot connect, and accept the self-signed certificate warning on that device.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
