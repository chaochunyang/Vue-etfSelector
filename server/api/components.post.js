import { readBody } from "h3"; // Import useBody if not already imported
import FindByETFID from "../util/FindByID";
import dbModels from "../models/etfSelectorModels";

const { Components } = dbModels;

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const etfID = body.etfID;

    if (!etfID) {
      throw new Error("components: ETF ID is required");
    }

    const data = await FindByETFID(Components, etfID);

    return data;
  } catch (error) {
    console.error("Error in components:", error);
    return { error: error.message };
  }
});
