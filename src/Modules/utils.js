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

  static underscoresToSpaces(str) {
    let changedString = str.split("_").join(" ");
    return changedString;
  }

  static spacesToUnderscores(str) {
    let changedString = str.split(" ").join("_");
    return changedString;
  }

//   static async checkLinksValidity(linksArray) {
//     const results = [];

//     for (const link of linksArray) {
//       try {
//         const response = await fetch(link);
//         const isValid = response.ok;

//         results.push({
//           link,
//           isValid
//         });

//         Utils.log(`Link ${link} is ${isValid ? "valid" : "invalid"}`, 0);
//       } catch (error) {
//         results.push({
//           link,
//           isValid: false
//         });

//         Utils.log(`Error checking link ${link}: ${error.message}`, 0);
//       }
//     }
//     //Utils.log(typeof results)
//     Utils.log(results)
//     return results;
//   }

  
// }

// const linksToCheck = [
//   "https://en.wikipedia.org/wiki/Drum_kit",
//   "https://www.virtualdrumming.com/",
//   "https://www.musicca.com/drums",
//   "https://virtualpiano.net/",
//   "https://www.musicca.com/piano",
//   "https://www.youtube.com/playlist?list=PLrNNL05e9FT9UnPiTktveaPrye0exDY9N",
//   "https://en.wikipedia.org/wiki/Recorder_(musical_instrument)",
//   "https://professionalcomposers.com/flute-vs-recorder/",
//   "https://americanrecorder.org/recorder_fingering_charts.php",
//   "https://www.doctormusik.com/apps-and-games/virtual-recorder/",
//   "https://www.youtube.com/@Team_Recorder",
// ];

// console.log(Utils.checkLinksValidity(linksToCheck));
}
export { Utils };
