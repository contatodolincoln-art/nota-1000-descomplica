import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

interface VideoTestimonial {
  thumbnail: string;
  name: string;
  year: string;
  subtitle: string;
}

interface VideoTestimonialCarouselProps {
  videos: VideoTestimonial[];
}

export const VideoTestimonialCarousel = ({ videos }: VideoTestimonialCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {videos.map((video, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted shadow-soft border border-border hover:shadow-cyan transition-all duration-300">
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-accent/40 group-hover:bg-accent/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-cyan">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <h4 className="font-bold text-base">{video.name}</h4>
                <p className="text-sm text-muted-foreground">{video.subtitle}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 bg-card border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
      <CarouselNext className="-right-4 bg-card border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
    </Carousel>
  );
};
