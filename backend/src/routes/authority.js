import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { authorityId, password, role } = req.body;

  const sql = `
    SELECT * FROM authorities 
    WHERE authority_id = ? AND password = ? AND role = ?
  `;

  db.query(sql, [authorityId, password, role], (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      success: true,
      message: "Login successful",
    });
  });
});

export default router;
