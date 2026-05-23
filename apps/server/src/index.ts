import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import testRoutes from "./routes/test.routes";
import conversionRoutes from "./routes/conversion.routes";

const app = express();

const PORT = process.env.PORT || 4000;

/* ----------------------------- MIDDLEWARE ----------------------------- */
app.use("/api/test", testRoutes);
app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
  })
);

/* ------------------------------- ROUTES ------------------------------- */

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "ConvertSphere API Running 🚀"
  });
});

app.use(
  "/api/conversion",
  conversionRoutes
);

/* ------------------------ DOWNLOAD CONVERTED PDF ---------------------- */

app.get("/converted/:file", (req, res) => {
  const filePath = path.join(
    __dirname,
    "../converted",
    req.params.file
  );

  return res.download(filePath);
});

/* ----------------------------- ERROR HANDLER -------------------------- */

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);

  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

/* ------------------------------ START APP ----------------------------- */

app.listen(PORT, () => {
  console.log(
    `🚀 ConvertSphere Backend Running on http://localhost:${PORT}`
  );
});