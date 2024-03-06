// server.js
const express = require("express");
const multer = require("multer");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadStorage = multer({ storage: storage });

// Single file
app.post("/upload_files", uploadStorage.single("recfile"), (req, res) => {
  console.log(req.files);
  return res.send("Multiple file");
});

app.listen(5000, () => {
  console.log(`Server started...`);
});
