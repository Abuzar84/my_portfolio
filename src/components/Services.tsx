import { Layout, Code2, Zap, Palette } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "High-converting, modern landing pages designed to turn visitors into customers.",
  },
  {
    icon: Code2,
    title: "Web Solutions",
    description:
      "Custom web applications and websites built with clean, scalable code.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Beautiful interfaces with thoughtful user experience and attention to detail.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Quick turnaround without compromising on quality or performance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          My <span className="gradient-text">Services</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/30 transition-all hover:glow-purple group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
