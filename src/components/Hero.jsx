import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/nnNYb3ZFbRxKghMM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradient overlay for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-slate-200 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          AI Video Editor for Gaming Creators
        </span>
        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
          Montaggio automatico per gameplay, pronto per YouTube
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300 md:text-lg">
          Riconoscimento del gioco, tagli intelligenti, sottotitoli e 6 varianti finali. Carica i tuoi video, noi pensiamo al resto.
        </p>
      </div>
    </section>
  );
}
