
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add('active');
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent -z-10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-1/4 left-5 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-5 w-80 h-80 bg-blue-200/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={heroRef} className="reveal-animation fade-up">
            <div className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              Simplify your workflow
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              A <span className="text-primary">better way</span> to manage your projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Streamline your workflows, collaborate seamlessly, and deliver faster with our intuitive SaaS platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="btn-primary animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Get started for free
              </a>
              <a href="#features" className="btn-secondary animate-fade-in" style={{ animationDelay: '0.6s' }}>
                See how it works
              </a>
            </div>
            <div className="mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p>No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
          </div>
          
          <div className="relative lg:flex justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative max-w-md mx-auto lg:mr-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-400/20 rounded-2xl blur-xl"></div>
              <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl animate-pulse-slow">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" 
                  alt="Platform Dashboard Preview"
                  className="w-full h-auto rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 glass-card animate-slide-in" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs">JD</div>
                    <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-xs">KC</div>
                    <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white text-xs">TL</div>
                  </div>
                  <span className="text-sm font-medium">+28 active users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
