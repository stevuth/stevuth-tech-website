import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 flex flex-col items-start">
            <Logo isDark={true} />
            <p className="mt-4 text-sm text-primary-foreground/70">
              Driving Growth Across Industries with Focus & Integrity.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>info@rightfocus.com</li>
              <li>+1 234 567 890</li>
              <li>123 Focus Lane, Growth City</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Right Focus International. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
