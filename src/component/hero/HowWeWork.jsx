import {
  Search,
  Users,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand goals, requirements, challenges and define the product roadmap.",
    icon: Search,
    color: "from-blue-600 to-cyan-500",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Build the right team, architecture and execution strategy for success.",
    icon: Users,
    color: "from-violet-600 to-purple-500",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Agile development, AI-assisted workflows, testing and deployment.",
    icon: Rocket,
    color: "from-emerald-600 to-teal-500",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Optimization, monitoring, scaling and long-term product support.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            Workflow
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">
            How We Work
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 text-lg">
            A proven process that transforms ideas into scalable digital
            products with speed, quality and innovation.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block relative">
          {/* Line */}
          <div className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full"></div>

          <div className="grid grid-cols-4 gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  {/* Circle */}
                  <div
                    className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${step.color}
                    flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.35)]
                    hover:scale-110 transition duration-500 relative z-10`}
                  >
                    <Icon size={42} className="text-white" />
                  </div>

                  {/* Number */}
                  <div className="text-center mt-6">
                    <span className="text-slate-500 text-sm">
                      STEP {step.number}
                    </span>

                    <h3 className="text-white text-2xl font-bold mt-2">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 mt-4 leading-7">
                      {step.description}
                    </p>
                  </div>

                  {index !== steps.length - 1 && (
                    <ArrowRight
                      size={26}
                      className="absolute top-14 -right-5 text-cyan-400"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-10">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color}
                  flex items-center justify-center`}
                >
                  <Icon size={28} className="text-white" />
                </div>

                <span className="text-cyan-400 text-sm mt-4 block">
                  STEP {step.number}
                </span>

                <h3 className="text-white text-2xl font-bold mt-2">
                  {step.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}