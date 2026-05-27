import { Play } from "lucide-react";

export function VideoCard({
  description,
  label,
  title
}: {
  description: string;
  label: string;
  title: string;
}) {
  // Final supporting videos should be placed in /public/videos and passed to a real <video> element later.
  return (
    <article className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-panel border border-cef-line bg-cef-navy">
        <div className="absolute inset-x-0 top-1/2 h-px bg-cef-blueGrey" />
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-cef-gold bg-cef-surface text-cef-navy">
          <Play className="h-6 w-6" />
        </div>
      </div>
      <p className="mt-5 text-sm font-semibold text-cef-gold2">{label}</p>
      <h3 className="mt-2 text-xl font-semibold text-cef-navy">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-cef-slate">{description}</p>
    </article>
  );
}
