import { Router } from "express";
import pool from "../db/conn";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// router.get('/', (req,res) => {
//     console.log("Hello World")
// })

// router.get('/example', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM blogs')
//         res.json(result.rows)
//     } catch (error) {
//         console.error(error)
//     }
// })

router.get("/blog/:cat", async (req, res) => {
  try {
    const { cat } = req.params;
    let result;

    if (cat !== "all") {
      // Use parameterized query to avoid SQL injection
      result = await pool.query(`SELECT * FROM blogs WHERE category = $1`, [
        cat,
      ]);
    } else {
      result = await pool.query(`SELECT * FROM blogs`);
    }

    res.json({ data: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/blogbyid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mustNumber = /^[0-9]+$/;
    if (!mustNumber.test(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    const result = await pool.query(`SELECT * FROM blogs WHERE id = $1`, [id]);
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/blog",upload.single("file"), async (req, res) => {
  try {
    const { title, post, category } = req.body;
    const image = req.file?.path

    const result = await pool.query(
      `INSERT INTO blogs (title, image, post, category) VALUES ($1, $2, $3, $4)`,
      [title, image, post, category]
    );
    res.json({ message: "Added new blog", desc: result.rowCount });
  } catch (error) {
    console.error(error);
  }
});

export default router;
