import { ReactNode } from "react";

export default function Section({ id, title, subtitle, children }: { id?: string, title: string, subtitle?: string, children: ReactNode }) {
  return (
    <section id={id} className="container py-20 relative z-10">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white pb-2">{title}</h2>
        {subtitle && <p className="text-slate-400 mt-4 text-lg font-light leading-relaxed">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
