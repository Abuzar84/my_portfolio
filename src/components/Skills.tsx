const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "JavaScript",
  "HTML / CSS",
  "Git & GitHub",
  "Responsive Design",
  "UI Design",
  "Performance",
  "SEO Basics",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Skills & <span className="gradient-text">Tech Stack</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mx-auto mb-12" />

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-background border border-white/10 text-sm text-muted hover:border-primary/40 hover:text-white transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
