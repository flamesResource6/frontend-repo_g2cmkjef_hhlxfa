import React, { useState } from 'react';
import { Upload, Settings, Wand2, Loader2, CheckCircle2 } from 'lucide-react';

export default function Workflow() {
  const [files, setFiles] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files || []);
    setFiles((prev) => [...prev, ...dropped]);
  };

  const handleChoose = (e) => {
    const picked = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...picked]);
  };

  const startMockProcessing = () => {
    // Mock UI flow: in a full build this would call backend endpoints using VITE_BACKEND_URL
    setProcessing(true);
    setDone(false);
    setTimeout(() => {
      setProcessing(false);
      setDone(true);
    }, 2200);
  };

  return (
    <section className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-slate-300">
          <Wand2 className="h-5 w-5 text-emerald-400" />
          <span className="text-sm font-semibold">FLUSSO DI LAVORO</span>
        </div>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Carica, elabora, esporta</h2>
        <p className="mt-2 max-w-2xl text-slate-400">Carica più file, scegli le preferenze e avvia l'editing AI. Al termine troverai 6 versioni e le copertine.</p>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
        >
          <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
            <div className="flex items-center gap-3">
              <Upload className="h-6 w-6 text-emerald-400" />
              <span className="text-slate-300">Trascina qui i tuoi video o</span>
            </div>
            <label className="cursor-pointer rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 hover:bg-emerald-400">
              Scegli file
              <input type="file" accept="video/*" multiple className="hidden" onChange={handleChoose} />
            </label>
            {files.length > 0 && (
              <div className="mt-4 grid w-full grid-cols-1 gap-2 text-left text-sm text-slate-300 md:grid-cols-2">
                {files.map((f, i) => (
                  <div key={i} className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
                    <span className="truncate pr-2">{f.name}</span>
                    <span className="text-xs text-slate-400">{(f.size / (1024 * 1024)).toFixed(1)} MB</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Formato Output</div>
                <select className="mt-2 w-full rounded-md border border-white/10 bg-slate-900/60 p-2 text-sm outline-none">
                  <option>16:9 - YouTube</option>
                  <option>9:16 - Shorts/Reels</option>
                  <option>1:1 - Square</option>
                </select>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Durata Target</div>
                <select className="mt-2 w-full rounded-md border border-white/10 bg-slate-900/60 p-2 text-sm outline-none">
                  <option>~15 min (default)</option>
                  <option>~10 min</option>
                  <option>~5 min</option>
                </select>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Sottotitoli & Censura</div>
                <div className="mt-2 flex items-center gap-3 text-sm">
                  <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Sottotitoli auto</label>
                  <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Censura parole</label>
                </div>
              </div>
            </div>

            <button
              onClick={startMockProcessing}
              disabled={processing || files.length === 0}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {processing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Elaborazione in corso
                </>
              ) : (
                <>
                  <Settings className="h-4 w-4" /> Avvia Editing AI
                </>
              )}
            </button>

            {done && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">
                <CheckCircle2 className="h-4 w-4" /> Editing completato! Trovi 6 versioni qui sotto.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
