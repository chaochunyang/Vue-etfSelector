import { readBody } from 'h3'; // Import useBody if not already imported
import FindByETFID from "../util/FindByID";
import dbModels from "../models/etfSelectorModels";

const { ETFOperate } = dbModels;

export default defineEventHandler(async (event) => {
    try {
        // Use useBody to parse the request body
        const body = await readBody(event);
        // console.log(body)
        const etfID = body.etfID; // Assuming the POST body contains an 'etfID' field

        if (!etfID) {
            throw new Error("Dividend: ETF ID is required");
        }

        const data = await FindByETFID(ETFOperate, etfID);
        // console.log(data[0])
        return data[0];
    } catch (error) {
        console.error('Error in event handler:', error);
        return { error: error.message };
    }
});
