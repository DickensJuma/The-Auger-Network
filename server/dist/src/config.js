"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    app: { port: 4000 },
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    ipfsGatewayUri: process.env.IPFS_GATEWAY_URI || 'https://gateway.ipfs.io'
};
exports.default = config;
//# sourceMappingURL=config.js.map