import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Work from "@/models/Work";

export async function GET() {
  try {
    await connectDB();
    let work = await Work.findOne();

    if (!work) {
      work = await Work.create({
        cases: [
          {
            title: "Project Title 1",
            image: "/path/to/image1.jpg",
            link: "https://example1.com",
            isLatest: true,
            tags: ["Web Design", "Development"],
          },
        ],
      });
    }

    return NextResponse.json({ content: work }, { status: 200 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch work content" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const body = await request.json();

    let work = await Work.findOne();
    if (work) {
      work.set(body.content);
      await work.save();
    } else {
      work = await Work.create(body.content);
    }

    return NextResponse.json(
      { message: "Work content updated successfully", content: work },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to update work content" },
      { status: 500 }
    );
  }
}
