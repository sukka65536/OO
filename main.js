// @ts-check

class Main {

    /**
     * メイン処理
     * @public
     * @static
     * @returns {void}
     */
    static main() {
        const OoText = Utils.requireNonNull(document.getElementById("OoText"));

        /**
         * 「おお」の位置、大きさをランダムに指定する
         * @returns {void}
         */
        const setStyleForOoText = () => {
            OoText.style.fontSize = Utils.randomWithinRange(200, 1000) + "%";
            OoText.style.fontFamily = Fonts.getRandomFont();
            OoText.style.left = Utils.randomWithinRange(window.innerWidth - OoText.clientWidth) + "px";
            OoText.style.top = Utils.randomWithinRange(window.innerHeight - OoText.clientHeight) + "px";
            OoText.style.color = this.getRandomCSSRGBColor();
        }

        // 「おお」がクリックされたら暴れ始める
        OoText.addEventListener("click", function () {
            setInterval(setStyleForOoText, 10);
        });
    }

    /**
     * ランダムなrgb値を生成し、rgb(xx, xx, xx)の形で返す
     * @private
     * @static
     * @returns {string}
     */
    static getRandomCSSRGBColor() {
        return "rgb(" + new Array(3).fill(0).map(zero => Utils.randomIntWithinRange(256)).join(", ") + ")";
    }
}

window.onload = () => { Main.main(); }