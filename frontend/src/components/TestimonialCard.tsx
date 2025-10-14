import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  score: number;
  text: string;
  year: string;
}

export const TestimonialCard = ({ name, score, text, year }: TestimonialProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-cyan transition-all duration-300 animate-fade-in-up">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-sm text-muted-foreground">{year}</p>
        </div>
        <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-bold text-lg shadow-yellow">
          {score}
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
        ))}
      </div>
      <p className="text-sm text-foreground leading-relaxed">{text}</p>
    </div>
  );
};
