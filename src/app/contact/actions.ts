
"use server";

import { z } from "zod";

// IMPORTANT: Replace this with your actual Formspark form ID
const FORMSPARK_FORM_ID = "hkMYQ0qsJ";
const formsparkUrl = `https://submit-form.com/${FORMSPARK_FORM_ID}`;

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(3, "Subject is too short."),
  message: z.string().min(10, "Message is too short."),
});

export type State = {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your entries.",
      success: false,
    };
  }

  // Ensure you have replaced YOUR_FORMSPARK_FORM_ID
  if (FORMSPARK_FORM_ID === "YOUR_FORMSPARK_FORM_ID") {
    return {
        message: "Server action is not configured. Please add Formspark ID.",
        success: false,
    }
  }


  try {
    const response = await fetch(formsparkUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });

    if (!response.ok) {
      // This is the error you are seeing. It means Formspark rejected the submission.
      // The most common cause is an incorrect Form ID.
      throw new Error("Failed to submit form. Please try again later.");
    }

    return {
      message: "Thank you for your message! We will get back to you shortly.",
      success: true,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    return {
      message: errorMessage,
      success: false,
    };
  }
}
