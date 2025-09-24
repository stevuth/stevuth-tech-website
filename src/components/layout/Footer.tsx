import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { AnimatedWrapper } from './AnimatedWrapper';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = [
    { href: '/about', label: 'Who We Are' },
    { href: '/services', label: 'What We Do' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
];

const socialLinks = [
  { href: '#', label: 'LinkedIn', icon: <Linkedin className="h-5 w-5" /> },
  { href: '#', label: 'Twitter', icon: <Twitter className="h-5 w-5" /> },
  { href: '#', label: 'Facebook', icon: <Facebook className="h-5 w-5" /> },
];

export function Footer() {
  return (
    <footer className="bg-background text-primary-foreground border-t border-border">
      <div className="container px-4 md:px-6 py-8">
        <AnimatedWrapper>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="flex-shrink-0">
                    <Logo isDark={true} />
                </div>
                
                <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center md:text-left">
                    {footerLinks.map(link => (
                        <Link key={link.href} href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                
                <div className="flex space-x-4">
                    {socialLinks.map(social => (
                        <Link key={social.label} href={social.href} aria-label={social.label} className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                            {social.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </AnimatedWrapper>

        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center">
            <AnimatedWrapper delay={200}>
                <p className="text-xs text-white/60">&copy; {new Date().getFullYear()} Stevuth Tech. All Rights Reserved. Building exceptional digital experiences that drive growth.</p>
            </AnimatedWrapper>
        </div>
      </div>
    </footer>
  );
}
