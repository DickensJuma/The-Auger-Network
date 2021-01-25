"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mail_1 = __importDefault(require("@sendgrid/mail"));
const config_1 = __importDefault(require("../config"));
mail_1.default.setApiKey(config_1.default.sendgridApiKey);
class ReportRouter {
    constructor() {
        this.router = express_1.Router();
    }
    sendMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.msg) {
                return res.send({ status: 'error', message: 'missing message' });
            }
            try {
                yield mail_1.default.send(req.body.msg);
                return res.send({ status: 'success' });
            }
            catch (error) {
                console.error(`${error.code} - ${error.message}`); // eslint-disable-line
                res.send(`${error.code} - ${error.message}`);
            }
        });
    }
    init() {
        this.router.post('/', this.sendMessage);
    }
}
exports.ReportRouter = ReportRouter;
const reportRoutes = new ReportRouter();
reportRoutes.init();
exports.default = reportRoutes.router;
//# sourceMappingURL=ReportRouter.js.map