import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { AnimatedWrapper } from './AnimatedWrapper';

const footerLinks = {
  discover: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Who We Are' },
    { href: '/services', label: 'Solutions We Provide' },
  ],
  essentials: [
    { href: '/faq', label: 'FAQ' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ],
};

const socialLinks = [
    { href: '#', icon: <Facebook size={20} />, label: 'Facebook' },
    { href: '#', icon: <Twitter size={20} />, label: 'Twitter' },
    { href: '#', icon: <Linkedin size={20} />, label: 'LinkedIn' },
    { href: '#', icon: <Instagram size={20} />, label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <AnimatedWrapper delay={0} className="flex flex-col items-start">
            <h4 className="font-headline font-semibold mb-4">Discover</h4>
            <ul className="space-y-2">
              {footerLinks.discover.map(link => (
                  <li key={link.href}>
                      <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:-translate-y-0.5 block">
                          {link.label}
                      </Link>
                  </li>
              ))}
            </ul>
          </AnimatedWrapper>

          <AnimatedWrapper delay={150}>
            <h4 className="font-headline font-semibold mb-4">Essentials</h4>
            <ul className="space-y-2">
              {footerLinks.essentials.map(link => (
                  <li key={link.href}>
                       <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:-translate-y-0.5 block">
                          {link.label}
                      </Link>
                  </li>
              ))}
            </ul>
          </AnimatedWrapper>

          <AnimatedWrapper delay={300}>
            <h4 className="font-headline font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="break-all">info@rightfocus.com</li>
              <li className="break-all">+2348139940522</li>
              <li className="break-all">+2349121715042</li>
              <li className="break-all">+2348035289834</li>
              <li className="break-all">+971586946934</li>
              <li className="break-all">4, Ogooluwa Street off Cele - Ifihan, Baba Mushin, Olaotan B/S, ljoko Road, Sango Ota, Ogun State.</li>
            </ul>
             <div className="flex space-x-4 mt-6">
                {socialLinks.map(social => (
                     <Link key={social.label} href={social.href} aria-label={social.label} className="text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:-translate-y-0.5">
                        {social.icon}
                     </Link>
                ))}
            </div>
          </AnimatedWrapper>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
            <AnimatedWrapper delay={450}>
                <div className="mb-4">
                    <Logo isDark={true} />
                </div>
                <p>&copy; {new Date().getFullYear()} Right Focus Intl. All Rights Reserved.</p>
            </AnimatedWrapper>
        </div>
      </div>
    </footer>
  );
}
