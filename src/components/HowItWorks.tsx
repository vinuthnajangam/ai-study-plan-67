import { FileText, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Enter Details",
    description: "Fill in your subject, exam date, available study hours, and current level.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI Creates Plan",
    description: "Our AI analyzes your inputs and generates a comprehensive, personalized study plan.",
  },
  {
    icon: Download,
    step: "03",
    title: "Download & Study",
    description: "Copy or download your plan and start studying smarter, not harder.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get your personalized study plan in three simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className={`text-center relative animate-fade-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step number badge */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto relative z-10">
                      <step.icon className="w-9 h-9 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full btn-gradient text-primary-foreground text-sm font-bold flex items-center justify-center z-20">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
