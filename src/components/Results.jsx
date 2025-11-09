import React from 'react';
import { Play, Download, RefreshCw } from 'lucide-react';

export default function Results({ job, onReset }) {
  const items = job?.results || [];

  return (
    <section id="results" className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Le tue 6 versioni generate</h2>
            <p className="mt-1 max-w-2xl text-slate-400">{job ? 'Scegli, guarda l\'anteprima e scarica.' : 'Lancia un processo per vedere i risultati.'}</p>
          </div>
          <button onClick={onReset} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
            <RefreshCw className="h-4 w-4" /> Ricomincia
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.length === 0 && (
            <div className="col-span-full rounded-xl border border-white/10 bg-white/5 p-6 text-slate-400">
              Nessun risultato ancora. Carica e avvia l'editing per generare le versioni.
            </div>
          )}
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/40">
                <video src={it.video_url} controls className="h-full w-full" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm font-medium">Versione #{i + 1}</div>
                <div className="flex items-center gap-2">
                  <a href={it.video_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-emerald-950 hover:bg-emerald-400">
                    <Play className="h-3.5 w-3.5" /> Anteprima
                  </a>
                  <a href={it.video_url} download className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
