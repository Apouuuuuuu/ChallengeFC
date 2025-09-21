/*
Reverse Engineering
------------------------------
MISSION : Analysez ce script et expliquez ce qu'il fait

Ce code applique plusieurs transformations complexes. Déterminez sa logique finale.
*/

function transformationAlpha(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const char = data[i];
    if (/[a-zA-Z]/.test(char)) {
      const shift = (i % 3) + 1;
      if (char >= "A" && char <= "Z") {
        const newChar = String.fromCharCode(
          ((char.charCodeAt(0) - "A".charCodeAt(0) + shift) % 26) +
            "A".charCodeAt(0)
        );
        result.push(newChar);
      } else {
        const newChar = String.fromCharCode(
          ((char.charCodeAt(0) - "a".charCodeAt(0) + shift) % 26) +
            "a".charCodeAt(0)
        );
        result.push(newChar);
      }
    } else {
      result.push(char);
    }
  }
  return result.join("");
}

function transformationBeta(text) {
  const words = text.split(" ");
  const modified = [];
  for (const word of words) {
    if (word.length >= 4) {
      const middle = word.slice(1, -1);
      const scrambled = middle.split("").reverse().join("");
      const newWord = word[0] + scrambled + word[word.length - 1];
      modified.push(newWord);
    } else {
      modified.push(word);
    }
  }
  return modified.join(" ");
}

function transformationGamma(text) {
  const vowels = "aeiouAEIOU";
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let result = "";

  for (const char of text) {
    if (vowels.includes(char)) {
      const idx = vowels.indexOf(char);
      result += consonants[idx % consonants.length];
    } else if (consonants.includes(char)) {
      const idx = consonants.indexOf(char);
      result += vowels[idx % vowels.length];
    } else {
      result += char;
    }
  }
  return result;
}

function processeurMaster(inputString) {
  const step1 = transformationAlpha(inputString);
  const step2 = transformationBeta(step1);
  const finalResult = transformationGamma(step2);
  return finalResult;
}

// Test
const original = "SECRET MESSAGE";
const result = processeurMaster(original);

// ============================================================
// VOTRE ANALYSE
// ============================================================
//
// QUE FAIT CE SCRIPT EN GÉNÉRAL ?
//
//
// RÉSULTAT FINAL ATTENDU POUR "SECRET MESSAGE" :
