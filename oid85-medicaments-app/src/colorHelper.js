import { CONSTANTS } from "./constants"

export const glucoseColor = (value) => {
    if (value >= 3.3 && value < 6.0) { return CONSTANTS.COLOR_GREEN }
    if (value >= 6.0 && value < 8.0) { return CONSTANTS.COLOR_YELLOW }
    if (value >= 8.0) { return CONSTANTS.COLOR_LIGHTSALMON }
    
    return CONSTANTS.COLOR_GREEN
}