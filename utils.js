// @ts-check

class Utils {

    /**
     * @public
     * @static
     * @template T
     * @param {T | undefined | null} value
     * @returns {T}
     */
    static requireNonNull(value) {
        if (value === undefined || value === null)
            throw new Error();
        return value;
    }
}