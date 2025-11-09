import React from 'react';
import { Image as ImageIcon, Download, RefreshCw } from 'lucide-react';

export default function Covers({ job, onRegenerate }) {
  const items = job?.results || [];

  return (
    <section className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300">
            <ImageIcon className="h-5 w-5 text-emerald-400" />
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Copertine generate</h2>
              <p className="mt-1 max-w-2xl text-slate-400">6 alternative per ogni video. Scarica quella che preferisci.</p>
            </div>
          </div>
          <button onClick={onRegenerate} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
            <RefreshCw className="h-4 w-4" /> Rigenera tutte
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.length === 0 && (
            <div className="col-span-full rounded-xl border border-white/10 bg-white/5 p-6 text-slate-400">
              Le copertine appariranno qui quando l'editing sarà completato.
            </div>
          )}
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-black/40">
                <img src={it.cover_url} alt={`Cover ${i + 1}`} className="h-full w-full object-cover" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm font-medium">Cover #{i + 1}</div>
                <a href={it.cover_url} download className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10 inline-flex items-center gap-1">
                  <Download className="h-3.5 w-3.5" /> Scarica
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
