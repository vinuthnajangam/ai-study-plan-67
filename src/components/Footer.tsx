import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/50 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-semibold text-foreground">
              AI Study Planner
            </span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md mb-4">
            Create personalized, AI-powered study plans to ace your exams.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} AI Study Plan Generator. Study smarter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
