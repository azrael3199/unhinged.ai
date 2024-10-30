import { Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">ChatAI</h3>
            <p className="text-sm text-muted-foreground">
              Empowering conversations with artificial intelligence.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Features</li>
              <li>Pricing</li>
              <li>API</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Connect</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          © 2024 ChatAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}