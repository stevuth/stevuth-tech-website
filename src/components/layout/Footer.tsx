import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { AnimatedWrapper } from './AnimatedWrapper';

const footerLinks = [
    { href: '/about', label: 'Who We Are' },
    { href: '/services', label: 'What We Do' },
    { href: '/packages', label: 'Packages' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
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
