import { readBody } from "h3"; 
import FindByETFID from "../util/FindByID";
import dbModels from "../models/etfSelectorModels";

const { NetValue } = dbModels;

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const etfID = body.etfID; 

    if (!etfID) {
      throw new Error("Net value: ETF ID is required");
    }

    const data = await FindByETFID(NetValue, etfID);
    
    return data[0];
  } catch (error) {
    console.error("Error in event handler:", error);
    return { error: error.message };
  }
});
