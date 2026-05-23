export async function uploadFile(file: Express.Multer.File) {
    return {
      success: true,
      url: `/uploads/${file.filename}`
    };
  }
  