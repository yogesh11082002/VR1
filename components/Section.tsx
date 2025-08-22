import { ReactNode } from "react";

export default function Section({ id, title, subtitle, children }:{ id?: string, title: string, subtitle?: string, children: ReactNode }) {
  return (
    <section id={id} className="container py-12 md:py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-slate-600 mt-2">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
