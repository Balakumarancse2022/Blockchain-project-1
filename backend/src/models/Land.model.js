import mongoose from "mongoose";

const landSchema = new mongoose.Schema({
  landId: {
    type: String,
    required: true,
    unique: true
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  area: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Land", landSchema);
