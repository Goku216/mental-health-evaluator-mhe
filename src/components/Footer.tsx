import { Phone, Mail, Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto container py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">MindCheck</h3>
          <p className="text-muted-foreground">
            Supporting your mental well-being through professional evaluation
            and guidance.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <a
              href="/evaluate"
              className="text-muted-foreground hover:text-primary"
            >
              Mental Health Test
            </a>
            <a
              href="/resources"
              className="text-muted-foreground hover:text-primary"
            >
              Support Resources
            </a>
            <a
              href="/about"
              className="text-muted-foreground hover:text-primary"
            >
              About Us
            </a>
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Emergency</h3>
          <div className="flex flex-col space-y-2 text-muted-foreground">
            <p>Crisis Helpline: 988</p>
            <p>Available 24/7</p>
            <a href="/crisis" className="hover:text-primary">
              Crisis Resources
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <div className="flex flex-col space-y-2 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>support@mindcheck.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>1-800-MINDCHECK</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MindCheck. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
