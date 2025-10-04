"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import React from 'react';

export function ContactForm() {
  // The thank you page can be customized. For now, it redirects back to the contact page.
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const thankYouUrl = `${siteUrl}/contact`;

  return (
    <form 
      action="https://formsubmit.co/info@stevuthtech.com" 
      method="POST" 
      className="space-y-6"
    >
      {/* FormSubmit fields */}
      <input type="hidden" name="_next" value={thankYouUrl} />
      <input type="hidden" name="_captcha" value="false" /> 
      <input type="hidden" name="_template" value="table" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="your@email.com" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" placeholder="Inquiry about..." required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message here..." rows={6} required />
      </div>
      <div>
         <Button type="submit" className="bg-accent hover:bg-accent/90">
            Send Message
         </Button>
      </div>
    </form>
  );
}
