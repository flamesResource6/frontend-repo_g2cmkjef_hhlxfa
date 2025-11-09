import React from 'react';
import { Rocket, Scissors, Sparkles, Film, MessageSquare, Layers, Upload, Image } from 'lucide-react';

const features = [
  {
    icon: <Scissors className="h-5 w-5" />,
    title: 'Editor Video AI',
    desc: 'Analisi intelligente del gameplay con tagli automatici, sottotitoli e censura per contenuti YouTube‑friendly.'
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Riconoscimento Gioco',
    desc: 'Identificazione automatica di titoli come Brawl Stars, Clash Royale e altri giochi popolari.'
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: '6 Versioni Alternative',
    desc: 'Generiamo 6 tagli diversi ottimizzati per ritmo, lunghezza e piattaforma.'
  },
  {
    icon: <Upload className="h-5 w-5" />,
    title: 'Caricamenti Multipli',
    desc: 'Carica più video insieme. Li combiniamo in modo intelligente in un unico montaggio.'
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: 'Chat Post‑Editing',
    desc: 'Chiedi modifiche in linguaggio naturale e ottieni aggiornamenti in tempo reale.'
  },
  {
    icon: <Image className="h-5 w-5" />,
    title: 'Copertine AI',
    desc: '6 copertine alternative per ogni video, con opzione di rigenerazione e download immediato.'
  }
];

export default function Features() {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-2 text-slate-300">
          <Rocket className="h-5 w-5 text-emerald-400" />
          <span className="text-sm font-semibold tracking-wide">FUNZIONALITÀ</span>
        </div>
        <h2 className="text-3xl font-bold md:text-4xl">Potenza AI per i tuoi gameplay</h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          Dall'analisi del match alle copertine pronte: l'intero workflow è ottimizzato per velocità ed efficienza.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/30 hover:bg-white/10">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
