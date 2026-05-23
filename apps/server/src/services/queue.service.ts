import { Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL!);

export const conversionQueue = new Queue("conversion", {
  connection,
});

export async function addConversionJob(file: any) {
  return conversionQueue.add("convert", {
    file,
  });
}