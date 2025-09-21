/*
Reverse Engineering
---------------------------------------
MISSION : Analysez ce script et expliquez ce qu'il fait

Ce code traite des données selon certaines règles. Déterminez sa logique.
*/

function etapeA(texte) {
  let resultat = "";
  for (let char of texte) {
    if (/[a-zA-Z]/.test(char)) {
      if (char === char.toLowerCase()) {
        resultat += char.toUpperCase();
      } else {
        resultat += char.toLowerCase();
      }
    } else {
      resultat += char;
    }
  }
  return resultat;
}

function etapeB(texte) {
  const mots = texte.split(" ");
  const nouveauxMots = [];
  for (let mot of mots) {
    if (mot.length > 3) {
      const nouveauMot = mot[mot.length - 1] + mot.slice(1, -1) + mot[0];
      nouveauxMots.push(nouveauMot);
    } else {
      nouveauxMots.push(mot);
    }
  }
  return nouveauxMots.join(" ");
}

function etapeC(texte) {
  const voyelles = "aeiouAEIOU";
  let compteur = 0;
  for (let char of texte) {
    if (voyelles.includes(char)) {
      compteur++;
    }
  }
  return compteur;
}

function processeurPrincipal(inputText) {
  const resultat1 = etapeA(inputText);
  const resultat2 = etapeB(resultat1);
  const nombreFinal = etapeC(resultat2);
  return [resultat2, nombreFinal];
}

// Données test
const texteOriginal = "Hello World Programming";
const [texteTransforme, nombre] = processeurPrincipal(texteOriginal);

// ============================================================
// VOTRE ANALYSE
// ============================================================
//
// QUE FAIT CE SCRIPT EN GÉNÉRAL ?
//
//
// RÉSULTAT FINAL ATTENDU POUR "Hello World Programming" :
// Texte transformé :
// Nombre final :
