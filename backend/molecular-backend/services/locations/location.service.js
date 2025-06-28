// services/locations/location.service.js
"use strict";

const { model } = require("mongoose");
const LocationModel = require("./location.schema");
const locationSchema = require("./location.schema");

module.exports = {
	name: "locations",
    model: locationSchema,
	actions: {
		create: {
			params: {
				location_name: "string",
				location_code: "string",
				location_latitude: "number",
				location_longitude: "number",
			},
			async handler(ctx) {
				const exists = await LocationModel.findOne({ location_name: ctx.params.location_name });
				if (exists) {
                    ctx.meta.$statusCode = 400;
					return { msg: "Location already exists" };
				}
				const location = await LocationModel.create(ctx.params);
                ctx.meta.$statusCode = 201;
				return location;
			},
		},

		list: {
			async handler() {
				return await LocationModel.find();
			},
		},
	},
};
