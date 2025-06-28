"use strict";

const KpiModel = require("./kpis.schema");

module.exports = {
	name: "kpis",

	actions: {
        push: {
            rest: "POST /push",
            params: {
              data: {
                type: "array",
                items: {
                  type: "object",
                  props: {
                    kpi_name: "string",
                    kpi_code: "string",
                    device_id: "string",
                    usecase_id: "string",
                    kpi_unit: "string",
                    kpi_type: "string",
                    kpi_threshold: "number",
                    kpi_display_name: "string"
                  }
                }
              }
            },
            async handler(ctx) {
              try {
                const inserted = await KpiModel.insertMany(ctx.params.data); // access `data` here
                return inserted;
              } catch (err) {
                console.log("⚠️ error occurred:", err);
                throw new Error("Failed to insert KPIs.");
                ;
              }
            }
          },
		create: {
			rest: "POST /create",
			params: {
				kpi_name: "string",
				kpi_code: "string",
				device_id: "string",
				usecase_id: "string",
				kpi_unit: { type: "string", optional: true },
				kpi_type: { type: "string", optional: true },
				kpi_threshold: { type: "number", optional: true },
				kpi_display_name: { type: "string", optional: true }
			},
			async handler(ctx) {
                try{
				const exists = await KpiModel.findOne({ kpi_code: ctx.params.kpi_code });
				if (exists) return { msg: "KPI already exists" };

				const kpi = await KpiModel.insertMany(ctx.params);
				return kpi;
                }
                catch(err){
                    console.log('⚠️error occuered:',err)
                }
			}
		},

		list: {
			rest: "GET /list",
			async handler() {
				return await KpiModel.find().populate("device_id usecase_id").lean();
			}
		},

		getByDevice: {
			rest: "GET /device/:device_id",
			async handler(ctx) {
				return await KpiModel.find({ device_id: ctx.params.device_id });
			}
		},

		getByUsecase: {
			rest: "GET /usecase/:usecase_id",
			async handler(ctx) {
				return await KpiModel.find({ usecase_id: ctx.params.usecase_id });
			}
		},

		getByDeviceAndUsecase: {
			rest: "GET /:device_id/:usecase_id",
			async handler(ctx) {
				return await KpiModel.find({
					device_id: ctx.params.device_id,
					usecase_id: ctx.params.usecase_id
				});
			}
		}
	}
};
