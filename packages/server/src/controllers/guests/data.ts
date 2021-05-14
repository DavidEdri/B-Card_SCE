import { RequestHandler } from "express";
import City from "../../models/City";
import JobTitle from "../../models/JobTitle";
import { functions as utilsFunctions } from "../../utils";

const { errorHandler } = utilsFunctions;

const getCities: RequestHandler = async (req, res) => {
  try {
    const cities = await City.find();

    return res.status(200).json(cities);
  } catch (error) {
    const { json, status } = errorHandler(error, req);
    return res.status(status).json(json);
  }
};

const getJobTitles: RequestHandler = async (req, res) => {
  try {
    const jobTitles = await JobTitle.find();

    return res.status(200).json(jobTitles);
  } catch (error) {
    const { json, status } = errorHandler(error, req);
    return res.status(status).json(json);
  }
};

export default {
  getCities,
  getJobTitles,
};
