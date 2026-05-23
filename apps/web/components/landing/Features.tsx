import { FileText, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Universal Conversion",
    desc: "Convert any document to PDF instantly."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Encrypted uploads and secure signed URLs."
  },
  {
    icon: Sparkles,
    title: "AI OCR",
    desc: "Extract text from scanned files automatically."
  }
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto py-32 px-6 grid md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl"
        >
          <feature.icon className="w-12 h-12 text-indigo-400" />
          <h3 className="mt-6 text-2xl font-bold">{feature.title}</h3>
          <p className="mt-4 text-zinc-400">{feature.desc}</p>
        </div>
      ))}
    </section>
  );
}