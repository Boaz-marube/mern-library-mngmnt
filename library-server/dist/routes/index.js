"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = registerRoutes;
const AuthRoute_1 = __importDefault(require("./AuthRoute"));
function registerRoutes(app) {
    app.get("/health", (req, res) => {
        res.status(200).json({ message: "Server is running fine" });
    });
    app.use('/auth', AuthRoute_1.default);
}
