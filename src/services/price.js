import db from "../models";

//Get all price

export const getPricesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Price.findAll({
        raw: true,
        attributes: ["code", "value"],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "Oke" : "Fail to get Prices.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
