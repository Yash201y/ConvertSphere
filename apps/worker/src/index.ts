import { Worker } from "bullmq";
import IORedis from "ioredis";
import libre from "libreoffice-convert";
import fs from "fs";

const connection = new IORedis(process.env.REDIS_URL!);

new Worker(
  "conversion",
  async (job) => {
    const file = job.data.file;

    const input = fs.readFileSync(file.path);

    const pdf = await libre.convertAsync(input, ".pdf", undefined);

    fs.writeFileSync(`output/${file.filename}.pdf`, pdf);

    return {
      success: true,
    };
  },
  { connection }
);