"use strict";

const Model = require("./model.schema");

module.exports = {
	name: "models",

	actions: {
		create: {
			params: {
				model_name: "string"
			},
			async handler(ctx) {
				const exists = await Model.findOne({ model_name: ctx.params.model_name });
				if (exists) return { msg: "Model already exists" };

				const model = await Model.create(ctx.params);
				return model;
			}
		},

		list: {
			async handler() {
				return await Model.find();
			}
		}
	}
};
