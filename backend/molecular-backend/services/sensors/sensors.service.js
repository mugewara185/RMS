"use strict";

const SensorModel = require("./sensors.schema");

module.exports = {
	name: "sensors",

	actions: {
		create: {
			params: {
				sensor_name: "string",
				sensor_code: "string",
				device_id: "string"
			},
			async handler(ctx) {
				const exists = await SensorModel.findOne({ sensor_code: ctx.params.sensor_code });
				if (exists) return { msg: "Sensor already exists" };

				const sensor = await SensorModel.create(ctx.params);
				return sensor;
			},
		},

		list: {
			async handler() {
				return await SensorModel.find().populate("device_id");
			},
		},
	},
};
