"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
const cors = (0, cors_1.default)();
app.use(cors);
app.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
});
//app.listen(port, () => console.log(`Running on port ${port}`));
exports.default = (0, serverless_http_1.default)(app, { provider: "aws" });
//# sourceMappingURL=index.js.map