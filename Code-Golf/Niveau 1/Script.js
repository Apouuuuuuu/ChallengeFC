/*
Code Golf - Niveau 1
Réduire à maximum 2 lignes
---------------------------
Fonction qui calcule la somme des nombres pairs dans une liste

Code actuel : 9 lignes
Objectif : 4 lignes maximum

Résultat attendu :
12
0
20
0
*/

function sommeNombresPairs(liste) {
  let total = 0;
  for (let i = 0; i < liste.length; i++) {
    if (liste[i] % 2 === 0) {
      total = total + liste[i];
    }
  }
  return total;
}

// Tests
console.log(sommeNombresPairs([1, 2, 3, 4, 5, 6]));
console.log(sommeNombresPairs([1, 3, 5]));
console.log(sommeNombresPairs([2, 4, 6, 8]));
console.log(sommeNombresPairs([]));
