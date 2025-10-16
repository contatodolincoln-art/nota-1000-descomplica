import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface FloatingCTAProps {
  onClick: () => void;
}

export const FloatingCTA = ({ onClick }: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-t from-background via-background to-transparent pt-4 pb-4 px-4 animate-slide-in-up">
      <Button
        onClick={onClick}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-base shadow-cyan animate-pulse-glow"
      >
        Garantir vaga por R$ 39,90
      </Button>
    </div>
  );
};
