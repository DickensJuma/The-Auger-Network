"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const package_json_1 = __importDefault(require("../package.json"));
// routes
const UrlCheckRouter_1 = __importDefault(require("./routes/UrlCheckRouter"));
const ReportRouter_1 = __importDefault(require("./routes/ReportRouter"));
// config
const config_1 = __importDefault(require("./config"));
// debug
const log = debug_1.default('server:index');
const app = express_1.default();
function onListening() {
    log('Server thread started');
}
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;
    switch (error.code) {
        case 'EACCES':
            log('Required elevated privileges');
            process.exit(1);
        case 'EADDRINUSE':
            log('Port is already in use');
            process.exit(1);
        default:
            throw error;
    }
}
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(compression_1.default());
// routes
app.get('/', (req, res) => {
    res.send(`<strong><code>
            🏄‍♀️ <br />
            Ocean Protocol Commons Server v${package_json_1.default.version}<br />
            <a href="https://github.com/oceanprotocol/commons" style="text-decoration:none;color:#f6388a">github.com/oceanprotocol/commons</a>
        </code></strong>`);
});
app.use('/api/v1/urlcheck', UrlCheckRouter_1.default);
app.use('/api/v1/report', ReportRouter_1.default);
/// catch 404
app.use((req, res) => {
    res.status(404).send();
});
// listen
const server = app.listen(config_1.default.app.port);
server.on('listening', onListening);
server.on('error', onError);
exports.default = server;
//# sourceMappingURL=server.js.map