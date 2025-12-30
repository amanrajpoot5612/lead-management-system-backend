import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    source: {
      type: String,
      required: true,
      trim: true,
    },

    leadInfo: {
      fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
      },

      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index: true,
        validate: {
          validator: (v) => /^\S+@\S+\.\S+$/.test(v),
          message: "Invalid email format",
        },
      },

      phone: {
        type: String,
        required: true,
        trim: true,
        validate: {
          validator: (v) => /^[+]?[0-9]{10,15}$/.test(v),
          message: "Invalid phone number",
        },
      },
    },

    submissionDetails: {
      date: {
        type: String,
      },
      time: {
        type: String,
      },
      timestamp: {
        type: Date,
        required: true,
      },
    },

    employmentInfo: {
      position: String,
      workType: String,
      company: String,
      experienceYears: Number,
    },

    tracking: {
      pageUrl: String,
      referrer: String,
      utm_source: String,
      ipAddress: String,
    },
    message: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "converted", "cancelled"],
      default: "new",
      index: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

export default mongoose.model("Lead", LeadSchema);
