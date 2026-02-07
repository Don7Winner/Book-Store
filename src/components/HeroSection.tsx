import { Button } from "@/components/ui/button";
import { ArrowRight, Link, Sparkles } from "lucide-react";
import heroBooks from "@/assets/hero-books.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)] py-12">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Discover Amazing Books
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
              Book Website{" "}
              <span className="relative">
                Design
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              for Your <br />Formal Design
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              Explore our curated collection of books across every genre. From bestsellers to hidden gems, 
              find your next adventure waiting between the pages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://themeforest.net/category/ecommerce?term=bookstore&srsltid=AfmBOorkz9yTStVufmcsdx137HgZTljbq_DsYIWNDp2WD6Hrzf03ERZi">
                <Button variant="hero" size="xl" className="group">
                Explore Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              </a>
             <a href="https://author.envato.com/">
               <Button variant="ghost-light" size="xl">
                Learn More
              </Button>
             </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6">
              <div>
                <p className="text-3xl font-bold text-primary-foreground">50K+</p>
                <p className="text-primary-foreground/70 text-sm">Books Available</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-foreground">100K+</p>
                <p className="text-primary-foreground/70 text-sm">Happy Readers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-foreground">4.9</p>
                <p className="text-primary-foreground/70 text-sm">User Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <img
                src={heroBooks}
                alt="Collection of beautiful books"
                className="w-full max-w-lg xl:max-w-xl rounded-3xl shadow-2xl"
              />
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-xl animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">New Arrivals</p>
                    <p className="text-sm text-muted-foreground">Updated Weekly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
