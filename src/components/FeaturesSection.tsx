import { BookOpen, Download, Heart, Truck } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Wide Selection",
    description: "Browse through over 50,000 titles spanning every genre imaginable, from classic literature to the latest bestsellers.",
  },
  {
    icon: Download,
    title: "Instant Downloads",
    description: "Get your eBooks delivered instantly. Start reading within seconds on any device, anywhere in the world.",
  },
  {
    icon: Heart,
    title: "Author Support",
    description: "We partner directly with authors to ensure they receive fair compensation. Support the writers you love.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Physical books shipped within 24 hours. Free delivery on orders over $25. Track your order in real-time.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why from Mibable Loomy Designs
          </h2>
          <p className="text-lg text-muted-foreground">
            We're more than just a bookstore. Discover what makes our platform the perfect 
            destination for book lovers everywhere.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info Row */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Where else are your ethnicity and preferential and somies to b lacks your book design.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our platform combines the best of technology with a passion for literature. 
              Every feature is designed to make your reading journey seamless and enjoyable.
            </p>
            <a href="#" className="inline-flex items-center text-primary font-semibold hover:underline">
              Explore Open Designs
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop" 
                alt="Person reading a book"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" 
                alt="Stack of books"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
