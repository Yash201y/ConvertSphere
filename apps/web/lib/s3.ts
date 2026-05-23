import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "test",
    secretAccessKey: "test"
  }
});

export async function uploadToS3(file: File) {
  return {
    success: true,
    url: URL.createObjectURL(file),
    key: `${Date.now()}-${file.name}`
  };
}