import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message, phone } = body;

    // You can later connect:
    // - Google Sheets
    // - Email (Nodemailer)
    // - CRM (HubSpot)

    console.log("New Lead:", body);

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}