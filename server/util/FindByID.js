export default async function FindByETFID(model, id) {
  try {
      const result = await model.find({ 'etfID': id })
      return result;
  } catch (error) {
      console.error('Error finding document by ID:', error);
      return null; // Or handle the error as needed
  }
}
