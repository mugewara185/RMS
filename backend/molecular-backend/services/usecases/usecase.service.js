"use strict";

const UseCaseModel = require("./usecase.schema");

module.exports = {
	name: "usecases",

	actions: {
		create: {
			params: {
				level_use_case: "string",
				level_use_code: "string"
			},
			async handler(ctx) {
				const exists = await UseCaseModel.findOne({ level_use_case: ctx.params.level_use_case });
				if (exists) return { msg: "Use Case already exists" };

				const useCase = await UseCaseModel.create(ctx.params);
				return useCase;
			},
		},

		list: {
			async handler() {
				return await UseCaseModel.find();
			},
		},
	},
};
