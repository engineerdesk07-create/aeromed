const express = require("express");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// DEMONSTRATION DATA ONLY. These are not real hospitals or live bed counts.
const hospitals = [
  {
    id: 1,
    name: "AeroMed Demo Hospital",
    city: "Demo City",
    bedsAvailable: 12,
    dataStatus: "SIMULATED"
  },
  {
    id: 2,
    name: "City Care Demo Hospital",
    city: "Demo City",
    bedsAvailable: 8,
    dataStatus: "SIMULATED"
  }
];

app.get("/", (_req, res) => {
  res.type("text").send(
    "AeroMed demo backend is running. See /api/health and /api/hospitals."
  );
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    project: "AeroMed",
    mode: "academic-demo",
    liveHospitalIntegration: false,
    liveAmbulanceDispatch: false
  });
});

app.get("/api/hospitals", (_req, res) => {
  res.json({
    dataStatus: "SIMULATED DEMO DATA — NOT LIVE",
    count: hospitals.length,
    hospitals
  });
});

app.get("/api/hospitals/:id", (req, res) => {
  const id = Number(req.params.id);
  const hospital = hospitals.find((item) => item.id === id);

  if (!hospital) {
    return res.status(404).json({ error: "Demo hospital not found" });
  }

  return res.json({
    dataStatus: "SIMULATED DEMO DATA — NOT LIVE",
    hospital
  });
});

// Demonstrates an API workflow only. It does not contact any ambulance service.
app.post("/api/dispatch-demo", (req, res) => {
  const { hospitalId, caseReference } = req.body || {};
  const hospital = hospitals.find((item) => item.id === Number(hospitalId));

  if (!hospital) {
    return res.status(400).json({
      error: "Provide a valid demo hospitalId",
      example: { hospitalId: 1, caseReference: "DEMO-001" }
    });
  }

  return res.status(202).json({
    status: "SIMULATION_ONLY",
    message: "Demo dispatch request accepted for demonstration; no ambulance was contacted.",
    caseReference: String(caseReference || "DEMO-CASE").slice(0, 80),
    hospital: hospital.name,
    realDispatchPerformed: false
  });
});

app.use((err, _req, res, _next) => {
  console.error("Unhandled backend error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`AeroMed demo backend listening at http://localhost:${PORT}`);
  console.log("Reminder: hospital records and dispatch workflow are simulated.");
});
