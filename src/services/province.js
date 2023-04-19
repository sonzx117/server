import db from "../models";

//Get all price

export const getProvinceService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Province.findAll({
        raw: true,
        attributes: ["code", "value"],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "Oke" : "Fail to get Province.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
