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
exports.OAuthFetch = exports.Fetch = void 0;
class Fetch {
    constructor(opts = {}) {
        this.opts = opts;
        this.before = [];
        this.after = [];
    }
    do(uri, method, init) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url, opts } = this.merge(uri, method, init);
            const res = yield fetch(url.href, opts);
            return res;
        });
    }
    merge(uri, method, opts) {
        var _a;
        const url = new URL(uri, (_a = this.opts) === null || _a === void 0 ? void 0 : _a.baseUrl);
        if (this.opts.query) {
            url.searchParams.set;
            url.search = this.opts.query.toString();
        }
        opts = Object.assign({ method }, this.opts, opts);
        if (opts.query) {
            for (const key in opts.query) {
                if (Array.isArray(opts.query[key])) {
                    for (const val of opts.query[key]) {
                        url.searchParams.append(key, val);
                    }
                }
                else {
                    url.searchParams.set(key, opts.query[key]);
                }
            }
        }
        delete opts.query;
        delete opts.baseUrl;
        return { url, opts };
    }
    get(uri, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.do(uri, 'GET', opts);
        });
    }
    post(uri, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.do(uri, 'POST', opts);
        });
    }
    put(uri, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.do(uri, 'PUT', opts);
        });
    }
    delete(uri, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.do(uri, 'DELETE', opts);
        });
    }
}
exports.Fetch = Fetch;
class OAuthFetch extends Fetch {
    constructor(opts = {}, store) {
        super(opts);
        this.store = store;
    }
}
exports.OAuthFetch = OAuthFetch;
