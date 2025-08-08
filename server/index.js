import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//general setup
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/health", (_req, res) => res.status(200).send("OK"));
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

if (!process.env.CONNECTION_URL) {
  console.error("❌ Missing CONNECTION_URL env var");
}

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`✅ API listening on http://0.0.0.0:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Mongo connection error:", error?.message || error);
    process.exit(1); // fail fast so Render restarts and shows the error
  });

// mongoose
//   .connect(process.env.CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     app.listen(PORT, "0.0.0.0", () =>
//       console.log(`API listening on http://0.0.0.0:`, PORT),
//     ),
//   )
//   .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
