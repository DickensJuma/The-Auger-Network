"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const request_1 = __importDefault(require("request"));
const config_1 = __importDefault(require("../config"));
class UrlCheckRouter {
    /**
     * Initialize the UrlCheckRouter
     */
    constructor() {
        this.router = express_1.Router();
    }
    checkUrl(req, res) {
        let { url } = req.body;
        if (!url) {
            return res.send({ status: 'error', message: 'missing url' });
        }
        // map native IPFS URLs to gateway URLs
        if (url.includes('ipfs://')) {
            const cid = url.split('ipfs://')[1];
            url = `${config_1.default.ipfsGatewayUri}/ipfs/${cid}`;
        }
        request_1.default({
            method: 'HEAD',
            url,
            headers: { Range: 'bytes=0-' }
        }, (error, response) => {
            const { headers, statusCode } = response;
            const successResponses = statusCode.toString().startsWith('2') ||
                statusCode.toString().startsWith('416');
            if (response && successResponses) {
                const result = {};
                result.found = true;
                if (headers['content-length']) {
                    result.contentLength = headers['content-length'];
                }
                // sometimes servers send content-range header,
                // try to use it if content-length is not present
                if (headers['content-range'] &&
                    !headers['content-length']) {
                    const size = headers['content-range'].split('/')[1];
                    result.contentLength = size;
                }
                if (headers['content-type']) {
                    const typeAndCharset = headers['content-type'].split(';');
                    /* eslint-disable prefer-destructuring */
                    result.contentType = typeAndCharset[0];
                    if (typeAndCharset[1]) {
                        result.contentCharset = typeAndCharset[1].split('=')[1];
                    }
                    /* eslint-enable prefer-destructuring */
                }
                return res.send({ status: 'success', result });
            }
            return res.send({ status: 'error', message: error });
        });
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.post('/', this.checkUrl);
    }
}
exports.UrlCheckRouter = UrlCheckRouter;
// Create the MeRouter, and export its configured Express.Router
const urlCheckRoutes = new UrlCheckRouter();
urlCheckRoutes.init();
exports.default = urlCheckRoutes.router;
//# sourceMappingURL=UrlCheckRouter.js.map