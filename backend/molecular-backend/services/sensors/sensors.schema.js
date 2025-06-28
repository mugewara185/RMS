const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
	sensor_name: { type: String, required: true },
	sensor_code: { type: String, required: true, unique: true },
	device_id: { type: mongoose.Schema.Types.ObjectId, ref: "devices", required: true }
});

module.exports = mongoose.model("sensors", sensorSchema);
