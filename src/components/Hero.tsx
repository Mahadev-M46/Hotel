import { Phone, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScrollToMenu = () => {
    const element = document.querySelector("#menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <ChefHat className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Authentic South Indian Flavors
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            AAHARYA
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Authentic South Indian tiffins in the morning and crispy chats in
            the evening. Taste the tradition, feel the warmth.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              onClick={handleScrollToMenu}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
            >
              <a href="tel:+91-97393-26943" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Timing hint */}
          <p
            className="mt-12 text-sm text-muted-foreground animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            Morning Tiffin: 7 AM – 10 AM &nbsp;•&nbsp; Evening Chats: 6 PM – 10
            PM
          </p>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
