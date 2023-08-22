class Utils {
    static getStringFromList(str, idx) {
        // This function returns a string from a comma separated list in str (example: "Piano, Drums, Guitar").
        // When idx is 0, the first string is returned.
        // When idx is invalid, an empty string is returned.

        return "";
    }

    static log(str, mode = 0) {
        // mode
        // 0 = console
        // 1 = window
        switch (mode) {
            case 0:
                console.log(str);
                break;
            case 1:
                window.alert(str);
                break;
            default:
                break;
        }
    }
}

export { Utils };