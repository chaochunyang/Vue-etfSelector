import { readBody } from "h3"; // Import useBody if not already imported
import FindByETFID from "../util/FindByID";
import dbModels from "../models/etfSelectorModels";

const { ETFPrice } = dbModels;

export default defineEventHandler(async (event) => {
  const newArr = [];
  try {
    const body = await readBody(event);
    const etfID = body.etfID;

    if (!etfID) {
      throw new Error("ETFPrice: ETF ID is required");
    }

    const data = await FindByETFID(ETFPrice, etfID);

    data.forEach((element) => {
      if (element.close !== "0") {
        newArr.push({ x: element.date, y: element.close });
      }
    });

    const newData = [{ x: newArr[0].x, y: 0 }]; // 第一天報酬率為 0
    const baseValue = newArr[0].y; // 第一天的資料作為基準點

    for (let i = 1; i < newArr.length; i++) {
      const dailyReturn = await (
        ((newArr[i].y - baseValue) / baseValue) *
        100
      ).toFixed(1); // 計算報酬率，並取小數點一位
      newData.push({ x: newArr[i].x, y: parseFloat(dailyReturn) });
    }

    return newData;
  } catch (error) {
    console.error("Error in components:", error);
    return { error: error.message };
  }
});
