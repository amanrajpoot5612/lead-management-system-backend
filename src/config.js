import dotenv from "dotenv";
dotenv.config();

// mongodb config
const mongodb_uri = process.env.MONGODB_URI;

export { mongodb_uri };

const frontend_uri = process.env.FRONTEND_URI;

console.log("FRONTEND URI : ", frontend_uri)

export { frontend_uri }