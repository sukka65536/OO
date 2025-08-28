// @ts-check

class Main {

    /**
     * @public
     * @static
     * @returns {void}
     */
    static main() {
        const OoText = Utils.requireNonNull(document.getElementById("OoText"));
        OoText.style.position = "absolute";

        OoText.addEventListener("click", function () {
            setInterval(() => {
                const posX = Math.random() * window.outerWidth;
                const posY = Math.random() * window.outerHeight;
                this.style.left = posX + "px";
                this.style.top = posY + "px";
            }, 10);
        });
    }
}

window.onload = () => { Main.main(); }