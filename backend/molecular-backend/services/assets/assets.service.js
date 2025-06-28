// services/assets/assets.service.js
"use strict";

const AssetModel = require("./assets.schema");

module.exports = {
  name: "assets",

  actions: {
    create: {
      params: {
        asset_name: "string",
        asset_code: "string",
        plant_id: "string",
        level_type_id: "string",
        use_case_id: "string",
        parent_asset_id: { type: "string", optional: true }
      },
      async handler(ctx) {
        const exists = await AssetModel.findOne({ asset_code: ctx.params.asset_code });
        if (exists) return { msg: "Asset already exists" };

        const asset = await AssetModel.create(ctx.params);
        return asset;
      }
    },

    list: {
      async handler() {
        return await AssetModel.find()
          .populate("plant_id level_type_id parent_asset_id use_case_id devices");
      }
    },

    getByPlant: {
      rest: "GET /plant/:plant_id",
      async handler(ctx) {
        return await AssetModel.find({ plant_id: ctx.params.plant_id });
      }
    }
  }
};
