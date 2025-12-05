import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, BookOpen, GraduationCap, Loader2 } from "lucide-react";

export interface StudyFormData {
  subject: string;
  examDate: string;
  dailyHours: string;
  level: string;
}

interface StudyPlanFormProps {
  onSubmit: (data: StudyFormData) => void;
  isLoading: boolean;
}

const StudyPlanForm = ({ onSubmit, isLoading }: StudyPlanFormProps) => {
  const [formData, setFormData] = useState<StudyFormData>({
    subject: "",
    examDate: "",
    dailyHours: "",
    level: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.subject && formData.examDate && formData.dailyHours && formData.level) {
      onSubmit(formData);
    }
  };

  const isFormValid = formData.subject && formData.examDate && formData.dailyHours && formData.level;

  return (
    <section id="form-section" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Create Your Study Plan
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill in your details and we'll generate a personalized plan for you
            </p>
          </div>

          {/* Form card */}
          <div className="card-gradient rounded-2xl shadow-card p-8 sm:p-10 border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Subject input */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="flex items-center gap-2 text-foreground font-medium">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Subject or Exam Name
                </Label>
                <Input
                  id="subject"
                  placeholder="e.g., Advanced Mathematics, IELTS, Physics"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="h-12 rounded-xl bg-background border-border/60 focus:border-primary"
                />
              </div>

              {/* Exam date input */}
              <div className="space-y-2">
                <Label htmlFor="examDate" className="flex items-center gap-2 text-foreground font-medium">
                  <Calendar className="w-4 h-4 text-primary" />
                  Exam Date / Deadline
                </Label>
                <Input
                  id="examDate"
                  type="date"
                  value={formData.examDate}
                  onChange={(e) => setFormData({ ...formData, examDate: e.target.value })}
                  className="h-12 rounded-xl bg-background border-border/60 focus:border-primary"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Daily hours input */}
              <div className="space-y-2">
                <Label htmlFor="dailyHours" className="flex items-center gap-2 text-foreground font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  Daily Available Study Hours
                </Label>
                <Select
                  value={formData.dailyHours}
                  onValueChange={(value) => setFormData({ ...formData, dailyHours: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl bg-background border-border/60 focus:border-primary">
                    <SelectValue placeholder="Select hours per day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 hour</SelectItem>
                    <SelectItem value="2">2 hours</SelectItem>
                    <SelectItem value="3">3 hours</SelectItem>
                    <SelectItem value="4">4 hours</SelectItem>
                    <SelectItem value="5">5 hours</SelectItem>
                    <SelectItem value="6">6+ hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Level select */}
              <div className="space-y-2">
                <Label htmlFor="level" className="flex items-center gap-2 text-foreground font-medium">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  Current Level
                </Label>
                <Select
                  value={formData.level}
                  onValueChange={(value) => setFormData({ ...formData, level: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl bg-background border-border/60 focus:border-primary">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner - Just starting out</SelectItem>
                    <SelectItem value="intermediate">Intermediate - Some knowledge</SelectItem>
                    <SelectItem value="advanced">Advanced - Need fine-tuning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full mt-4"
                disabled={!isFormValid || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating Your Plan...
                  </>
                ) : (
                  <>
                    <BookOpen className="w-5 h-5" />
                    Generate Study Plan
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyPlanForm;
