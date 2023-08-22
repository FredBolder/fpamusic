class Utils {
  static getStringFromList(str, idx) {
    // This function returns a string from a comma separated list in str (example: "Piano, Drums, Guitar").
    let result = ""; // The variable is storing the name with index(if available), if not it is returning an empty string.
    const items = str.split(",");
    if (idx >= 0 && idx < items.length) {
      result = items[idx].trim();
    } else {
      result = "";
    }

    return result;
  }

  static log(msg, mode = 0) {
    // mode
    // 0 = console
    // 1 = window
    switch (mode) {
      case 0:
        console.log(msg);
        break;
      case 1:
        window.alert(msg);
        break;
      default:
        break;
    }
  }
}

export { Utils };
