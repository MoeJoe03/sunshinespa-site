import lotusAccent from "@/assets/lotus-accent.png";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-lotus relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 opacity-20 hidden md:block">
        <img src={lotusAccent} alt="" className="w-full h-full object-contain animate-float" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground animate-fade-in-up">
            Ancient Wisdom, Modern Luxury
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-sunrise mx-auto mb-6 sm:mb-8 rounded-full" />
          
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-4 sm:mb-6 leading-relaxed px-4">
            At Sunshine Thai Massage & Spa, we honor the sacred traditions of Thai wellness while embracing 
            contemporary comfort. Each treatment is a journey through centuries of healing wisdom, guided by 
            our master therapists trained in the authentic practices of Thailand.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 leading-relaxed px-4">
            Like the lotus that blooms from muddy waters into pristine beauty, we believe in transformation 
            through mindful touch, aromatic botanicals, and the gentle power of human connection.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="bg-card/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-primary">Thai Heritage</h3>
              <p className="text-sm sm:text-base text-foreground/70">
                Authentic techniques passed down through generations of Thai healing masters
              </p>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-secondary">Natural Harmony</h3>
              <p className="text-sm sm:text-base text-foreground/70">
                Organic essential oils and botanicals sourced from sustainable Thai farms
              </p>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 sm:col-span-2 md:col-span-1">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-accent">Mindful Care</h3>
              <p className="text-sm sm:text-base text-foreground/70">
                Each treatment personalized to honor your unique wellness journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
