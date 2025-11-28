import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lotus-sunrise.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Floating Lotus Petals Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-secondary/30 rounded-full blur-xl animate-lotus-float" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent/20 rounded-full blur-2xl animate-lotus-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-primary/20 rounded-full blur-xl animate-lotus-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-sunrise bg-clip-text text-transparent drop-shadow-lg leading-tight">
          Sunshine Thai Massage & Spa
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 mb-8 sm:mb-12 font-light tracking-wide px-4">
          Awaken your senses in radiant harmony
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-glow hover:shadow-elegant transition-all duration-500 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href="http://wa.link/vmzez1" target="_blank" rel="noopener noreferrer">
              Book Your Journey
            </a>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary/50 hover:bg-primary/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-105 w-full sm:w-auto"
          >
            Explore Treatments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
