const mongoose = require("mongoose");

const levelTypeSchema = new mongoose.Schema({
	level_type_name: { type: String, required: true },  // e.g. "Level 0 - Area"
	level_type_code: { type: String, required: true },  // e.g. "L0"
});

// module.exports =  mongoose.model("leveltypes", levelTypeSchema);
module.exports = mongoose.models.leveltypes || mongoose.model("leveltypes", levelTypeSchema);
