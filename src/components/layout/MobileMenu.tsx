
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '../Logo';
import { cn } from '@/lib/utils';

interface NavLink {
  href: string;
  label: string;
  subLinks?: NavLink[];
}

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: NavLink[];
}

const menuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
};

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const navItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

const SubMenu = ({ item, setIsOpen }: { item: NavLink; setIsOpen: (isOpen: boolean) => void }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center gap-2 cursor-pointer group relative text-2xl font-bold tracking-wide text-foreground transition-colors hover:text-accent"
        onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
      >
        <span>{item.label}</span>
        <motion.div animate={{ rotate: isSubMenuOpen ? 180 : 0 }}>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isSubMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col items-center gap-4 mt-4 overflow-hidden"
          >
            {item.subLinks?.map((subLink) => (
              <Link
                key={subLink.href}
                href={subLink.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-accent"
              >
                {subLink.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export function MobileMenu({ isOpen, setIsOpen, navLinks }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }
    return () => {
      document.body.classList.remove('noscroll');
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-50 flex h-full w-full flex-col bg-black text-white"
        >
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Logo />
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center">
            <motion.nav
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-6 text-center"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={navItemVariants}>
                  {link.subLinks ? (
                     <SubMenu item={link} setIsOpen={setIsOpen} />
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative text-2xl font-bold tracking-wide text-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.nav>
            
            <motion.div variants={navItemVariants} className="mt-12 w-full max-w-[280px]">
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground glowing-cta">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                        Start My Project
                    </Link>
                </Button>
            </motion.div>
          </div>
          
           <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8 } }}
            className="py-6 text-center text-xs text-muted-foreground"
          >
            &copy; {new Date().getFullYear()} Stevuth Tech. We build. You shine.
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
