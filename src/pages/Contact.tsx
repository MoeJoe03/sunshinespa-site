import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle, Flower2, Sparkles } from "lucide-react";

const Contact = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="container mx-auto px-4 text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flower2 className="w-10 h-10 text-primary animate-lotus-float" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold bg-gradient-sunrise bg-clip-text text-transparent">
              Connect With Us
            </h1>
            <Flower2 className="w-10 h-10 text-primary animate-lotus-float" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Begin your journey to wellness. Reach out through your preferred channel.
          </p>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Booking Options */}
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <div className="bg-gradient-lotus rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-playfair font-semibold mb-2">Book via WhatsApp</h2>
                    <p className="text-muted-foreground mb-4">
                      Quick and easy booking through WhatsApp. Get instant responses to your inquiries.
                    </p>
                  </div>
                </div>
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-soft hover:shadow-glow"
                  asChild
                >
                  <a href="http://wa.link/vmzez1" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Call Card */}
              <div className="bg-gradient-lotus rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-playfair font-semibold mb-2">Call Us Directly</h2>
                    <p className="text-muted-foreground mb-4">
                      Speak with our wellness experts and schedule your perfect treatment.
                    </p>
                  </div>
                </div>
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full py-6 rounded-full font-medium transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="tel:+27711174675">
                    <Phone className="mr-2" />
                    +27 71 117 4675
                  </a>
                </Button>
              </div>


            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant">
                <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">120 Rose Avenue, Lenasia</p>
                      <p className="text-xs text-muted-foreground/70 mt-1 italic">Please use side entrance and call for assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+27 71 117 4675</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a 
                        href="http://wa.link/vmzez1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>



                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                        <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-elegant">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.0234567890123!2d27.8223!3d-26.2893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a5d5b5b5b5b5%3A0x1234567890abcdef!2s120%20Rose%20Ave%2C%20Lenasia%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sunshine Spa Location - 120 Rose Avenue, Lenasia"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
