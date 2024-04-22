import { readBody } from 'h3'; // Import useBody if not already imported
import FindByETFID from "../util/FindByID";
import dbModels from "../models/etfSelectorModels";
import CalculateIRR from "../util/CalculateIRR"

const { ETFPrice } = dbModels;
const newArr = [];

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const etfID = body.etfID; 

        if (!etfID) {
            throw new Error("ETFPrice: ETF ID is required");
        }

        const data = await FindByETFID(ETFPrice, etfID);

        data.forEach(element => {
            newArr.push({x:element.date, y:element.close})
        });
        // console.log(newArr)
        const calculated = CalculateIRR(newArr)
        return calculated;
    } catch (error) {
        console.error('Error in components:', error);
        return { error: error.message };
    }
});
