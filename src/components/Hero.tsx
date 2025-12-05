import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="hero-gradient min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            AI-Powered Study Planning
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-up animation-delay-100 font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Master Any Subject with{" "}
            <span className="text-primary">Smart Study Plans</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up animation-delay-200 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Enter your exam details and let AI create a personalized, structured study plan 
            with daily schedules, revision strategies, and time-management tips.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up animation-delay-300">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onGetStarted}
              className="group"
            >
              <BookOpen className="w-5 h-5 transition-transform group-hover:rotate-6" />
              Generate Study Plan
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up animation-delay-400 mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Free to use
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              No signup required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Instant results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
