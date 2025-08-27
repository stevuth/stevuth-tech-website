import { AnimatedWrapper } from './AnimatedWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export function DonationStrip() {
  return (
    <section className="bg-primary/5 py-10 md:py-12">
      <AnimatedWrapper>
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-headline font-bold mb-6">
            Be Part of the Change — Support Our Orphanage Today.
          </h2>
          <div className="max-w-md mx-auto">
            <Card className="text-left bg-background shadow-lg text-foreground">
               <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-headline">
                  <Heart className="h-6 w-6 text-accent" />
                  Donate Securely
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  Donate to: <span className='font-semibold'>Right Focus Crew Intl</span>
                </p>
                <p className="text-sm">
                  Bank: <span className='font-semibold'>Zenith Bank Plc</span>
                </p>
                <p className="text-sm">
                  Account Number: <span className="font-bold text-base tracking-wider">1016055464</span>
                </p>
              </CardContent>
            </Card>
            <Button asChild size="lg" className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10">
              <Link href="/contact">Donate Now</Link>
            </Button>
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
