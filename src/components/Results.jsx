import React, { useMemo, useState } from 'react';
import { Play, Download, RefreshCw } from 'lucide-react';

function PlaceholderThumb({ index }) {
  // Simple gradient placeholders for the six generated videos
  const palettes = [
    'from-emerald-500 to-cyan-500',
    'from-fuchsia-500 to-pink-500',
    'from-indigo-500 to-violet-500',
    'from-amber-500 to-orange-500',
    'from-lime-500 to-green-500',
    'from-sky-500 to-blue-600'
  ];
  const palette = palettes[index % palettes.length];
  return (
    <div className={`aspect-video w-full rounded-lg bg-gradient-to-br ${palette} p-3 text-white shadow-lg`}> 
      <div className="flex h-full w-full items-center justify-center rounded-md bg-black/20">
        <Play className="h-10 w-10 opacity-90" />
      </div>
    </div>
  );
}

export default function Results() {
  const [seed, setSeed] = useState(0);
  const items = useMemo(() => Array.from({ length: 6 }), [seed]);

  return (
    <section className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Le tue 6 versioni generate</h2>
            <p className="mt-1 max-w-2xl text-slate-400">Scegli, guarda l'anteprima e scarica la variante migliore.</p>
          </div>
          <button onClick={() => setSeed((s) => s + 1)} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
            <RefreshCw className="h-4 w-4" /> Ricomincia
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((_, i) => (
            <div key={`${seed}-${i}`} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <PlaceholderThumb index={i} />
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm font-medium">Versione #{i + 1}</div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-1 rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-emerald-950 hover:bg-emerald-400">
                    <Play className="h-3.5 w-3.5" /> Anteprima
                  </button>
                  <button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
                    <Download className="h-3.5 w-3.5" /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
