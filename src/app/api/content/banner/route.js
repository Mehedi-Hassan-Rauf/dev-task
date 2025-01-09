import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Banner from "@/models/Banner";

export async function GET() {
  try {
    await connectDB();
    let banner = await Banner.findOne();

    if (!banner) {
      banner = await Banner.create({
        heroTitle: {
          firstLine: {
            word1: "Crafting",
            word2: "Digital",
          },
          secondLine: "Experiences",
        },
        stats: {
          number: "20",
          text: "Years on the market",
        },
        description:
          "We build engaging websites, brands & innovative e-commerce solutions.",
        button: {
          text: "Case Studies",
        },
      });
    }

    return NextResponse.json({ content: banner }, { status: 200 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch banner content" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const body = await request.json();

    let banner = await Banner.findOne();
    if (banner) {
      banner.set(body.content);
      await banner.save();
    } else {
      banner = await Banner.create(body.content);
    }

    return NextResponse.json(
      { message: "Banner content updated successfully", content: banner },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to update banner content" },
      { status: 500 }
    );
  }
}
