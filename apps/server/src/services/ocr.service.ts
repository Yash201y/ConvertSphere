import Tesseract from "tesseract.js";

export async function extractText(imagePath: string) {
  const result = await Tesseract.recognize(imagePath, "eng");

  return result.data.text;
}