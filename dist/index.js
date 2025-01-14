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
const core_1 = __importDefault(require("@actions/core"));
const github_1 = __importDefault(require("@actions/github"));
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myInput = core_1.default.getInput('myInput');
        core_1.default.debug(`Hello ${myInput} from inside a container`);
        // Get github context data
        const context = github_1.default.context;
        console.log(`We can even get context data, like the repo: ${context.repo.repo}`);
    }
    catch (error) {
        if (error instanceof Error) {
            core_1.default.setFailed(error.message);
        }
        else {
            core_1.default.setFailed(JSON.stringify(error));
        }
    }
});
run();
