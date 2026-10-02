const projects = [
  {
    title: "Project One",
    description: "Modern landing page for a SaaS product. Clean design with strong CTAs.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "Business website with custom animations and responsive layout.",
    tags: ["React", "TypeScript", "UI Design"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "High-converting sales page focused on performance and conversion.",
    tags: ["Next.js", "SEO", "Landing Page"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-primary/30 transition-all"
            >
              {/* Placeholder image area */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-muted text-sm">Project Preview</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-sm text-secondary hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-8">
          {/* Replace with real projects later */}
          Placeholder projects — replace with your real work.
        </p>
      </div>
    </section>
  );
}
