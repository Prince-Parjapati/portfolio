import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pt-12 pb-8 px-4 mt-24 flex flex-col sm:flex-row items-center justify-between text-white/60 text-sm">
      <p className="mb-4 sm:mb-0 text-center sm:text-left">
        &copy; {new Date().getFullYear()} Prince Parjapati. Built with passion and clean code.
      </p>

      <a
        href="#hero"
        className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-white/20 text-primary transition-all duration-300"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
