import dbModels from "../models/etfSelectorModels";

const { ETFName } = dbModels;

export default defineEventHandler(async (event) => {

    try {
        const data = await ETFName.find()
        return data;
    } catch (error) {
        console.error('Error in event handler:', error);
        return { error: error.message };
    }
});
