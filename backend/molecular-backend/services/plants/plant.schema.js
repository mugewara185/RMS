// services/plants/plant.schema.js
const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  plant_name: { type: String, required: true },
  plant_code: { type: String, required: true },
  plant_latitude: { type: Number },
  plant_longitude: { type: Number },
  location_id: { type: mongoose.Schema.Types.ObjectId, ref: "locations" },
  country_id: { type: mongoose.Schema.Types.ObjectId, ref: "countries" }
});

module.exports = mongoose.model("plants", plantSchema);
