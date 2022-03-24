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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tred = void 0;
const fetch_1 = require("./fetch");
const store_1 = require("./store");
class Tred {
    constructor(config) {
        this.config = config;
        this.fetch = new fetch_1.OAuthFetch({
            baseUrl: 'https://www.reddit.com/api/v1/',
            query: {
                raw_json: '1',
            },
            headers: {
                'User-Agent': config.userAgent,
            },
        }, new store_1.LocalStore());
    }
    top() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.fetch.get('/top.json');
            return res.json();
        });
    }
    best() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.fetch.get('/best.json');
            return res.json();
        });
    }
}
exports.Tred = Tred;
