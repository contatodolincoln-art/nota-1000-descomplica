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
    <div className="bg-card rounded-xl overflow-hidden shadow-soft border border-border hover:shadow-cyan transition-all duration-300 animate-fade-in-up group">
      <div className="aspect-square overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-bold text-sm">{name}</h4>
            <p className="text-xs text-muted-foreground">{year}</p>
          </div>
          <div className="bg-primary/10 text-primary px-2 py-0.5 rounded-md font-bold text-xs whitespace-nowrap border border-primary/20">
            {score}
          </div>
        </div>
        <p className="text-xs text-foreground leading-relaxed line-clamp-3">{testimonial}</p>
      </div>
    </div>
  );
};
