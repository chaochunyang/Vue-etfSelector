import { readBody } from 'h3'; // Import useBody if not already imported
import FindByETFID from "../util/FindByID";
import dbModels from "../models/etfSelectorModels";

const { Dividend } = dbModels;

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const etfID = body.etfID; 

        if (!etfID) {
            throw new Error("Dividend: ETF ID is required");
        }

        const data = await FindByETFID(Dividend, etfID);
        
        return data[0];
    } catch (error) {
        console.error('Error in dividend:', error);
        return { error: error.message };
    }
});
