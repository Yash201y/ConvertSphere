import { PDFDocument } from "pdf-lib";
import fs from "fs";

export async function mergePDFs(paths: string[]) {
  const merged = await PDFDocument.create();

  for (const path of paths) {
    const pdfBytes = fs.readFileSync(path);
    const pdf = await PDFDocument.load(pdfBytes);

    const pages = await merged.copyPages(pdf, pdf.getPageIndices());

    pages.forEach((page) => merged.addPage(page));
  }

  return await merged.save();
}