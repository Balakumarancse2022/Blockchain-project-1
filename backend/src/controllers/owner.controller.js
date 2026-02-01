import PattaRequest from "../models/PattaRequest.model.js";
import Land from "../models/Land.model.js";

export const submitPattaRequest = async (req, res) => {
  try {
    const request = await PattaRequest.create({
      ...req.body,
      ownerId: req.user.id
    });

    res.status(201).json({
      message: "Patta request submitted",
      data: request
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getMyLands = async (req, res) => {
  const lands = await Land.find({ ownerId: req.user.id });
  res.json(lands);
};
