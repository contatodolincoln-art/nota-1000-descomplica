interface StudentTestimonialProps {
  photo: string;
  name: string;
  year: string;
  score: number;
  testimonial: string;
}

export const StudentTestimonialCard = ({
  photo,
  name,
  year,
  score,
  testimonial,
}: StudentTestimonialProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-cyan transition-all duration-300 animate-fade-in-up group">
      <div className="aspect-square overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="font-bold text-lg">{name}</h4>
            <p className="text-sm text-muted-foreground">{year}</p>
          </div>
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap border border-primary/20">
            {score}/1000
          </div>
        </div>
        <p className="text-sm text-foreground leading-relaxed">{testimonial}</p>
      </div>
    </div>
  );
};
