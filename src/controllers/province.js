import * as service from "../services/province";

export const getProvince = async (req, res) => {
  try {
    const response = await service.getProvinceService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at province controller:" + error,
    });
  }
};
