"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const main_1 = __importDefault(require("../controllers/main"));
const router = express_1.default.Router();
router.get("/pairs", main_1.default.getPairs);
router.get("/tickers", main_1.default.getTickers);
router.get("/orderbook", main_1.default.getOrderbook);
router.get("/historical_trades", main_1.default.getHistoricalTrades);
router.get("/assets", main_1.default.getAssets);
module.exports = router;
