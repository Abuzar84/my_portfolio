export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Abuzar Sayyed. All rights reserved.
        </p>
        <p className="text-sm text-muted">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
