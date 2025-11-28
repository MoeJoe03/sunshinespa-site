import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower, Sparkles, Heart, Leaf } from "lucide-react";
import thaiHotOilMassage from "@/assets/thai-hot-oil-massage.jpg";
import aromatherapyMassage from "@/assets/aromatherapy-massage.jpg";
import cuppingTherapy from "@/assets/cupping-therapy.jpg";
import bodyScrub from "@/assets/body-scrub.jpg";

const Treatments = () => {
  const treatments = [
    {
      icon: Flower,
      title: "Thai Hot Oil Massage",
      duration: "60-90 minutes",
      description: "Traditional Thai massage enhanced with warm aromatic oils to deeply relax muscles, improve circulation, and restore inner balance.",
      image: thaiHotOilMassage,
      color: "text-primary"
    },
    {
      icon: Sparkles,
      title: "Aroma Therapy Massage",
      duration: "60-90 minutes",
      description: "Surrender to aromatic bliss with our signature essential oil massage, combining therapeutic techniques with healing botanicals.",
      image: aromatherapyMassage,
      color: "text-secondary"
    },
    {
      icon: Heart,
      title: "Wet and Dry Cupping",
      duration: "45-60 minutes",
      description: "Ancient healing therapy using suction cups to release tension, improve blood flow, and promote natural detoxification.",
      image: cuppingTherapy,
      color: "text-accent"
    },
    {
      icon: Leaf,
      title: "Body Scrub",
      duration: "60 minutes",
      description: "Luxurious exfoliation treatment that removes dead skin cells, reveals radiant skin, and leaves your body silky smooth.",
      image: bodyScrub,
      color: "text-primary"
    }
  ];

  return (
    <section id="treatments" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            Signature Treatments
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-sunrise mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Each treatment is a sacred ritual, designed to restore harmony between body, mind, and spirit
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <Card 
                key={index}
                className="group overflow-hidden border-none shadow-elegant hover:shadow-glow transition-all duration-500 bg-card/80 backdrop-blur-sm hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90" />
                  <div className={`absolute top-4 right-4 ${treatment.color}`}>
                    <Icon className="w-12 h-12 drop-shadow-lg" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">{treatment.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{treatment.duration}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-foreground/70 leading-relaxed">{treatment.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
