import {
  Trophy,
  Cpu,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Striving For Excellence",
    description:
      "We continuously improve our processes, workforce skills and capabilities.",
  },
  {
    icon: Cpu,
    title: "Technology Adaptability",
    description:
      "We leverage emerging technologies with proven and cost-effective methods.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    description:
      "Helping customers achieve business goals is always our highest priority.",
  },
];

export default function WhyDifferent() {
  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}

        <div className="text-center mb-24">
          <span className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold text-white">
            What Makes Us Different
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg">
            We combine innovation, technology and customer success to
            deliver measurable business results.
          </p>
        </div>

        {/* Desktop Layout */}

        <div className="hidden lg:block relative">
          {/* Animated Line */}

          <div className="absolute top-24 left-0 w-full h-1 bg-white/10 rounded-full">
            <div className="animated-line"></div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group text-center"
                >
                  {/* Circle */}

                  <div className="relative mx-auto w-48 h-48">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-50 group-hover:opacity-100 transition-all"></div>

                    <div
                      className="
                        relative
                        w-full
                        h-full
                        rounded-full
                        border
                        border-cyan-400/30
                        bg-slate-900
                        flex
                        items-center
                        justify-center
                        hover:scale-110
                        transition-all
                        duration-500
                        floating
                      "
                    >
                      <Icon
                        size={70}
                        className="text-cyan-400"
                      />
                    </div>
                  </div>

                  <h3 className="mt-10 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-slate-400 leading-8">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}

        <div className="lg:hidden space-y-16">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center floating">
                  <Icon
                    size={40}
                    className="text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}