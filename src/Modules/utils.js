class Utils {
  static getStringFromList(str, idx) {
    // This function returns a string from a comma separated list in str (example: "Piano, Drums, Guitar").
    let result = null; // The variable is storing the name with index(if available), if not it is returning an empty string.
    const items = str.split(",").map((item) => item.trim());
    // When idx is 0, the first string is returned.
    if (idx >= 0 && idx < items.length) {
      result = items[idx];
    } // When idx is invalid, an empty string is returned.
    else {
      result = "";
    }

    return result;
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
