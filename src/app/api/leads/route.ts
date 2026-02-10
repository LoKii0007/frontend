import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { z } from "zod";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// HTML escape function to prevent XSS in email content
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Secure validation schema
const leadSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .trim()
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .trim()
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .min(1, "Email is required")
    .max(255, "Email must be less than 255 characters")
    .email("Invalid email format")
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[\d\s\-\+\(\)]+$/, "Phone number contains invalid characters")
    .trim()
    .optional()
    .or(z.literal("")),
  projectDetails: z
    .string()
    .min(10, "Project details must be at least 10 characters")
    .max(5000, "Project details must be less than 5000 characters")
    .trim(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate and sanitize input
    const validationResult = leadSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((err: z.ZodIssue) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return NextResponse.json(
        {
          error: "Validation failed",
          details: errors,
        },
        { status: 400 }
      );
    }

    const { name, company, email, phone, projectDetails } = validationResult.data;

    const { error } = await supabase.from("leads").insert([
      {
        name,
        company,
        email,
        phone,
        project_details: projectDetails,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save lead. Please try again." },
        { status: 500 }
      );
    }

    // Configure Nodemailer transport using Gmail (or another SMTP service)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toAddress =
      [process.env.CONTACT_RECIPIENT || process.env.SMTP_USER || "", "hello@zero1studio.xyz"];

    if (toAddress) {
      await transporter.sendMail({
        from: process.env.SMTP_USER || process.env.SMTP_FROM,
        to: toAddress,
        subject: "New Project Inquiry from Website",
        text: `
New project inquiry received:

Name: ${name}
Company: ${company || "-"}
Email: ${email}
Phone: ${phone || "-"}

Project details:
${projectDetails}
        `.trim(),
        html: `
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Company:</strong> ${company ? escapeHtml(company) : "-"}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "-"}</p>
          <h3>Project details</h3>
          <p>${escapeHtml(projectDetails).replace(/\n/g, "<br />")}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error in /api/leads:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

