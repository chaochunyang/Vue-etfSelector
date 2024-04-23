export default async function FindByETFID(model, id) {
  try {
    const result = await model.find({ etfID: id });

    // 如果查無資料時，回傳所有key並給予無資料值
    if (result.length === 0) {
      const empObj = {};

      // 取得model的所有屬性並回傳無資料
      const modelProps = Object.keys(model.schema.paths);
      
      modelProps.forEach((prop) => {
        empObj[prop] = "目前尚無資料";
      });

      return [empObj];
    }

    return result;
  } catch (error) {
    console.error("Error finding document by ID:", error);
    return null;
  }
}
