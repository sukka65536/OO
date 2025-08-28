// @ts-check

class Utils {

    /**
     * valueがundefinedまたはnullでないことを強制させる
     * @public
     * @static
     * @template T
     * @param {T | undefined | null} value
     * @returns {T}
     */
    static requireNonNull(value) {
        if (value === undefined || value === null)
            throw new Error("値がundefinedまたはnullです。");
        return value;
    }

    /**
     * 0以上max未満の疑似乱数を返す
     * @overload
     * @param {number} max
     * @returns {number}
     * 
     * min以上max未満の疑似乱数を返す
     * @overload
     * @param {number} min
     * @param {number} max
     * @returns {number}
     * 
     * @public
     * @static
     * @param {number} x1
     * @param {number | void} x2
     * @returns {number}
     */
    static randomWithinRange(x1, x2) {
        if (x2 === undefined)
            return Math.random() * x1;
        else
            return Math.random() * (x2 - x1) + x1;
    }

    /**
     * 0以上max未満の整数を返す
     * @overload
     * @param {number} max
     * @returns {number}
     * 
     * min以上max未満の整数を返す
     * @overload
     * @param {number} min
     * @param {number} max
     * @returns {number}
     * 
     * @public
     * @static
     * @param {number} x1
     * @param {number | void} x2
     * @returns {number}
     */
    static randomIntWithinRange(x1, x2) {
        if (x2 === undefined)
            return Math.floor(Math.random() * x1);
        else
            return Math.floor(Math.random() * (x2 - x1) + x1);
    }

    /**
     * 配列の中のランダムな要素を返す
     * @public
     * @static
     * @template T
     * @param {Array<T>} array
     * @return {T}
     */
    static getRandomElement(array) {
        const index = Utils.randomIntWithinRange(array.length);
        const randomElement = Utils.requireNonNull(array.at(index));
        return randomElement;
    }
}