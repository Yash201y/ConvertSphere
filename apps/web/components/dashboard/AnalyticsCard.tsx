interface Props {
    title: string;
    value: string;
  }
  
  export default function AnalyticsCard({ title, value }: Props) {
    return (
      <div className="rounded-3xl bg-white/5 backdrop-blur-xl p-8 border border-white/10">
        <h3 className="text-zinc-400">{title}</h3>
        <p className="text-4xl font-bold mt-4">{value}</p>
      </div>
    );
  }