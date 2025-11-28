import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, X } from "lucide-react";
import couplesPackage from "@/assets/couples-package.jpg";

const SpecialPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenSpecialPopup");
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenSpecialPopup", "true");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleBookNow = () => {
    window.open("http://wa.link/vmzez1", "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-full p-0 gap-0 overflow-hidden bg-card border-primary/20 max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-10 rounded-full bg-background/90 backdrop-blur-sm p-1.5 sm:p-2 hover:bg-background transition-colors shadow-lg"
          aria-label="Close popup"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="relative h-40 sm:h-56 md:h-64">
          <img 
            src={couplesPackage} 
            alt="Couples Package Special"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-elegant animate-glow-pulse">
            LIMITED TIME SPECIAL
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <DialogHeader className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-glow-pulse" />
              <span className="text-primary font-semibold uppercase tracking-wider text-xs">
                Exclusive Offer
              </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-glow-pulse" />
            </div>
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-playfair text-center">
              Couples Package
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-center px-2">
              Bring a friend, a loved one or a significant other
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
            <p className="text-foreground/80 text-center leading-relaxed text-sm sm:text-base px-2">
              Share the experience of wellness with someone special. Special couples pricing on our most popular treatments.
            </p>

            <div className="bg-muted/30 rounded-xl p-3 sm:p-4 md:p-5 space-y-2.5 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-xs sm:text-sm text-foreground/70 block">Aroma therapy full body 60 min</span>
                  <div className="flex items-baseline gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                    <span className="text-lg sm:text-xl font-bold text-primary">R225pp</span>
                    <span className="text-xs sm:text-sm text-muted-foreground line-through">R250</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-xs sm:text-sm text-foreground/70 block">Thai hot oil full body 60 min</span>
                  <div className="flex items-baseline gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                    <span className="text-lg sm:text-xl font-bold text-primary">R270pp</span>
                    <span className="text-xs sm:text-sm text-muted-foreground line-through">R300</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-xs sm:text-sm text-foreground/70 block">Thai hot oil full body 90 min</span>
                  <div className="flex items-baseline gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                    <span className="text-lg sm:text-xl font-bold text-primary">R360pp</span>
                    <span className="text-xs sm:text-sm text-muted-foreground line-through">R400</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground bg-muted/50 p-2.5 sm:p-3 rounded-lg">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Valid till December 31st</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            <Button 
              size="lg" 
              className="flex-1 bg-gradient-sunrise hover:opacity-90 transition-opacity shadow-elegant text-sm sm:text-base font-semibold py-5 sm:py-6"
              onClick={handleBookNow}
            >
              Book This Special
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="sm:flex-none text-sm sm:text-base py-5 sm:py-6"
              onClick={() => setIsOpen(false)}
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpecialPopup;
