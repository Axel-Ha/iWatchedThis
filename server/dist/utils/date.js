"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentAnimeSeason = getCurrentAnimeSeason;
exports.getNextAnimeSeason = getNextAnimeSeason;
function getCurrentAnimeSeason() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    if (month >= 1 && month <= 3) {
        return { season: 'WINTER', seasonYear: year };
    }
    else if (month >= 4 && month <= 6) {
        return { season: 'SPRING', seasonYear: year };
    }
    else if (month >= 7 && month <= 9) {
        return { season: 'SUMMER', seasonYear: year };
    }
    else {
        return { season: 'FALL', seasonYear: year };
    }
}
function getNextAnimeSeason() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    if (month >= 1 && month <= 3) {
        return { season: 'SPRING', seasonYear: year };
    }
    else if (month >= 4 && month <= 6) {
        return { season: 'SUMMER', seasonYear: year };
    }
    else if (month >= 7 && month <= 9) {
        return { season: 'FALL', seasonYear: year };
    }
    else {
        return { season: 'WINTER', seasonYear: year };
    }
}
