import PattaRequest from "../models/PattaRequest.model.js";

export const getAllPattaRequests = async (req, res) => {
  const requests = await PattaRequest.find().sort({ submittedAt: -1 });
  res.json(requests);
};

export const approvePatta = async (req, res) => {
  const request = await PattaRequest.findByIdAndUpdate(
    req.params.id,
    { status: "APPROVED" },
    { new: true }
  );

  res.json({
    message: "Patta approved successfully",
    data: request,
  });
};

export const rejectPatta = async (req, res) => {
  const request = await PattaRequest.findByIdAndUpdate(
    req.params.id,
    { status: "REJECTED" },
    { new: true }
  );

  res.json({
    message: "Patta rejected",
    data: request,
  });
};
