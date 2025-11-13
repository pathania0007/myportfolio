import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroImage from "@assets/generated_images/Cloud_infrastructure_hero_background_46dfc0b4.png";

interface HeroSectionProps {
  onViewProjects?: () => void;
  onDownloadCV?: () => void;
  onContact?: () => void;
}

export default function HeroSection({ onViewProjects, onDownloadCV, onContact }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Sanjay Pathania
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-4">
          AWS Cloud Engineer
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          5+ Years Building Scalable Cloud Infrastructure
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button
            onClick={onViewProjects}
            size="lg"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8"
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            onClick={onDownloadCV}
            variant="outline"
            size="lg"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8"
            data-testid="button-hero-download-cv"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button
            onClick={onContact}
            variant="outline"
            size="lg"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8"
            data-testid="button-hero-contact"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Button>
        </div>
      </div>

      <button
        onClick={() => {
          const aboutSection = document.getElementById("about");
          aboutSection?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white/90 transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
}
