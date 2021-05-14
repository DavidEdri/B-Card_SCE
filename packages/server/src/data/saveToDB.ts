import City from "../models/City";
import JobTitle from "../models/JobTitle";
import { logger } from "../utils";
import cities from "./cities";
import jobs from "./jobs";

export const saveCitiesAndJobs = async () => {
  try {
    await Promise.all(jobs.map((name) => new JobTitle({ name }).save()));
    await Promise.all(
      cities.map((city) => new City({ name: city.name }).save()),
    );
  } catch (error) {
    logger.logError(`saveCitiesAnd jons:${error}`);
  }
};
