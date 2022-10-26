"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const morgan_1 = __importDefault(require("morgan"));
const main_1 = __importDefault(require("./routes/main"));
const router = (0, express_1.default)();
router.use((0, morgan_1.default)("dev"));
router.use(express_1.default.urlencoded({ extended: false }));
router.use(express_1.default.json());
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "origin, X-Requested-With,Content-Type,Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
        return res.status(200).json({});
    }
    next();
});
router.use("/", main_1.default);
router.use((req, res, next) => {
    const error = new Error("not found");
    return res.status(404).json({
        message: error.message,
    });
});
const httpServer = http_1.default.createServer(router);
const port = process.env.PORT || 3000;
httpServer.listen(port, () => console.log(`App listening on PORT ${port}`));
