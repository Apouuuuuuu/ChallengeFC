/*
Reverse Engineering
---------------------------------------
MISSION : Analysez ce script et expliquez ce qu'il fait

Décrivez le but général et le résultat final.
*/

function traiterNombres(liste) {
  const resultat = [];
  for (let num of liste) {
    if (num > 10) {
      const nouveau = num * 2;
      resultat.push(nouveau);
    } else {
      const nouveau = num + 5;
      resultat.push(nouveau);
    }
  }
  return resultat;
}

function filtrerPairs(liste) {
  const nouveaux = [];
  for (let element of liste) {
    if (element % 2 === 0) {
      nouveaux.push(element);
    }
  }
  return nouveaux;
}

function calculerFinal(liste) {
  let total = 0;
  for (let val of liste) {
    total += val;
  }
  return liste.length > 0 ? total / liste.length : 0;
}

// Execution principale
const donnees = [3, 7, 12, 15, 8, 20, 1, 9];
const etape1 = traiterNombres(donnees);
const etape2 = filtrerPairs(etape1);
const resultatFinal = calculerFinal(etape2);

console.log(`Données initiales: ${donnees}`);
console.log(`Après traitement: ${etape1}`);
console.log(`Après filtrage: ${etape2}`);
console.log(`Résultat final: ${resultatFinal}`);

// ============================================================
// VOTRE ANALYSE
// ============================================================
//
// QUE FAIT CE SCRIPT EN GÉNÉRAL ?
//
//
// RÉSULTAT FINAL ATTENDU :
//
