import { MapPin, Phone, Clock, Utensils } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Location & Contact</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Visit us or call for bulk orders and party catering
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address */}
              <div className="menu-card">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Our Location
                    </h4>
                    <p className="text-muted-foreground">
                      Bannikuppe, Harohalli
                      <br />
                      Karnataka - 562112
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="menu-card">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Call Us
                    </h4>
                    <a
                      href="tel:+91-97393-26943"
                      className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                    >
                      97393 26943
                    </a>
                    <a
                      href="tel:+91-99800-81237"
                      className="text-primary hover:text-primary/80 transition-colors font-medium text-lg block"
                    >
                      99800 81237
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      For reservations & bulk orders
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="menu-card">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Opening Hours
                    </h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Morning: 7:00 AM – 10:00 AM</p>
                      <p>Evening: 6:00 PM – 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Catering */}
              <div className="menu-card bg-primary/5 border-primary/20">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Party Catering
                    </h4>
                    <p className="text-muted-foreground">
                      Call us for bulk orders and special event catering. We
                      bring authentic flavors to your celebrations!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="menu-card h-full min-h-[400px] flex flex-col items-center justify-center text-center bg-gradient-to-br from-muted/50 to-muted">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                Find Us Here
              </h4>
              <p className="text-muted-foreground mb-6 max-w-xs">
                Bannikuppe, Harohalli, Karnataka - 562112
              </p>
              
              {/* Direction Buttons */}
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bannikuppe+Harohalli+Karnataka+562112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </a>
                
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Bannikuppe+Harohalli+Karnataka+562112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
                >
                  Get Directions
                </a>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Click to open in your preferred maps app
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
