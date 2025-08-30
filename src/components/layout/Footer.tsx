import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { AnimatedWrapper } from './AnimatedWrapper';

const footerLinks = {
  discover: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Who We Are' },
    { href: '/services', label: 'What We Do' },
  ],
  essentials: [
    { href: '/faq', label: 'FAQ' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <AnimatedWrapper delay={0} className="flex flex-col items-start">
            <h4 className="font-headline font-semibold text-white mb-4">Discover</h4>
            <ul className="space-y-2">
              {footerLinks.discover.map(link => (
                  <li key={link.href}>
                      <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:-translate-y-0.5 block">
                          {link.label}
                      </Link>
                  </li>
              ))}
            </ul>
          </AnimatedWrapper>

          <AnimatedWrapper delay={150}>
            <h4 className="font-headline font-semibold text-white mb-4">Essentials</h4>
            <ul className="space-y-2">
              {footerLinks.essentials.map(link => (
                  <li key={link.href}>
                       <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:-translate-y-0.5 block">
                          {link.label}
                      </Link>
                  </li>
              ))}
            </ul>
          </AnimatedWrapper>

          <AnimatedWrapper delay={300}>
            <h4 className="font-headline font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-white">
              <li className="break-all">info@stevuthtech.com</li>
              <li className="break-all">+2349016772065</li>
            </ul>
          </AnimatedWrapper>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6 flex flex-col items-center justify-center">
            <AnimatedWrapper delay={450} className="text-center">
                <div className="mb-4">
                    <Logo isDark={true} />
                </div>
                <p className="text-xs text-white/80">&copy; 2025 Stevuth Tech. All Rights Reserved.</p>
            </AnimatedWrapper>
        </div>
      </div>
    </footer>
  );
}
