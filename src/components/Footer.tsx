import { BookOpen, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react'; // Import useState

const Footer = () => {
  const footerLinks = {
    "Core mulelfants": ["My Reports", "Content Experience", "Publishers", "Interations", "Core Reaters"],
    "Nodes": ["1.00K", "Comprehensive", "CIPAL Read estore Line", "Plartrey"],
    "Facturestle": ["Bed None", "One Sound Newtlede", "Proference or e Mares", "Creative ese Existence Weday", "Cro Melcaly"],
    "Comminniss": ["Feed the Norm", "Chorest Beam Way", "Evense Creen of Glene", "Cheelena Wednestly", "Celebrating"],
  };

  // 1. Add state to hold the email input's value
  const [email, setEmail] = useState('');

   // 3. Create a function to handle the button click
  const handleNewsletterSubmit = () => {
    // You can now access the email value here
    console.log("Email to send:", email);
    alert(`Subscribing with email: ${email}`); // For demonstration, you'd send it to a backend

    // Here you would typically send this email to a backend service
    // For example, using fetch:
    /*
    fetch('/api/subscribe-newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
   .then(response => response.json())
   .then(data => {
      console.log('Success:', data);
      alert('Subscription successful!');
      setEmail(''); // Clear the input after submission
    })
   .catch((error) => {
      console.error('Error:', error);
      alert('Subscription failed. Please try again.');
    });
    */
    setEmail(''); // <-- UNCOMMENT THIS LINE to clear the input field!
  };

  return (
    <footer id="contact" className="footer-gradient pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-6 gap-8 pb-12 border-b border-footer-foreground/20">
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-footer-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-footer-foreground/70 hover:text-footer-foreground text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-footer-foreground mb-4">Catewatt Nathen</h4>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-footer-foreground/10 border border-footer-foreground/20 text-footer-foreground placeholder:text-footer-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                value={email} // Bind the input value to the state
                onChange={(e) => setEmail(e.target.value)} // Update state on change
              />
              <p className="text-footer-foreground/60 text-xs">
                Website best v2 - on mobile too
              </p>
                <Button
                    variant="hero"
                    className="w-full"
                    onClick={handleNewsletterSubmit} // Call the handler on click
                >
                Paired New Sweschen
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-footer-foreground">
            <BookOpen className="h-6 w-6" />
            <span className="font-bold">The Book Design</span>
          </div>

          <p className="text-footer-foreground/60 text-sm text-center">
            Visit Storey Rosary & House | eprebooks.com
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-footer-foreground/70 hover:text-footer-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-footer-foreground/70 hover:text-footer-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-footer-foreground/70 hover:text-footer-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-footer-foreground/70 hover:text-footer-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;