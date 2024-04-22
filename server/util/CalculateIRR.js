// 計算報酬率的函數
export default function CalculateReturns(data) {
    const returns = [{x:data[0].x,y:0}]; // 第一天報酬率為 0
    const baseValue = data[0].y; // 第一天的資料作為基準點
    
    for (let i = 1; i < data.length; i++) {
        const dailyReturn = (((data[i].y - baseValue) / baseValue) * 100).toFixed(1); // 計算報酬率，並取小數點一位
        returns.push({ x: data[i].x, y: parseFloat(dailyReturn) });
    }
    // console.log(returns)
    return returns;
}