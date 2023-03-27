import db from "../models";

//Get all price

export const getAreasService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Area.findAll({
        raw: true,
        attributes: ["code", "value"],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "Oke" : "Fail to get Areas.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
