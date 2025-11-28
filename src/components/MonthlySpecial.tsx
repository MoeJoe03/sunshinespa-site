import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Calendar } from "lucide-react";
import lotusAccent from "@/assets/lotus-accent.png";
import couplesPackage from "@/assets/couples-package.jpg";

const MonthlySpecial = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-lotus relative overflow-hidden">
      {/* Decorative lotus accent */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 opacity-10 pointer-events-none">
        <img src={lotusAccent} alt="" className="animate-float" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Limited Time Offer</span>
            <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground font-playfair">
            This Month's Special
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-sunrise mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-none shadow-glow bg-card/90 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto">
                <img 
                  src={couplesPackage} 
                  alt="Couples Package Spa Treatment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-elegant">
                  SPECIAL
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl sm:text-3xl font-playfair mb-2">
                      Couples Package
                    </CardTitle>
                    <CardDescription className="text-base">
                      Bring a friend, a loved one or a significant other
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      Share the experience of wellness with someone special. Special couples pricing on our most popular treatments.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <span className="text-sm text-foreground/70">Aroma therapy full body 60 min</span>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-lg font-bold text-primary">R225pp</span>
                            <span className="text-sm text-muted-foreground line-through">R250</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <span className="text-sm text-foreground/70">Thai hot oil full body 60 min</span>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-lg font-bold text-primary">R270pp</span>
                            <span className="text-sm text-muted-foreground line-through">R300</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <span className="text-sm text-foreground/70">Thai hot oil full body 90 min</span>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-lg font-bold text-primary">R360pp</span>
                            <span className="text-sm text-muted-foreground line-through">R400</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                      <Calendar className="w-4 h-4" />
                      <span>Valid till December 31st</span>
                    </div>
                  </CardContent>
                </div>

                <div className="mt-6">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-sunrise hover:opacity-90 transition-opacity shadow-elegant text-base font-semibold"
                    asChild
                  >
                    <a href="http://wa.link/vmzez1" target="_blank" rel="noopener noreferrer">
                      Book This Special
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MonthlySpecial;
