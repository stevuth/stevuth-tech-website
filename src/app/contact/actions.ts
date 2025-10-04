"use server";

import { z } from "zod";
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/ContactFormEmail';
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@stevuthtech.com";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type State = {
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  message: string;
  success: boolean;
};

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: `Stevuth Tech Contact Form <onboarding@resend.dev>`,
      to: [toEmail],
      subject: `New Message: ${subject}`,
      reply_to: email,
      react: ContactFormEmail({ name, email, subject, message }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return {
        message: `We're sorry, but there was an error sending your message. Error: ${error.message}`,
        success: false,
      };
    }

    return {
      message: "Thank you for your message! We will get back to you shortly.",
      success: true,
    };

  } catch (error) {
    console.error("Email Sending Error:", error);
    return {
      message: "We're sorry, but there was a server error. Please try again later.",
      success: false,
    };
  }
}
