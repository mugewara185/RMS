const mongoose = require("mongoose");

const kpiSchema = new mongoose.Schema({
	kpi_name: { type: String, required: true },
	kpi_code: { type: String, required: true, unique: true },
	device_id: { type: mongoose.Schema.Types.ObjectId, ref: "devices", required: true },
	usecase_id: { type: mongoose.Schema.Types.ObjectId, ref: "usecases", required: true },
	kpi_unit: { type: String },
	kpi_type: { type: String }, // e.g., "Health", "Performance", etc.
	kpi_threshold: { type: Number }, // optional
	kpi_display_name: { type: String } // optional
});

module.exports = mongoose.models.kpis || mongoose.model("kpis", kpiSchema);
