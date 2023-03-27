import { query } from "express";
import * as Postservice from "../services/post";

//get all post
export const getPost = async (req, res) => {
  try {
    const response = await Postservice.getPostService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at post controller:" + error,
    });
  }
};

//get post limit

export const getPostsLimit = async (req, res) => {
  const { page, ...query } = req.query;
  try {
    const response = await Postservice.getPostLimitService(page, query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at post controller:" + error,
    });
  }
};
