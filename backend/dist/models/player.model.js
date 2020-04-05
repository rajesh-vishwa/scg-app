"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
exports.playerSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true, minlength: 3, maxlength: 100 },
    lastName: { type: String, required: true, minlength: 3, maxlength: 100 },
    nickName: { type: String, required: true, minlength: 2, maxlength: 50 },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 255
    },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User", required: true }
});
exports.Player = mongoose_1.default.model("Player", exports.playerSchema);
