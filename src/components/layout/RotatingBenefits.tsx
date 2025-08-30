"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Rocket, Zap, Smartphone, Target, Globe, ShieldCheck } from 'lucide-react';
import { AnimatedWrapper } from './AnimatedWrapper';

const benefits = [
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Fast Delivery",
    description: "Get your website live in as little as 7 days.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "No Hidden Costs",
    description: "One-time payment, no monthly fees.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile-First Design",
    description: "Optimized for users on phones.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Conversion-Focused",
    description: "Designed to turn visitors into paying customers.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Trusted by Businesses",
    description: "From startups to growing brands worldwide.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Ongoing Support",
    description: "We don’t just build, we stay to support you.",
  },
];

export function RotatingBenefits() {
    return (
        <section 
            className="relative bg-primary py-20 md:py-32 overflow-hidden"
            style={{
                '--orbit-size': '250px',
                '--orbit-size-md': '300px',
                '--orbit-size-lg': '350px',
            } as React.CSSProperties}
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative container mx-auto px-4">
                <div 
                    className="rotating-benefits-container"
                    style={{ '--total-items': benefits.length } as React.CSSProperties}
                >
                    <div className="rotating-benefits-orbit">
                        {benefits.map((benefit, index) => (
                             <AnimatedWrapper 
                                key={benefit.title}
                                animation="fade-in" 
                                delay={index * 150}
                                className="rotating-benefit-item"
                                style={{ '--item-index': index } as React.CSSProperties}
                             >
                                <div className="benefit-content">
                                    <div className="benefit-icon">
                                        {benefit.icon}
                                        <h4 className="benefit-title">{benefit.title}</h4>
                                    </div>
                                    <p className="benefit-description">{benefit.description}</p>
                                </div>
                            </AnimatedWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
