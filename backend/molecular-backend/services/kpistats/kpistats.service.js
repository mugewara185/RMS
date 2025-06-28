"use strict";

const KpiStatModel = require("./kpistats.schema");
const mongoose = require("mongoose");

module.exports = {
	name: "kpistats",

	actions: {
		push: {
			rest: "POST /push",
			params: {
				data: { type: "any" } // skip strict schema here
			},
			async handler(ctx) {
				try {
					const { data } = ctx.params;

					// Manually validate the structure
					const isArray = Array.isArray(data);
					const isValid = isArray
						? data.every(item => item.kpi_id && item.kpi_value !== undefined)
						: data.kpi_id && data.kpi_value !== undefined;

					if (!isValid) throw new Error("Invalid payload structure.");

					const result = isArray
						? await KpiStatModel.insertMany(data)
						: await KpiStatModel.create(data);

					return {
						message: isArray ? "Bulk insert successful" : "insert successful",
						count: isArray ? result.length : 1,
						result
					};
				} catch (err) {
					console.error("⚠️ Error in kpistats.push:", err.message);
					throw err;
				}
			}
		},

		list: {
			rest: "GET /list",
			async handler() {
				return await KpiStatModel.find().populate("kpi_id");
			}
		},

		getByKpi: {
			rest: "GET /:kpi_id",
			async handler(ctx) {
				return await KpiStatModel.find({ kpi_id: ctx.params.kpi_id });
			}
		},

        latestByKpi:{
            rest:"GET /kpi/:kpi_id/latest",
            async handler(ctx){
                return await KpiStatModel.findOne({kpi_id:ctx.params.kpi_id}).sort({timestamp:-1});
            }
        },

        summaryByKPI: {
            rest: "GET /kpi/:kpi_id/summary",
            async handler(ctx) {
              const summary = await KpiStatModel.aggregate([
                { $match: { kpi_id: new mongoose.Types.ObjectId(ctx.params.kpi_id) } },
                {
                  $group: {
                    _id: "$kpi_id",
                    min: { $min: "$kpi_value" },
                    max: { $max: "$kpi_value" },
                    avg: { $avg: "$kpi_value" },
                    count: { $sum: 1 }
                  }
                }
              ]);
              return summary || {};
            }
          }
	}
};
