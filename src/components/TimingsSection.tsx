import { useState, useEffect } from "react";
import { Clock, Sun, Moon } from "lucide-react";

const TimingsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      // Morning: 7:00 AM (420 mins) - 10:00 AM (600 mins)
      // Evening: 6:00 PM (1080 mins) - 10:00 PM (1320 mins)
      const isMorningOpen = currentMinutes >= 420 && currentMinutes < 600;
      const isEveningOpen = currentMinutes >= 1080 && currentMinutes < 1320;

      setIsOpen(isMorningOpen || isEveningOpen);
      setCurrentTime(now);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="timings" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Our Timings</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              We serve fresh, authentic dishes during these hours
            </p>
          </div>

          {/* Open/Closed Badge */}
          <div className="flex justify-center mb-10">
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-base font-semibold ${
                isOpen ? "badge-open" : "badge-closed"
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  isOpen ? "bg-emerald-500 animate-pulse-soft" : "bg-red-500"
                }`}
              />
              {isOpen ? "Open Now" : "Closed Now"}
            </div>
          </div>

          {/* Timing Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Morning Card */}
            <div className="menu-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-5">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                Morning Tiffin
              </h3>
              <p className="text-3xl font-bold text-primary mb-3">
                7:00 AM – 10:00 AM
              </p>
              <p className="text-muted-foreground">
                Start your day with our authentic South Indian breakfast
              </p>
            </div>

            {/* Evening Card */}
            <div className="menu-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/15 mb-5">
                <Moon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                Evening Chats
              </h3>
              <p className="text-3xl font-bold text-secondary mb-3">
                6:00 PM – 10:00 PM
              </p>
              <p className="text-muted-foreground">
                Enjoy crispy, flavorful evening snacks
              </p>
            </div>
          </div>

          {/* Current Time */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>
                Current time:{" "}
                {currentTime.toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingsSection;
