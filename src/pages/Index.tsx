import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import StudyPlanForm, { StudyFormData } from "@/components/StudyPlanForm";
import StudyPlanDisplay, { StudyPlan } from "@/components/StudyPlanDisplay";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null);
  const [rawPlanText, setRawPlanText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateStudyPlan = async (formData: StudyFormData) => {
    setIsLoading(true);
    
    // Calculate days until exam
    const examDate = new Date(formData.examDate);
    const today = new Date();
    const daysUntilExam = Math.ceil((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    // Generate a comprehensive mock study plan
    const mockPlan: StudyPlan = {
      overview: `You have ${daysUntilExam} days to prepare for ${formData.subject}. With ${formData.dailyHours} hours of daily study as a ${formData.level} student, this plan focuses on systematic learning, regular practice, and strategic revision. Stay consistent, take breaks, and trust the process.`,
      dailyTimetable: [
        `Morning (First ${Math.ceil(parseInt(formData.dailyHours) / 2)} hours): Focus on new concepts and difficult topics when your mind is fresh`,
        `Afternoon/Evening: Practice problems, review notes, and active recall exercises`,
        `Last 30 minutes: Quick revision of key formulas, definitions, or concepts covered today`,
        `Weekly: One day lighter study load for rest and consolidation`,
      ],
      chapterBreakdown: [
        `Week 1-2: Cover foundational concepts and core chapters (${formData.level === 'beginner' ? 'Start with basics' : 'Quick review'})`,
        `Week 3-4: Advanced topics and problem-solving techniques`,
        `Final weeks: Integration of concepts, mock tests, and targeted revision`,
        `Allocate extra time for ${formData.level === 'advanced' ? 'complex problem solving' : 'concept clarity'}`,
      ],
      weeklyGoals: [
        "Complete all assigned chapters and make summary notes",
        "Solve at least 20-30 practice problems per topic",
        "Take one timed mini-test on covered material",
        "Review and correct all mistakes from practice sessions",
        "Identify weak areas and schedule extra practice",
      ],
      revisionSchedule: [
        "Daily: 15-minute quick review of previous day's topics",
        "Weekly: 1-hour comprehensive revision of the week's material",
        "Bi-weekly: Full topic tests to assess retention",
        "Final week: Intensive revision of all key topics and weak areas",
        "Day before exam: Light review only, focus on rest",
      ],
      importantTopics: [
        "Core concepts that form the foundation of the subject",
        "Frequently tested topics from previous exams",
        "Topics you find most challenging (allocate extra time)",
        "Application-based problems and case studies",
        "Formula sheets and key definitions for quick reference",
      ],
      timeTips: [
        "Use the Pomodoro technique: 25 minutes focus, 5 minutes break",
        "Study most difficult subjects when you're most alert",
        "Avoid multitasking - single-task for better retention",
        "Get 7-8 hours of sleep for optimal memory consolidation",
        "Stay hydrated and take short walks between study sessions",
        "Remove phone distractions during focused study time",
      ],
    };

    // Simulate API delay for realistic UX
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Format raw text for copy/download
    const rawText = `
AI STUDY PLAN - ${formData.subject.toUpperCase()}
Generated: ${new Date().toLocaleDateString()}
Exam Date: ${formData.examDate}
Daily Study Hours: ${formData.dailyHours}
Level: ${formData.level.charAt(0).toUpperCase() + formData.level.slice(1)}

═══════════════════════════════════════

OVERVIEW
${mockPlan.overview}

═══════════════════════════════════════

DAILY TIMETABLE
${mockPlan.dailyTimetable.map(item => `• ${item}`).join('\n')}

═══════════════════════════════════════

CHAPTER-WISE BREAKDOWN
${mockPlan.chapterBreakdown.map(item => `• ${item}`).join('\n')}

═══════════════════════════════════════

WEEKLY GOALS
${mockPlan.weeklyGoals.map(item => `• ${item}`).join('\n')}

═══════════════════════════════════════

REVISION SCHEDULE
${mockPlan.revisionSchedule.map(item => `• ${item}`).join('\n')}

═══════════════════════════════════════

IMPORTANT TOPICS TO FOCUS ON
${mockPlan.importantTopics.map(item => `• ${item}`).join('\n')}

═══════════════════════════════════════

TIME MANAGEMENT TIPS
${mockPlan.timeTips.map(item => `• ${item}`).join('\n')}

═══════════════════════════════════════

Good luck with your studies! Stay consistent and believe in yourself.
    `.trim();

    setStudyPlan(mockPlan);
    setRawPlanText(rawText);
    setIsLoading(false);

    toast({
      title: "Study Plan Generated!",
      description: "Your personalized study plan is ready.",
    });

    // Scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onGetStarted={scrollToForm} />
      
      <div ref={formRef}>
        <StudyPlanForm onSubmit={generateStudyPlan} isLoading={isLoading} />
      </div>

      {studyPlan && (
        <div ref={resultsRef}>
          <StudyPlanDisplay plan={studyPlan} rawText={rawPlanText} />
        </div>
      )}

      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
