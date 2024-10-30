import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AuthDialog } from '@/components/auth/auth-dialog';
import { Footer } from '@/components/layout/footer';
import { useState } from 'react';
import { Brain, Sparkles, MessageSquare } from 'lucide-react';

export function LandingPage() {
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-['Space_Grotesk']">
              Unhinged.ai
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => setShowAuth(true)}>
              Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
              onClick={() => setShowAuth(true)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-16 relative z-10">
        <section className="min-h-[80vh] flex items-center justify-center">
          <div className="container px-4 py-32 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-['Space_Grotesk']">
              Experience AI Without Limits
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Unleash the power of unrestricted conversations with our advanced AI companion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                onClick={() => setShowAuth(true)}
              >
                Start Chatting Free
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm bg-background/30">
                View Demo
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative">
          <div className="container px-4">
            <h3 className="text-3xl font-bold text-center mb-16">Why Choose Unhinged.ai?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 transition-colors">
                  <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AuthDialog 
        open={showAuth} 
        onOpenChange={setShowAuth}
      />
    </div>
  );
}

const features = [
  {
    icon: Brain,
    title: "Advanced AI",
    description: "State-of-the-art language model trained on diverse datasets."
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Engage in fluid, context-aware discussions that feel human-like."
  },
  {
    icon: Sparkles,
    title: "Unlimited Potential",
    description: "No restrictions on topics or conversation length."
  }
];