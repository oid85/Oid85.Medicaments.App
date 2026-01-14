import { CONSTANTS } from "./constants"

export const reserveColor = (value) => {
    if (value <= 5) { return CONSTANTS.COLOR_TOMATO }
    if (value <= 10) { return CONSTANTS.COLOR_LIGHTSALMON }
    if (value <= 15) { return CONSTANTS.COLOR_YELLOW }

    return CONSTANTS.COLOR_GREEN
}