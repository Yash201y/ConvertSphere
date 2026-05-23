"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export default function UploadZone() {
  const [uploading, setUploading] = useState(false);

  const [message, setMessage] = useState("");

  const [pdfUrl, setPdfUrl] = useState("");

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) return;

      try {
        setUploading(true);

        setMessage("Converting...");

        setPdfUrl("");

        const formData = new FormData();

        formData.append("file", file);

        const response = await axios.post(
          "http://localhost:4000/api/conversion/upload",
          formData
        );

        setMessage("Conversion successful ✅");

        setPdfUrl(response.data.pdfUrl);
      } catch (error) {
        console.error(error);

        setMessage("Conversion failed ❌");
      } finally {
        setUploading(false);
      }
    },
    []
  );

  const {
    getRootProps,
    getInputProps,
    open,
    isDragActive
  } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* DROP ZONE */}
      <div
        {...getRootProps()}
        className="
          border-2 border-dashed border-zinc-700
          rounded-3xl p-20 text-center
          bg-white/5 backdrop-blur-xl
          transition hover:border-indigo-500
        "
      >
        <input {...getInputProps()} />

        {isDragActive ? (
          <p className="text-2xl font-bold">
            Drop files here...
          </p>
        ) : (
          <>
            <p className="text-3xl font-bold">
              Drag & Drop Files
            </p>

            <p className="text-zinc-400 mt-4">
              DOCX, PPTX, XLSX, TXT, Images
            </p>
          </>
        )}
      </div>

      {/* UPLOAD BUTTON */}
      <div className="flex justify-center mt-8">
        <button
          onClick={open}
          className="
            px-8 py-4 rounded-2xl
            bg-indigo-600 hover:bg-indigo-500
            transition text-white font-semibold
          "
        >
          Upload Documents
        </button>
      </div>

      {/* STATUS */}
      {message && (
        <div className="text-center mt-6">
          <p>{message}</p>
        </div>
      )}

      {/* DOWNLOAD BUTTON */}
      {pdfUrl && (
        <div className="flex justify-center mt-8">
          <a
            href={pdfUrl}
            download="converted.pdf"
            className="
              px-8 py-4 rounded-2xl
              bg-emerald-600 hover:bg-emerald-500
              transition text-white font-semibold
            "
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
}