import mongoose from "mongoose";

const etfname = new mongoose.Schema({
  etfID: String,
  etfName: String,
});

const ETFName = mongoose.model("Etfname", etfname, "etfname");

const components = new mongoose.Schema({
  date: String,
  etfID: String,
  ticker: String,
  cpName: String,
  weight: String,
});

const Components = mongoose.model("Components", components, "components");

const dividend = new mongoose.Schema({
  etfID: String,
  etfName: String,
  dividend: String,
  dividendRate: String,
  dividend2022: String,
  dividend2021: String,
  dividend2020: String,
  dividend2019: String,
  dividend2018: String,
  times: String,
});

const Dividend = mongoose.model("Dividend", dividend, "dividend");

const etfoperate = new mongoose.Schema({
  etfID: String,
  etfName: String,
  asset: String,
  dividendRate: String,
  IRR: String,
  fee: String,
  benefitPeople: String,
  years: String,
});

const ETFOperate = mongoose.model("Etfoperate", etfoperate, "etfoperate");

const etfprice = new mongoose.Schema({
  date: String,
  etfID: String,
  tradingVolume: String,
  tradingMoney: String,
  open: String,
  max: String,
  min: String,
  close: String,
  spread: String,
  tradingTurnOver: String,
});

const ETFPrice = mongoose.model("Etfprice", etfprice, "etfprice");

const netvalue = new mongoose.Schema({
  etfID: String,
  etfName: String,
  netValue: String,
  price: String,
  netValueGap: String,
  transaction: String,
  indexTarget: String,
});

const NetValue = mongoose.model("Netvalue", netvalue, "netvalue");

export default {
  Components,
  Dividend,
  ETFOperate,
  ETFPrice,
  NetValue,
  ETFName,
};
