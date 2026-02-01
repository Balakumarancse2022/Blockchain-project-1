import mongoose from "mongoose";

const pattaSchema = new mongoose.Schema({
  landId: {
    type: String,
    required: true
  },
  buyerName: {
    type: String,
    required: true
  },
  buyerAadhaar: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED"],
    default: "PENDING"
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("PattaRequest", pattaSchema);
