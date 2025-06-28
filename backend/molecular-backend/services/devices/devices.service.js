"use strict";

const DeviceModel = require("./devices.schema");

module.exports = {
	name: "devices",

	actions: {
		create: {
			params: {
				device_name: "string",
				device_code: "string",
				asset_id: "string",
				model_id: { type: "string", optional: true },
			},
			async handler(ctx) {
				const exists = await DeviceModel.findOne({ device_code: ctx.params.device_code });
				if (exists) return { msg: "Device already exists" };

				const device = await DeviceModel.create(ctx.params);
				return device;
			},
		},

		list: {
			async handler() {
				return await DeviceModel.find().populate("asset_id model_id");
			},
		},
	},
};
