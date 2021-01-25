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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../src/server"));
afterAll(done => {
    server_1.default.close(done);
});
describe('GET /', () => {
    it('responds with success', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default).get('/');
        expect(response.status).toBe(200);
    }));
});
describe('POST /api/v1/urlcheck', () => {
    it('responds with json on http://', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default)
            .post('/api/v1/urlcheck')
            .send({ url: 'https://oceanprotocol.com/tech-whitepaper.pdf' });
        expect(response.status).toBe(200);
        expect(response.body).toBeTruthy();
    }));
    it('responds with json on ipfs://', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default)
            .post('/api/v1/urlcheck')
            .send({
            url: 'ipfs://QmX5LRpEVocfks9FNDnRoK2imf2fy9mPpP4wfgaDVXWfYD/video.mp4'
        });
        expect(response.status).toBe(200);
        expect(response.body).toBeTruthy();
    }));
    it('responds with error message when url is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default).post('/api/v1/urlcheck');
        const text = yield JSON.parse(response.text);
        expect(text.message).toBe('missing url');
    }));
});
describe('POST /api/v1/report', () => {
    const msg = {
        to: 'test@example.com',
        from: 'test@example.com',
        subject: 'My Subject',
        text: 'Text',
        html: '<strong>HTML</strong>'
    };
    it('responds with json', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default)
            .post('/api/v1/report')
            .send({ msg });
        expect(response.status).toBe(200);
        expect(response.body).toBeTruthy();
    }));
    it('responds with error', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default)
            .post('/api/v1/report')
            .send({ msg: 'Hello World' });
        expect(response.text).toBe("undefined - Cannot create property 'isMultiple' on string 'Hello World'");
    }));
    it('responds with error message when message is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default).post('/api/v1/report');
        const text = yield JSON.parse(response.text);
        expect(text.message).toBe('missing message');
    }));
});
describe('Errors', () => {
    it('responds with 404 on unknown path', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default).post('/whatever');
        expect(response.status).toBe(404);
    }));
});
//# sourceMappingURL=api.test.js.map