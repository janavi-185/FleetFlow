import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import supabase from "./supabaseClient.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("FleetFlow backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// ---------------- VEHICLES ----------------

// Create vehicle
app.post("/vehicles", async (req, res) => {
  const { vehicle_name, license_plate, capacity_kg } = req.body;

  if (!vehicle_name || !license_plate || !capacity_kg) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { data, error } = await supabase
    .from("vehicles")
    .insert([{ vehicle_name, license_plate, capacity_kg }])
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
});

// Get all vehicles
app.get("/vehicles", async (req, res) => {
  const { data, error } = await supabase
    .from("vehicles")
    .select("*");

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
});
