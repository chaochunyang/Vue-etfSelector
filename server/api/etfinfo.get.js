import FindByETFID from "../util/FindByID";
import dbModels from "../models/etfSelectorModels";

const { Components } = dbModels;

export default defineEventHandler(async (event) => {
  try {
    const data = await FindByETFID(Components, "0050");

    return data;
  } catch (error) {
    console.error("Error in event handler:", error);
    
    return { error: error.message };
  }
});
