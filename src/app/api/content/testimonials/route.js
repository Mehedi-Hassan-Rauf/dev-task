import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  try {
    await connectDB();
    let testimonial = await Testimonial.findOne();

    if (!testimonial) {
      testimonial = await Testimonial.create({
        items: [
          {
            quote: "Sample testimonial quote 1",
            author: "John Doe",
            company: "Company A",
          },
        ],
      });
    }

    return NextResponse.json({ content: testimonial }, { status: 200 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonial content" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const body = await request.json();

    let testimonial = await Testimonial.findOne();
    if (testimonial) {
      testimonial.set(body.content);
      await testimonial.save();
    } else {
      testimonial = await Testimonial.create(body.content);
    }

    return NextResponse.json(
      {
        message: "Testimonial content updated successfully",
        content: testimonial,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to update testimonial content" },
      { status: 500 }
    );
  }
}
