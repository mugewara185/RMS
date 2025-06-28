const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
	device_name: { type: String, required: true },
	device_code: { type: String, required: true, unique: true },
	model_id: { type: mongoose.Schema.Types.ObjectId, ref: "models" },
	asset_id: { type: mongoose.Schema.Types.ObjectId, ref: "assets", required: true },
	sensors: [{ type: mongoose.Schema.Types.ObjectId, ref: "sensors" }],
});

module.exports = mongoose.model("devices", deviceSchema);
