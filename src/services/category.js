import db from "../models";

//Get all category

export const getCategoriesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: true,
        attributes: ["code", "value"],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "Oke" : "Fail to get Categories.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
