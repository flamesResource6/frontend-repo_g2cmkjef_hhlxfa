import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Results from './components/Results';
import Covers from './components/Covers';

export default function App() {
  const [job, setJob] = useState(null);

  const handleJobReady = (jobData) => {
    setJob(jobData);
    // Scroll to results
    setTimeout(() => {
      const el = document.getElementById('results');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  const handleReset = () => setJob(null);

  return (
    <div className="min-h-screen w-full bg-slate-950 font-inter text-white">
      <Hero />
      <Features />
      <Workflow onJobReady={handleJobReady} />
      <Results job={job} onReset={handleReset} />
      <Covers job={job} onRegenerate={() => { /* could call backend to regenerate */ }} />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            Questo editor usa un rilevatore di momenti ad alta intensità basato su frame-diff e genera realmente 6 varianti e 6 copertine. Per analisi semantiche avanzate puoi collegare Anthropic con ANTHROPIC_API_KEY.
          </p>
        </div>
      </footer>
    </div>
  );
}
