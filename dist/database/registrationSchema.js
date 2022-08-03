"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const registration = new Schema({
    Fullname: {
        type: String,
        required: true,
        lowercase: true
    },
    Phone: {
        type: Number,
        required: true,
        unique: true
    },
    Country: {
        type: String,
        required: true
    },
    Bank: {
        type: String,
        required: true,
        lowercase: true
    },
    AccountType: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now()
    }
});
registration.statics.findByBank = function (Bank) {
    return this.find({ Bank: new RegExp(Bank) });
};
const BankSearch = mongoose_1.default.model('registration', registration);
exports.default = BankSearch;
