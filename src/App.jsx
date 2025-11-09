import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Results from './components/Results';
import Covers from './components/Covers';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 font-inter text-white">
      <Hero />
      <Features />
      <Workflow />
      <Results />
      <Covers />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            Prossimi passi: collega la tua API e abilita l'editing AI reale (Anthropic, FFmpeg, pipeline GPU). Questa interfaccia è già ottimizzata per grandi file e flussi in tempo reale.
          </p>
        </div>
      </footer>
    </div>
  );
}
