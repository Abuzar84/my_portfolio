import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let&apos;s <span className="gradient-text">Work Together</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mx-auto mb-8" />

        <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
          Have a project in mind? Looking for a landing page or web solution?
          Reach out and let&apos;s build something great.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:sayyedabuzar021@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 font-medium transition-all glow-purple"
          >
            <Mail size={18} />
            Send Email
          </a>
          <a
            href="https://github.com/Abuzar84"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-muted hover:text-white transition-all"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        {/* <p className="text-sm text-muted">
          Update email and add WhatsApp / LinkedIn links here.
        </p> */}
      </div>
    </section>
  );
}
