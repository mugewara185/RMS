"use strict";

const LevelTypeModel = require("./leveltypes.schema");

module.exports = {
	name: "leveltypes",

	actions: {
		create: {
			params: {
				level_type_name: "string",
				level_type_code: "string"
			},
			async handler(ctx) {
				const exists = await LevelTypeModel.findOne({ level_type_code: ctx.params.level_type_code });
				if (exists) return { msg: "LevelType already exists" };
				return await LevelTypeModel.create(ctx.params);
			}
		},

		list: {
			async handler() {
				return await LevelTypeModel.find();
			}
		}
	}
};
