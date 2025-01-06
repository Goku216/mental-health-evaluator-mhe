import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Shield } from "lucide-react";

const slides = [
  {
    title: "Depression Screening",
    description: "Take our clinically validated depression assessment",
    image: "/api/placeholder/800/400",
  },
  {
    title: "Anxiety Screening",
    description: "Evaluate your anxiety levels with professional tools",
    image: "/api/placeholder/800/400",
  },
  {
    title: "Mental Wellness Check",
    description: "Complete mental health evaluation",
    image: "/api/placeholder/800/400",
  },
];

export const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Your Mental Health Matters
            </h1>
            <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
              Take the first step towards understanding and improving your
              mental well-being
            </p>
            <Button
              onClick={() => navigate("/form")}
              size="lg"
              className="rounded-full mx-auto"
            >
              Start Free Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="mx-auto w-full max-w-sm">
              <CardContent className="pt-6 text-center space-y-4">
                <Brain className="w-12 h-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold">
                  Professional Assessment
                </h3>
                <p className="text-muted-foreground">
                  Clinically validated tools to evaluate your mental health
                  status
                </p>
              </CardContent>
            </Card>
            <Card className="mx-auto w-full max-w-sm">
              <CardContent className="pt-6 text-center space-y-4">
                <Heart className="w-12 h-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold">Personalized Care</h3>
                <p className="text-muted-foreground">
                  Tailored recommendations based on your assessment results
                </p>
              </CardContent>
            </Card>
            <Card className="mx-auto w-full max-w-sm">
              <CardContent className="pt-6 text-center space-y-4">
                <Shield className="w-12 h-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold">Complete Privacy</h3>
                <p className="text-muted-foreground">
                  Your data is encrypted and protected with industry standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sliding Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative overflow-hidden rounded-lg max-w-4xl mx-auto">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative aspect-video">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="object-cover w-full"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
                      <div className="text-center max-w-xl mx-auto px-4">
                        <h3 className="text-2xl font-bold mb-2">
                          {slide.title}
                        </h3>
                        <p>{slide.description}</p>
                        <Button
                          variant="outline"
                          className="mt-4 text-white border-white hover:bg-white hover:text-black mx-auto"
                        >
                          Take Assessment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
