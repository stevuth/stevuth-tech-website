import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { AnimatedWrapper } from './AnimatedWrapper';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  company: [
    { href: '/about', label: 'Who We Are' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQ' },
  ],
  services: [
    { href: '/services#custom-website-development', label: 'Web Development' },
    { href: '/services#ui-ux-design', label: 'UI/UX Design' },
    { href: '/services#ecommerce-development', label: 'E-Commerce' },
    { href: '/services#seo-services', label: 'SEO Services' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ],
};

const socialLinks = [
  { href: '#', label: 'LinkedIn', icon: <Linkedin className="h-5 w-5" /> },
  { href: '#', label: 'Twitter', icon: <Twitter className="h-5 w-5" /> },
  { href: '#', label: 'Facebook', icon: <Facebook className="h-5 w-5" /> },
];

export function Footer() {
  return (
    <footer className="bg-background text-primary-foreground border-t border-border">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-12 lg:col-span-4">
                 <AnimatedWrapper>
                    <div className="mb-4">
                        <Logo isDark={true} />
                    </div>
                    <p className="text-sm text-primary-foreground/60 max-w-xs">
                        Building exceptional digital experiences that drive growth for businesses in Nigeria and beyond.
                    </p>
                </AnimatedWrapper>
            </div>
            
            <div className="md:col-span-6 lg:col-span-2">
                <AnimatedWrapper delay={100}>
                    <h4 className="font-headline font-semibold text-white mb-4">Company</h4>
                    <ul className="space-y-3">
                        {footerLinks.company.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedWrapper>
            </div>

            <div className="md:col-span-6 lg:col-span-2">
                <AnimatedWrapper delay={200}>
                    <h4 className="font-headline font-semibold text-white mb-4">Services</h4>
                    <ul className="space-y-3">
                        {footerLinks.services.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedWrapper>
            </div>

            <div className="md:col-span-6 lg:col-span-2">
                <AnimatedWrapper delay={300}>
                    <h4 className="font-headline font-semibold text-white mb-4">Legal</h4>
                    <ul className="space-y-3">
                        {footerLinks.legal.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedWrapper>
            </div>

            <div className="md:col-span-6 lg:col-span-2">
                <AnimatedWrapper delay={400}>
                    <h4 className="font-headline font-semibold text-white mb-4">Connect</h4>
                    <div className="flex space-x-4">
                        {socialLinks.map(social => (
                            <Link key={social.label} href={social.href} aria-label={social.label} className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </AnimatedWrapper>
            </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center">
            <AnimatedWrapper delay={500}>
                <p className="text-xs text-white/60">&copy; {new Date().getFullYear()} Stevuth Tech. All Rights Reserved.</p>
            </AnimatedWrapper>
        </div>
      </div>
    </footer>
  );
}
