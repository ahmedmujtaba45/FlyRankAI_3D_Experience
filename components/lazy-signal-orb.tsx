"use client";

import dynamic from "next/dynamic";

const SignalOrb = dynamic(() => import("@/components/signal-orb").then((module) => module.SignalOrb), {
  ssr: false,
  loading: () => <div className="orb-loading" aria-label="Loading 3D signal scene">Loading scene...</div>,
});

export function LazySignalOrb() {
  return <SignalOrb />;
}