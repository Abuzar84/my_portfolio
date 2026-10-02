export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />

        <div className="space-y-4 text-muted text-lg leading-relaxed">
          <p>
            I&apos;m Abuzar Sayyed, a vibe code developer who builds clean,
            high-converting landing pages and modern web experiences.
          </p>
          <p>
            My focus is on creating solutions that not only look great but also
            deliver real results for clients — fast load times, beautiful UI, and
            smooth interactions.
          </p>
          <p>
            {/* Replace this with your real bio */}
            Placeholder text — update this section with your real story, experience, and style of working.
          </p>
        </div>
      </div>
    </section>
  );
}
