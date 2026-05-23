import fs from "fs";
import libre from "libreoffice-convert";

export async function convertToPDF(inputPath: string, outputPath: string) {
  const file = fs.readFileSync(inputPath);

  const pdfBuffer = await libre.convertAsync(
    file,
    ".pdf",
    undefined
  );

  fs.writeFileSync(outputPath, pdfBuffer);

  return outputPath;
}