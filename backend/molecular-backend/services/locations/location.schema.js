// services/locations/location.schema.js
const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
	location_name: { type: String, required: true },
	location_code: { type: String, required: true },
	location_latitude: { type: Number, required: true },
	location_longitude: { type: Number, required: true },
	organization_id: { type: mongoose.Schema.Types.ObjectId, ref: "organizations" },
	country_id: { type: mongoose.Schema.Types.ObjectId, ref: "countries" },
	plants: [{ type: mongoose.Schema.Types.ObjectId, ref: "plants" }],
});

module.exports = mongoose.model("locations", locationSchema);
