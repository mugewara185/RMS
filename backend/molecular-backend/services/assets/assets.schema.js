// services/assets/assets.schema.js
const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  asset_name: { type: String, required: true },
  asset_code: { type: String, required: true, unique: true },
  plant_id: { type: mongoose.Schema.Types.ObjectId, ref: "plants", required: true },
  level_type_id: { type: mongoose.Schema.Types.ObjectId, ref: "leveltypes", required: true },
  parent_asset_id: { type: mongoose.Schema.Types.ObjectId, ref: "assets", default: null },
  use_case_id: { type: mongoose.Schema.Types.ObjectId, ref: "usecases", required: true },
  devices: [{ type: mongoose.Schema.Types.ObjectId, ref: "devices" }]
});

module.exports = mongoose.model("assets", assetSchema);
