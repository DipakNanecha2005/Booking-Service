import "dotenv/config";

export const { NODE_ENV, PORT } = process.env;

const { SYNC_DB: SYNC_DB_STRING } = process.env;
export const SYNC_DB = SYNC_DB_STRING === "true";
