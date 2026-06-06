import {
  ShieldCheck,
  Lightbulb,
  Handshake,
  BriefcaseBusiness,
  MessageSquare,
  HeartHandshake,
} from "lucide-react";

import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity",
    icon: ShieldCheck,
    desc: "We uphold the highest ethical standards and maintain complete transparency.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    desc: "Exploring modern technologies and creating future-ready solutions.",
  },
  {
    title: "Respect",
    icon: Handshake,
    desc: "Building relationships based on trust, collaboration and respect.",
  },
  {
    title: "Professionalism",
    icon: BriefcaseBusiness,
    desc: "Delivering excellence through expertise, commitment and quality.",
  },
  {
    title: "Communication",
    icon: MessageSquare,
    desc: "Open and transparent communication drives successful projects.",
  },
  {
    title: "Client Focus",
    icon: HeartHandshake,
    desc: "Your success is our mission. Every decision starts with your goals.",
  },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-32">
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full animate-pulse"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
            Why Clients Choose Us
          </div>

          <h2 className="mt-8 text-5xl md:text-7xl font-black text-white">
            Our Core Values
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg leading-8">
            We combine innovation, technology and human creativity to deliver
            exceptional digital experiences and long-term business value.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  rotateX: 5,
                  rotateY: 5,
                }}
                className="group relative"
              >
                {/* Gradient Border */}

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div
                  className="
                  relative
                  h-full
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  overflow-hidden
                "
                >
                  {/* Shine Effect */}

                  <div
                    className="
                    absolute
                    -left-full
                    top-0
                    h-full
                    w-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    group-hover:left-full
                    transition-all
                    duration-1000
                  "
                  />

                  {/* Icon */}

                  <div
                    className="
                    w-20
                    h-20
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    flex
                    items-center
                    justify-center
                    shadow-[0_0_30px_rgba(6,182,212,0.5)]
                    mb-8
                  "
                  >
                    <Icon size={36} className="text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 leading-8">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}

       
        
      </div>
    </section>
  );
}