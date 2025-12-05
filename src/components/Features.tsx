import { Sparkles, Calendar, RotateCcw, Target } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Personalized Plan",
    description: "AI creates a study schedule tailored to your subject, timeline, and skill level.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Optimized daily timetables that fit your available hours and learning pace.",
  },
  {
    icon: RotateCcw,
    title: "Revision Focused",
    description: "Built-in revision schedules using spaced repetition for better retention.",
  },
  {
    icon: Target,
    title: "Exam-Oriented",
    description: "Focus on high-impact topics and strategies that matter most for your exam.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose AI Study Plans?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI understands your unique needs and creates comprehensive, actionable study plans
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`card-gradient rounded-2xl p-6 shadow-card border border-border/50 text-center hover:shadow-elevated transition-shadow duration-300 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
