import { Button } from "@/components/ui/button";
import { Copy, Download, Check, BookOpen, Calendar, Target, RotateCcw, Star, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export interface StudyPlan {
  overview: string;
  dailyTimetable: string[];
  chapterBreakdown: string[];
  weeklyGoals: string[];
  revisionSchedule: string[];
  importantTopics: string[];
  timeTips: string[];
}

interface StudyPlanDisplayProps {
  plan: StudyPlan;
  rawText: string;
}

const PlanCard = ({ 
  title, 
  icon: Icon, 
  items, 
  delay 
}: { 
  title: string; 
  icon: React.ElementType; 
  items: string[]; 
  delay: string;
}) => (
  <div className={`card-gradient rounded-2xl shadow-card p-6 border border-border/50 animate-fade-up ${delay}`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const StudyPlanDisplay = ({ plan, rawText }: StudyPlanDisplayProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawText);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Study plan copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    const blob = new Blob([rawText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "study-plan.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({
      title: "Downloaded!",
      description: "Study plan saved as study-plan.txt",
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header with actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Your Study Plan
              </h2>
              <p className="text-muted-foreground">
                AI-generated personalized study schedule
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="soft" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Plan
                  </>
                )}
              </Button>
              <Button variant="default" onClick={handleDownload}>
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </div>

          {/* Overview card */}
          <div className="card-gradient rounded-2xl shadow-card p-8 border border-border/50 mb-8 animate-fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Overview</h3>
                <p className="text-sm text-muted-foreground">Your study plan summary</p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed text-lg">{plan.overview}</p>
          </div>

          {/* Plan sections grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <PlanCard 
              title="Daily Timetable" 
              icon={Calendar} 
              items={plan.dailyTimetable}
              delay="animation-delay-100"
            />
            <PlanCard 
              title="Chapter Breakdown" 
              icon={BookOpen} 
              items={plan.chapterBreakdown}
              delay="animation-delay-200"
            />
            <PlanCard 
              title="Weekly Goals" 
              icon={Target} 
              items={plan.weeklyGoals}
              delay="animation-delay-100"
            />
            <PlanCard 
              title="Revision Schedule" 
              icon={RotateCcw} 
              items={plan.revisionSchedule}
              delay="animation-delay-200"
            />
            <PlanCard 
              title="Important Topics" 
              icon={Star} 
              items={plan.importantTopics}
              delay="animation-delay-100"
            />
            <PlanCard 
              title="Time Management Tips" 
              icon={Clock} 
              items={plan.timeTips}
              delay="animation-delay-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyPlanDisplay;
