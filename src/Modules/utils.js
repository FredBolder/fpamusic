class Utils {
  static capitalize(str) {
    let firstLetter = "";
    let rest = "";
    let result = "";

    if (str === "") {
      result = "";
    } else {
      firstLetter = str[0].toUpperCase();
      rest = str.slice(1).toLowerCase();
      result = firstLetter + rest;
    }
    return result;
  }

  static async checkLinksValidity(linksArray) {
    for (let i = 0; i < linksArray.length; i++) {
      const link = linksArray[i];
      try {
        const response = await fetch(link);
        const isValid = response.ok;
        if (!isValid) {
          Utils.log(`Link ${link} is invalid!`, 0);
        } else {
          //Utils.log(`Link ${link} is valid`, 0);
        }
      } catch (error) {
        Utils.log(`Error checking link ${link}: ${error.message}`, 0);
      }
    }
  }

  static getCaretPosition(editableDiv) {
    // https://stackoverflow.com/questions/3972014/get-contenteditable-caret-position
    // Changed the code to the new JavaScript standard
    let caretPos = 0;
    let sel;
    let range;

    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount) {
        range = sel.getRangeAt(0);
        if (range.commonAncestorContainer.parentNode === editableDiv) {
          caretPos = range.endOffset;
        }
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      if (range.parentElement() === editableDiv) {
        let tempEl = document.createElement("span");
        editableDiv.insertBefore(tempEl, editableDiv.firstChild);
        let tempRange = range.duplicate();
        tempRange.moveToElementText(tempEl);
        tempRange.setEndPoint("EndToEnd", range);
        caretPos = tempRange.text.length;
      }
    }
    return caretPos;
  }

  static getStringFromList(str, idx) {
    // This function returns a string from a comma separated list in str (example: "Piano, Drums, Guitar").
    let result = "";
    const items = str.split(",");
    if (idx >= 0 && idx < items.length) {
      result = items[idx].trim();
    } else {
      result = "";
    }
    return result;
  }

  static getWordBetweenBrackets(text, position) {
    let word = "";
    let startIndex = text.lastIndexOf("[", position);
    let endIndex = text.indexOf("]", position);

    if (startIndex !== -1 && endIndex !== -1) {
      word = text.slice(startIndex + 1, endIndex);
      if (word.includes("]") || word.includes("[")) {
        word = "";
      }
      if (word.endsWith("♫")) {
        word = word.slice(0, word.length - 1);
      }
    }
    return word;
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

  static partOfString(str, n) {
    let result = str;

    if (result.length > n) {
      result = result.slice(0, n + 1);
      result += "...";
    }
    return result;
  }

  static removeChars(s, c) {
    let result = s;

    for (let i = 0; i < c.length; i++) {
      result = result.replace(c[i], "");
    }
    return result;
  }

  static spacesToUnderscores(str) {
    let changedString = str.split(" ").join("_");
    return changedString;
  }

  static underscoresToSpaces(str) {
    let changedString = str.split("_").join(" ");
    return changedString;
  }
}

export { Utils };
