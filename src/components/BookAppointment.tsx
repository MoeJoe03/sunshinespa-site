import { Button } from "@/components/ui/button";
import { Calendar, Clock, Phone } from "lucide-react";
const BookAppointment = () => {
  return <section id="book" className="py-16 sm:py-20 md:py-24 bg-gradient-sunrise relative overflow-hidden">
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground animate-fade-in-up">
            Begin Your Wellness Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 sm:mb-12 leading-relaxed px-4">
            Reserve your sanctuary of peace. Our wellness coordinators are ready to craft 
            your perfect experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-card/90 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3" />
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Flexible Scheduling</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Open 7 days a week, 9am - 8pm</p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-secondary mx-auto mb-2 sm:mb-3" />
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Same-Day Availability</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Last-minute bookings welcome</p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 sm:col-span-2 md:col-span-1">
              <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-accent mx-auto mb-2 sm:mb-3" />
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Contact</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Speak with our wellness team</p>
            </div>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-6 sm:py-8 text-base sm:text-lg md:text-xl rounded-full shadow-glow hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-glow-pulse w-full sm:w-auto" asChild>
            <a href="http://wa.link/vmzez1" target="_blank" rel="noopener noreferrer">
              Book Your Appointment
            </a>
          </Button>

          <p className="text-xs sm:text-sm text-foreground/60 mt-6 sm:mt-8 px-4">
            Call us at <a href="tel:+27711174675" className="text-primary hover:underline font-medium">+27 71 117 4675</a>
          </p>
        </div>
      </div>
    </section>;
};
export default BookAppointment;