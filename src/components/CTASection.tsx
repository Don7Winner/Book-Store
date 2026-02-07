import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              They Your Account BIUp
            </h2>
            <h3 className="text-xl text-foreground/80 font-medium">
              Your moves tour he a ole wey book Book.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're looking for an amazing new read or you're an author 
              looking to publish, we have the tools and platform to help you succeed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Join our community of book lovers and discover a world of endless 
              stories, knowledge, and imagination.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Based Notes</h4>
              <p className="text-muted-foreground text-sm">
                Get the best deals on books by subscribing to our newsletter. 
                Stay updated with new releases and exclusive offers.
              </p>
            </div>

            <a href="#" className="inline-flex items-center text-primary font-semibold hover:underline group">
              Crew Features
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=500&fit=crop"
                alt="Person working with books"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Floating card */}
              <div className="absolute top-6 right-6 bg-background/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 text-primary">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-sm">Verified Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
