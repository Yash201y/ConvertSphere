export default function Pricing() {
    return (
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center">Pricing</h2>
  
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {["Starter", "Pro", "Enterprise"].map((plan) => (
            <div
              key={plan}
              className="rounded-3xl bg-white/5 p-10 border border-white/10"
            >
              <h3 className="text-3xl font-bold">{plan}</h3>
              <p className="mt-6 text-zinc-400">Advanced AI conversion suite.</p>
              <button className="mt-10 w-full py-4 rounded-2xl bg-indigo-600">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }