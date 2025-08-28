// @ts-check

class Fonts {

    /** @private @static @type {Array<string>} */
    static FONTS = [
        "HG行書体",
        "MS UI Gothic",
        "MS PGothic",
        "MS Gothic",
        "MS PMincho",
        "MS Mincho",
        "Meiryo",
        "Meiryo UI",
        "Yu Gothic",
        "Yu Mincho"
    ];

    /**
     * FONTSの中のランダムなフォントを返す
     * @public
     * @static
     * @returns {string}
     */
    static getRandomFont() {
        return Utils.getRandomElement(this.FONTS);
    }
}