const projects = [
  {
    title: "PDF Editor",
    description:
      "Modern web-based PDF editor. Upload, add text, highlight, draw, delete pages, and download the edited PDF — all in the browser.",
    tags: ["Next.js", "TypeScript", "pdf-lib", "react-pdf", "Tailwind"],
    live: "https://pdf-editor-alpha-flame.vercel.app/",
    github: "https://github.com/Abuzar84/pdf-editor",
  },
  {
    title: "Project Two",
    description: "Business website with custom animations and responsive layout.",
    tags: ["React", "TypeScript", "UI Design"],
    live: "#",
    github: "#",
  },
  {
    title: "Project Three",
    description: "High-converting sales page focused on performance and conversion.",
    tags: ["Next.js", "SEO", "Landing Page"],
    live: "#",
    github: "#",
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
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-muted text-sm font-medium">
                  {project.title}
                </span>
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
                <div className="flex items-center gap-4">
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-white transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
