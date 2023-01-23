// @ts-check
/**
 * Initialize the project
 * @param {object} config 
 * @param {boolean} config.debug 
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}

/**
 * Exit the program
 * @param {number} code 
 * @returns number
 */
export function exit(code) {
    return code + 1;
}

// JSDoc comment 문법
// TS가 JS 파일을 확인해줄 수 있다.