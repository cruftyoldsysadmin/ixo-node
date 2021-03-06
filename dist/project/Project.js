"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ProjectSchema = new mongoose_1.Schema({
    tx: {
        type: String,
        index: true,
        unique: true // Unique index. 
    },
    created: {
        type: Date,
        default: Date.now
    },
    owner: {
        did: {
            type: String,
            required: true,
            index: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
        index: true
    }
});
exports.ProjectSchema.pre("save", function (next) {
    next();
});
exports.Project = mongoose_1.model("Project", exports.ProjectSchema);
