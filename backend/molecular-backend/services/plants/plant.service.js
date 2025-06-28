"use strict";

const PlantModel = require("./plant.schema");

module.exports = {
    name: "plants",
    model:PlantModel,
	actions: {
		create: {
			params: {
				plant_name: "string",
				plant_code: "string",
				plant_latitude: "number",
				plant_longitude: "number",
				location_id: "string",
                country_id: "string"
			},
			async handler(ctx) {
				const exists = await PlantModel.findOne({ plant_name: ctx.params.plant_name });
				if (exists) {
					return { msg: "Plant already exists" };
				}
				const plant = await PlantModel.create(ctx.params);
				return plant;
			},
		},

		list: {
			async handler() {
				return await PlantModel.find().populate("location_id");
			},
		},

        getByLocation:{
            rest:"GET /location/:location_id",
            async handler(ctx){
                return await PlantModel.find({location_id:ctx.params.location_id});
            }
        }
	},
};
