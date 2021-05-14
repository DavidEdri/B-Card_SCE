import { RequestHandler } from "express";
import Card from "../../models/Card";
import { functions as utilsFunctions } from "../../utils";

const { errorHandler } = utilsFunctions;

const getByHandle: RequestHandler = async (req, res) => {
  const { handle } = req.params;
  try {
    const cardRecord = await Card.findOnePopulated({ handle });

    if (!cardRecord)
      return res.status(400).json({ msg: "לא קיים כרטיס בקישור זה" });

    return res.status(200).json(cardRecord);
  } catch (error) {
    const { json, status } = errorHandler(error, req);
    return res.status(status).json(json);
  }
};

export default {
  getByHandle,
};
