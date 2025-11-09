import React, { useMemo, useState } from 'react';
import { Image, Download, RefreshCw } from 'lucide-react';

function CoverCard({ index }) {
  const hues = [
    'bg-gradient-to-br from-emerald-500 via-emerald-400 to-cyan-500',
    'bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500',
    'bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600',
    'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500',
    'bg-gradient-to-br from-lime-500 via-green-500 to-emerald-600',
    'bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600'
  ];
  const hue = hues[index % hues.length];
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className={`aspect-[16/10] w-full overflow-hidden rounded-lg ${hue} relative`}> 
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-md bg-black/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">Copertina AI</div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm font-medium">Cover #{index + 1}</div>
        <button className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10 inline-flex items-center gap-1">
          <Download className="h-3.5 w-3.5" /> Scarica
        </button>
      </div>
    </div>
  );
}

export default function Covers() {
  const [seed, setSeed] = useState(0);
  const items = useMemo(() => Array.from({ length: 6 }), [seed]);

  return (
    <section className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300">
            <Image className="h-5 w-5 text-emerald-400" />
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Copertine generate</h2>
              <p className="mt-1 max-w-2xl text-slate-400">6 alternative per ogni video. Rigenera fino a trovare lo stile perfetto.</p>
            </div>
          </div>
          <button onClick={() => setSeed((s) => s + 1)} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
            <RefreshCw className="h-4 w-4" /> Rigenera tutte
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((_, i) => (
            <CoverCard key={`${seed}-${i}`} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
