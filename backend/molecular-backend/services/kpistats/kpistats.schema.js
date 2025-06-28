const mongoose = require("mongoose");

const kpiStatSchema = new mongoose.Schema({
  kpi_id: { type: mongoose.Schema.Types.ObjectId, ref: "kpis", required: true },
  kpi_value: { type: Number, required: true },
  kpi_status: { type: String }, // e.g., "Healthy", "Warning", "Critical"
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.models.kpistats || mongoose.model("kpistats", kpiStatSchema);
