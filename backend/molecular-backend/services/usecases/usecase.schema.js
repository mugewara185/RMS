const mongoose = require("mongoose");

const useCaseSchema = new mongoose.Schema({
	level_use_case: { type: String, required: true },
	level_use_code: { type: String, required: true },
	litmus_use_code: { type: String },
	routes_use_code: { type: String },
	use_case_alias: { type: String }
});

module.exports = mongoose.model("usecases", useCaseSchema);
