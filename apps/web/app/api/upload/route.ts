import { NextRequest, NextResponse } from "next/server";
import { uploadToS3 } from "@/lib/s3";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const files = data.getAll("files") as File[];

  const uploads = await Promise.all(
    files.map(async (file) => {
      return uploadToS3(file);
    })
  );

  return NextResponse.json({ uploads });
}