import { Play } from "lucide-react";

export function VideoHero() {
  // Final hero video should be placed at /public/videos/cef-hero-signal-flow.mp4.
  // This polished placeholder prevents broken video sources while production media is pending.
  return (
    <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-panel">
      <div className="relative min-h-[260px] overflow-hidden rounded-panel border border-cef-blueGrey bg-cef-navy">
        <div className="absolute left-6 top-6 rounded-control bg-cef-gold px-3 py-2 text-sm font-semibold text-cef-navy">
          Signal flow preview
        </div>
        <div className="absolute inset-x-10 top-1/2 h-px bg-cef-blueGrey" />
        <div className="absolute left-[18%] top-[42%] h-12 w-12 rounded-control bg-cef-green" />
        <div className="absolute left-[42%] top-[42%] h-12 w-12 rounded-control bg-cef-gold" />
        <div className="absolute left-[66%] top-[42%] h-12 w-12 rounded-control bg-cef-red" />
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cef-gold bg-cef-surface text-cef-navy shadow-lift">
          <Play className="h-7 w-7" />
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-7 text-cef-slate">
        Placeholder for a short signal-to-action video: assets produce data, the portfolio layer detects exceptions, and FundCo AI creates management work.
      </p>
    </div>
  );
}
